import React, {useEffect, useState} from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet, Alert, TextInput} from 'react-native';

import productData from './product_data.json'

import {ProductCard} from './components'


const App = () => {
    const renderItemData = ({item}) => <ProductCard product={item}/>

    // useEffect(() => {
    //     Alert.alert("Herzlich Wilkommen", "🎁Das Einkaufen im Geshäft ist einfach und bequem🎁" )

    // }, [])

    
    return(
        <SafeAreaView>

            <View>
                <Text style={styles.banner}> GESHÄFT </Text>
                <View style={styles.searchbar}>
                    <TextInput
                    placeholder='Ürün ara...'
                    

                    />
                </View>
                <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={productData}
                renderItem={renderItemData}
                numColumns={2}
                />

            </View>

           
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    banner:{
       
        color: 'red',
        fontSize: 40,
        textAlign: 'center',
        marginVertical: 30,
        fontWeight: 'bold'
    },
    searchbar:{
        backgroundColor: '#eceff1',
        padding: 10,
        margin:5,
        borderRadius:10
    }
})
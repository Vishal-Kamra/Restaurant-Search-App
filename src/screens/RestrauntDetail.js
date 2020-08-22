import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, Image, View, ScrollView, FlatList } from 'react-native';
import yelp from '../api/yelp'

const RestrauntDetail = ({ route }) => {

    const [result, setResult] = useState({});
    const id = route.params.id;

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    }, [])

    return(
        <>
        <View>
            <Text style={style.name}>{result.name}</Text>
            <Text style={style.ratings}>Ratings : {result.rating} Stars</Text>
        </View>
            <FlatList 
                disableVirtualization={true}
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return (
                        <View>
                            <Image style={style.imageView} source={{ uri : item }} />
                        </View>
                    )
                }
            } />    
        </>      
    )  
}

const style = StyleSheet.create({
    imageView:{
        width:300,
        height:200,
        margin:10
    },
    name:{
        fontSize:20,
        fontWeight:"bold",
        margin:10,
        marginBottom:3
    },
    ratings:{
        fontSize:15,
        color:"grey",
        margin:10
    }
})

export default RestrauntDetail;
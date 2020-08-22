import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={style.view}>
            <Image style={style.image} source={{ uri:result.image_url }} />
            <Text style={style.text}>{result.name}</Text>
            <Text style={style.addInfo}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const style = StyleSheet.create({
    view:{
        marginLeft:17,
        marginBottom:10,
    },
    image:{
        width:230,
        height:100,
        borderRadius:4,
        marginHorizontal:5,
        marginVertical:5
    },
    text:{
        fontWeight:'bold',
        marginHorizontal:10,
        marginVertical:2,
    },
    addInfo:{
        marginHorizontal:10,
        marginTop:2,
        color:'grey'
    }

})

export default ResultsDetail
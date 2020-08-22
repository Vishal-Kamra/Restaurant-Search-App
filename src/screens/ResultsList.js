import React, { useEffect } from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                keyExtractor={result => result.id} 
                data={results} 
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Restraunt', {id:item.id})}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginVertical:6,
        marginTop:15,
        marginHorizontal:9
    }
})

export default ResultsList;
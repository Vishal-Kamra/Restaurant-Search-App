import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={style.viewStyle}>
            <Feather name='search' size={30} style={style.icon} />
            <TextInput autoCapitalize='none' autoCorrect={false}
             onChangeText={text => onTermChange(text)} 
             value={term}
             onEndEditing={onTermSubmit}
             style={style.textStyle} placeholder='Search' />
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle:{
        backgroundColor:'lightgrey',
        height:40,
        marginHorizontal:15,
        borderRadius:8,
        flexDirection:'row',
        marginTop:10
    },
    icon:{
        marginHorizontal:7,
        alignSelf:'center',
    },
    textStyle:{
        flex:1,
        marginLeft:5,
        fontSize:18,
    }
})

export default SearchBar;
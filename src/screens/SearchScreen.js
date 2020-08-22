import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from './SearchBar';
import yelp from '../api/yelp';
import ResultsList from './ResultsList'

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    function filter(price){
        return result.filter(results => {
            return results.price === price
        })
    }

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search',{
            params:{
                limit:40,
                term:searchTerm,
                location:'california, New York'
            }
        })
        setResult(response.data.businesses)
    } catch (err){
        setErrorMessage(err);
    }
    }

    useEffect(()=>{
        searchApi('pasta');
    }, [])

    return(
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar term={term} onTermChange={(newTerm)=>setTerm(newTerm)}
         onTermSubmit={()=>searchApi(term)} /> 
        <ResultsList title={'Cost Effective'} results={filter('$')} navigation={navigation} /> 
        <ResultsList title={'Bit Pricer'} results={filter('$$')} navigation={navigation} /> 
        <ResultsList title={'Bit Spender'} results={filter('$$$')} navigation={navigation} /> 
        </ScrollView>
        </>
    )    
}

export default SearchScreen;
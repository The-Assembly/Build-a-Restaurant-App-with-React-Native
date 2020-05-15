import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import ResulList from '../components/ResultList'
import useResults from '../hooks/useResults'




const SearchScreen = ({navigation}) =>{
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) =>{
        // price === $ || $$ || $$$
        return results.filter(results => {
            return results.price === price;
        })
    }
    
    
    return(
    <View style={{flex:1}}>
        <SearchBar
            //term={term} 
            onNewText ={newTerm => setTerm(newTerm)}
            onDoneText ={() => searchApi(term)}         
        />
        {/* <Text>We have found {results.length}</Text> */}
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ScrollView>
            <ResulList results={filterResultsByPrice('$')} title='Cost Effective' navigation={navigation}/>
            <ResulList results={filterResultsByPrice('$$')} title='Bit Pricer' navigation={navigation}/>
            <ResulList results={filterResultsByPrice('$$$')} title='Big Spender' navigation={navigation}/>
        </ScrollView>
        

    </View>
    )
}


const styles = StyleSheet.create({

})

export default SearchScreen
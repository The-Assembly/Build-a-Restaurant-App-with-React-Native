import React from 'react'
import {View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity} from 'react-native'
import ResultDetail from '../components/ResultDetail'


const ResultList = ({title, results, navigation}) =>{

    if(!results.length){
        return null;
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() =>navigation.navigate('ResultsShow', {id: item.id})}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
            >
            </FlatList>
        </View>
    )
}


const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 15
    }
})

export default ResultList
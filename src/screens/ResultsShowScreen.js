import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'




const ResultShowScreen = ({ navigation}) =>{
    const [result, setResult] = useState([])
    const id =navigation.getParam('id')
    
    
    
    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null
    }


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.text}>If you're looking for random paragraphs, 
            you've come to the right place. When a random word or a random sentence 
            isn't quite enough, the next logical step is to find a random paragraph. 
            We created the Random Paragraph Generator with you in mind. The process is quite simple. 
            Choose the number of random paragraphs you'd like to see and click the button. 
            Your chosen number of paragraphs will instantly appear.
            </Text>

            <FlatList
                horizontal
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return(
                    <View>
                        <Image style={styles.image} source={{uri: item}}/>
                    </View>
                    ) 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 200,
        marginHorizontal: 15,
        borderRadius: 4
    },
    title:{
        //borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal:5,
        backgroundColor: 'rgb(224, 223, 220)',
        marginHorizontal: 15,
        marginBottom: 10,
        fontSize:18,
        fontWeight: 'bold'
    },
    text:{
        //borderWidth: 2,
        marginHorizontal: 15,
        marginBottom: 10
    },
    container:{
        marginTop: 15
    }
})

export default ResultShowScreen
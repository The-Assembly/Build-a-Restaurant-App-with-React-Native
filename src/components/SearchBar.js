import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = props =>{
    
    return(
    <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput 
            style={styles.inputStyle} 
            placeholder='Search'
            //value={props.term}
            onChangeText={
                newTerm => props.onNewText(newTerm)
            }
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={() => props.onDoneText()}
        />
    </View>
    )
}


const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: 'rgb(224, 223, 220)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom:5,
        flexDirection: 'row'
    },
    inputStyle:{
        // borderWidth: 1,
        // borderColor: 'black',
        fontSize: 15,
        flex: 1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10
    },
})

export default SearchBar
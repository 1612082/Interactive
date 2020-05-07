import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ButtonRetan = (props) => {
    return (
        <View>
            <TouchableOpacity style = {[styles.button, {backgroundColor: props.color, borderWidth: props.borWidth}]}>
                <Text>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonRetan

const styles = StyleSheet.create({
    button:{
        width: 40,
        height: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
  
})

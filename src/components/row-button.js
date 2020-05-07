import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonRetan from './ButtonRetan';
const RowButton = () => {
    return (
        <View style = {styles.row}>
            <ButtonRetan
                color = "red"
                borWidth = "0"
                text = ""
            ></ButtonRetan>
            <ButtonRetan
                color = "green"
                borWidth = "0"
                text = ""
            ></ButtonRetan>
            <ButtonRetan
                color = "blue"
                borWidth = "0"
                text = ""
            ></ButtonRetan>
            <ButtonRetan
                color = "white"
                borWidth = "2"
                text = "Undo"
            ></ButtonRetan>
            <ButtonRetan
                color = "white"
                borWidth = "2"
                text = "Redo"
            ></ButtonRetan>
        </View>
    )
}

export default RowButton

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
    },
})


import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonRetan from './ButtonRetan';
const RowButton = (props) => {
    return (
        <View style = {styles.row}>
            <ButtonRetan
                color = {'red'}
                bW = {'0'}
                text = {''}
                onClick={()=>{props.changeColor('red')}}
            ></ButtonRetan>
            <ButtonRetan
                color = {'green'}
                bW = {'0'}
                text = {''}
                onClick={()=>{props.changeColor('green')}}
            ></ButtonRetan>
            <ButtonRetan
                color = {'blue'}
                bW = {'0'}
                text = {''}
                onClick={()=>{props.changeColor('blue')}}
            ></ButtonRetan>
            <ButtonRetan
                color = {'white'}
                bW = {'2'}
                text = {'Undo'}
                onClick={()=>{props.Undo()}}
            ></ButtonRetan>
            <ButtonRetan
                color = {'white'}
                bW = {'2'}
                text = {'Redo'}
                onClick={()=>{props.Next()}}
            ></ButtonRetan>
        </View>
    )
}

export default RowButton

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        // backgroundColor: 'yellow',

    },
})


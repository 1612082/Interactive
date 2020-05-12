import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RowButton from './row-button'
import ButtonRetan from './ButtonRetan';

const home = (props) => {
    const [isState, setColor] = React.useState('white')
    
    var changeColor = (color) => {
       setColor(color)
    }
    var undo = () =>{
        if (isState === 'red') {
            setColor('blue')
        } else if (isState === 'green') {
            setColor('red')
        } else  if (isState === 'blue'){
            setColor('green')
        } else {setColor('white')}
    }
    var next = () =>{
        if (isState === 'red') {
            setColor('green')
        } else if (isState === 'green') {
            setColor('blue')
        } else  if (isState === 'blue'){
            setColor('red')
        } else {setColor('white')}
    }
    return (
        
        <View style = {styles.home}>
           <RowButton changeColor = {changeColor} Undo = {undo} Next = {next}></RowButton>
            <View style = {styles.outView}>
                <View  style = { [styles.viewRetan, {backgroundColor:isState}]} >

                </View>
            </View>
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    home:{
        flex: 1,
        // backgroundColor: 'teal',
    },
    rowBut:{
        
        
    },
    outView:{
        flex: 1,
        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    viewRetan:{
        width: 120,
        height: 120,
        borderWidth: 2,
        // backgroundColor: 'blue',
    },
    row:{
        flexDirection: 'row',
        // backgroundColor: 'yellow',

    },
    button:{
        width: 40,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
{/* <View style = {styles.row}>
               <TouchableOpacity style = {[styles.button, {backgroundColor: 'red', borderWidth: 0}]}
               onPress = {()=>{
                    setColor('red');
                }}
               ></TouchableOpacity>
               <TouchableOpacity style = {[styles.button, {backgroundColor: 'green', borderWidth: 0}]}
               onPress = {()=>{
                setColor('green');
                }}
               ></TouchableOpacity>
               <TouchableOpacity style = {[styles.button, {backgroundColor: 'blue', borderWidth: 0}]}
               onPress = {()=>{
                setColor('blue');
                }}
               ></TouchableOpacity>
               <TouchableOpacity style = {[styles.button, {backgroundColor: 'white', borderWidth: 2}]}
               onPress = {()=>{
                undo();
                }}
               >
                   <Text>Undo</Text>
               </TouchableOpacity>
               <TouchableOpacity style = {[styles.button, {backgroundColor: 'white', borderWidth: 2}]}
               onPress = {()=>{
                undo();
                }}
               >
                    <Text>Next</Text>
               </TouchableOpacity>
           </View> */}
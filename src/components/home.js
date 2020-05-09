import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RowButton from './row-button'

const home = (props) => {
    const {isState, setColor} = useState(0)
    var nameColor = () => {
        if (isState === 0) {
            return 'white'
        } else if (isState === 1) {
            return 'red'
        } else if (isState === 2) {
            return 'green'
        } else if (isState === 3) {
            return 'blue'
        }
    }
    return (

        <View style = {styles.home}>
            
            <RowButton style = {styles.rowBut} stateColor = {isState}>
            
            </RowButton>
            <View style = {styles.outView}>
                <View  style = { styles.viewRetan}>

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
    
})

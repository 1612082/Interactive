import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RowButton from './row-button'

const home = () => {
    return (

        <View style ={styles.home}>
            <RowButton style = {styles.rowBut}>
            
            </RowButton>
            <View style = {styles.viewOutSide}>
                
                <View   View style = {styles.viewRetan}>

                </View>
            </View>
            
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    home:{
        flex: 1,
    },
    rowBut:{
        flex: 1
    },
    viewOutSide:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'pink'
    },
    viewRetan:{
        width: 120,
        height:120,
        borderWidth: 1,
        alignSelf: 'center'

    },
    
})

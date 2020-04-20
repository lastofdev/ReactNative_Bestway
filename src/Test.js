import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


export function Test () {


return(
        <View style={styles.filtervbar}>
            <Button
            title='lolka'></Button>
        </View>
    )
}



const styles = StyleSheet.create({
    filtervbar:{
      backgroundColor: 'white',
    },
    filterinbar:{
      marginTop: 15,
    }
});
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Header = (props) => {
    return (
        <View style={styles.header} />
    )
}

const styles = StyleSheet.create({
    header:{
        height: 33,
        backgroundColor:  '#4C8866',
        paddingBottom: 10
    }
})
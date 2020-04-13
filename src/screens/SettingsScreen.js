import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';


export function Settings () {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>О сервисе</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    },
});


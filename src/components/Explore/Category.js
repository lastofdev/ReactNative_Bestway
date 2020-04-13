import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

class Category extends Component{
    render(){
        return(
            <TouchableOpacity>
            <View style={styles.filterbuttons}>
                <View style={{flex: 1}}>
                   <Text style={styles.filtertext}>{this.props.name}</Text>
                </View>              
            </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    filterbuttons:{
        borderColor: '#f4f4f4',
        borderWidth: 1,
        borderRadius: 25,
        height:40,
        marginLeft: 10,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    filtertext:{
        fontSize: 18,
        justifyContent: 'center',
        padding: 7,
    }
});

export default Category;
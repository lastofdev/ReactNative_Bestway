import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Category from './components/Explore/Category'



export function Mainbar () {

return(
        <View style={styles.filtervbar}>
            <ScrollView
            scrollEventThrottle={16}
            >
                <View style={ styles.filtervbar}>
                <View style={styles.filterinbar}>
                        <ScrollView
                        showsVerticalScrollIndicator={false}
                        >
                            <Category 
                            name='Еда'
                            />
                            <Category 
                            name='Лекарства'/>
                            <Category 
                            name='Товары'/>
                            <Category 
                            name='Услуги'/>
                            <Category 
                            name='Маски'/>
                            <Category 
                            name='Правильное питание'
                            />    
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
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
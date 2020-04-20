import React, { Component  } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Category from './components/Explore/Category'



export function Mainbar1 () {

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
                            name='Еда2'
                            onPress={() => navigation.openDrawer()}/>
                            <Category 
                            name='Лекарства2'/>
                            <Category 
                            name='Товары2'/>
                            <Category 
                            name='Услуги2'/>
                            <Category 
                            name='Маски2'/>
                            <Category 
                            name='Правильное питание2'
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
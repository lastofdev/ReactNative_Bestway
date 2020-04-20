import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Filterbar } from '../FilterBar'
import { Header } from '../Header'
import { Mainbar } from '../Mainbar'

export function HomeScreen({ navigation }) {
    return (
      <View>
        <Header />
        <View style={styles.navbar}>
           <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            >
              <Image
              title="Open drawer" 
              style={styles.stretch}
              source={require('../img/menu3.png')} 
              />
            </TouchableOpacity>
        </ View>
        <Filterbar />
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    main: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 25
    },
    stretch: {
      width: 35,
      height: 35,
      marginTop: 10,
      marginLeft: 15
    },
    navbar:{
      height: 60,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#4C8866',
      paddingBottom: 10
  },
  text:{
      color: '#fff',
      fontSize: 20,
  },
  });
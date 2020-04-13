import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native'
import { Navbar } from './src/Navbar'
import { Header } from './src/Header'
//import { ModalNavigator } from './src/Navigation/ModalNavigator'
import {MyDrawer} from './src/MyDrawer'


export default function App() {
 
  return (
    <View>
      <Header />
      <Navbar />
      <NavigationContainer>
         <MyDrawer />
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  text: {}
});

import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, 
         DrawerItem, 
         DrawerItemList} from '@react-navigation/drawer';
//import { Avatar, Title, Caption, Paragraph, 
// Drawer, Text, Switch, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Drawer from 'react-native-drawer';

export function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.logo}>
               <Text style={styles.logotext}>MYAPP</Text>
            </View>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Закрыть"
            onPress={() => props.navigation.closeDrawer()}
            icon={({color, size}) => (
              <Icon 
              name="ice-cream"
              color={color}
              />
            )}
          />
          <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}
            icon={({color, size}) => (
              <Icon 
              name="heart-multiple"
              color={color}
              />
            )}
          />
          <DrawerItem
            label="to"
            onPress={() => props.navigation.navigate('HomeScreen')}
            icon={({color, size}) => (
              <Icon 
              name="fingerprint"
              color={color}
              />
            )}
          />
          <DrawerItem 
          style={styles.bottomDrawerSection}
            icon={({color, size}) => (
              <Icon 
              name="exit-to-app"
              color={color}
              />
            )}
            label="Выйти"
            onPress={() => {}}/>
        </DrawerContentScrollView>
      );
}
  
const styles = StyleSheet.create({
      view:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
      },
      bottomDrawerSection: {
        bottom: 0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
      },
      logo:{
        flex: 1,
        alignItems: 'center',
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 2,
      },
      logotext:{
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 20,
      }
  });
  
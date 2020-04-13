import * as React from 'react'
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer'
import {CustomDrawerContent} from './DrawerContent'
import {Settings} from '../screens/SettingsScreen'
import {Userdata} from '../screens/UserDataScreen'
import {SubControl} from '../screens/SubControlScreen'
import {HomeScreen} from '../screens/HomeScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Navbar } from '../FilterBar'

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ 
      drawerLabel: 'Home'
    }}
      />
      <Drawer.Screen 
      name="SubControle" 
      component={SubControl} 
      options={{ drawerLabel: 'Мои подписки'}}
      />
      <Drawer.Screen
      name="UserDataScreen"
      component={Userdata}
      options={{ drawerLabel: 'Мои данные'}}
      />
      <Drawer.Screen
      name="SettingsScreen"
      component={Settings}
      options={{ drawerLabel: 'О сервисе'}}
      />
    </Drawer.Navigator>
  );
}
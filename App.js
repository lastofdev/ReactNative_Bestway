import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './src/Navigation/Mydrawer';

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
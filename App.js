import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoyScreen from './Screens/BoyScreen'
import GirlScreen from './Screens/GirlScreen'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="GirlScreen" 
        options ={{tabBarIcon: ()=> <Text>😻</Text>}}
        component={GirlScreen} />
        <Tab.Screen
         name="BoyScreen" 
         options ={{tabBarIcon: ()=> <Text>🤠</Text>}}
         component={BoyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

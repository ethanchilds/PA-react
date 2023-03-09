import React from 'react'

import HomeScreen from './HomeScreen'
import NamesScreen from './NamesScreen'
import UserScreen from './UserScreen'
import SettingScreen from './SettingScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Names" component={NamesScreen}/>
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default Main
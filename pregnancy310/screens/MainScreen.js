import React from 'react'

import HomeScreen from './HomeScreen'
import NamesScreen from './NamesScreen'
import UserScreen from './UserScreen'
import SettingScreen from './SettingScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component'
import CountdownScreen from './CountdownScreen'

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name="home-outline"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Names"
        component={NamesScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons 
              name="list-outline"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons 
              name="person-outline"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Countdown"
        component={CountdownScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons 
              name="person-outline"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons 
              name="settings-outline"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default Main
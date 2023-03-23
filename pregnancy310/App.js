import React from 'react'

import MainScreen from './screens/MainScreen'
import CreateAccountSreen from './screens/CreateAccountScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  // return <MainBottomTabNavigator />
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CreateAccount" component={CreateAccountSreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
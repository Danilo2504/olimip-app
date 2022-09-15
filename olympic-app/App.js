import React from 'react';
import Home from "./components/Home";
import Login from './components/Login';
import SignUp from "./components/SignUp";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Log In" component={Login} />
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Sign Up" component={SignUp}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
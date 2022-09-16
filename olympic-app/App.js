import React from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false }}>
        
          <Stack.Screen  name="Inicio" component={Home}/>
          <Stack.Screen  name="Iniciar Sesion" component={Login}/>
          <Stack.Screen  name="Registrarse" component={Register}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
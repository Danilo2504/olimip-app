import React from 'react';
import Home from "./components/Home";
import Login from './components/Login';
import Register from './components/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'localstorage-polyfill'; 

// import BluetoothDevices from "react-native-bluetooth-devices";

const Stack = createNativeStackNavigator();

export default function App() {
  
  // function loop() { 
  //   BluetoothDevices.startScan()
  //   //BluetoothDevices.addEventListener("onConnectedDevices", (res: {devices: Array<DeviceType>}) => {
  //   BluetoothDevices.addEventListener("onConnectedDevices", (res) => {
  //     console.log(res.devices)
  //   })
  //   setTimeout(loop, 1000)
  //  }
  // loop()
  
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen  name="Inicio" component={Home}/>
          <Stack.Screen  name= "Login" component={Login} />
          <Stack.Screen  name= "Register" component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
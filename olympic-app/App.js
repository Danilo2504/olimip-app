import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Home from "./components/Home";
// import Login from './components/Login';
import './index.css'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <NavigationContainer>
      <ScrollView>
        <View>
          <Searchbar
            placeholder="Buscar"
          />
          {/* <Login/> */}
          <Home/>
        </View>
      </ScrollView>
    </NavigationContainer>
    
  );
}
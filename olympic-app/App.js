import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Home from "./components/Home";
import "./index.css";
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <NavigationContainer>
      <ScrollView>
        <View>
          <Searchbar
            placeholder="Buscar"
          />
          <Login/>
          <Home/>
        </View>
      </ScrollView>
    </NavigationContainer>
    
  );
}
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Home from "./components/Home";
import Login from './components/Login';
import {tasks} from "./services/seed";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <NavigationContainer>
      <ScrollView>
        <View style={styles.HomeContainer}>
          <Searchbar
            placeholder="Buscar"
          />
          <Login/>
          {tasks.map((task)=><Home key={task.id} data={task}/>)}
        </View>
      </ScrollView>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },

});
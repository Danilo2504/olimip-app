import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import LittleMuseum from "./littleMuseum";
import { useState, useEffect } from "react";
import { showData } from "../services/jsonAPI";

export default function Home({navigation}) {
  const [example, setExample] = useState([]);

  if(!localStorage.getItem('token-lugar-cultural')) navigation.navigate('Iniciar Sesion')

  useEffect(() => {
    showData().then((item) => setExample(item));
  }, []);

  return (
    <ScrollView>
      <View>
        <Image/>
        <Text>Salir</Text>
        <Text>Ayuda</Text>
      </View>
      <View style={styles.searchaBarCtn}>
        <Searchbar style={styles.searchBar} placeholder="Buscar" />
      </View>
      <View style={styles.contentContainer}>
        {example.map((item, index) => (
          <LittleMuseum key={index} data={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    paddingVertical: 25,
    paddingHorizontal: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },

  searchaBarCtn: {
    paddingTop: 15,
    paddingHorizontal: 0,
    width: "100%",
    alignItems: "center",
  },

  searchBar: {
    width: "90%",
  },
});

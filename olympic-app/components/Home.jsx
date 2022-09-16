import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import LittleMuseum from "./littleMuseum";
import { useState, useEffect } from "react";
import { showData } from "../services/jsonAPI";
import { Link } from "@react-navigation/native";

export default function Home() {
  const [example, setExample] = useState([]);

  useEffect(() => {
    showData().then((item) => setExample(item.slice(0, 10)));
  }, []);

  return (
    <ScrollView>
      <Link style={{ fontSize: 20 }} to={{ screen: "Iniciar Sesion" }}>
        Iniciar Sesion
      </Link>
      <Link style={{ fontSize: 20 }} to={{ screen: "Registrarse" }}>
        Registrarse
      </Link>
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

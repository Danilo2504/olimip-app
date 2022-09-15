import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import LittleMuseum from "./littleMuseum";
import { useState, useEffect } from "react";
import { showData } from "../services/jsonAPI";

export default function Home() {
  const [example, setExample] = useState([]);

  useEffect(() => {
    showData().then((item) => setExample(item.slice(0, 10)));
  }, []);

  return (
    <ScrollView>
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
    paddingVertical: 50,
    paddingHorizontal: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },

  searchaBarCtn: {
    paddingTop: 50,
    paddingHorizontal: 0,
    width: "100%",
    alignItems: "center",
  },

  searchBar: {
    width: "90%",
  },
});

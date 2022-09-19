import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { useState, useEffect } from "react";
import { getLocations } from "../services/apiServices";
import CardsComponent from "./CardsComponent";
import ImgPaths from "../consts/ImgPaths";
import "localstorage-polyfill";

export default function Home({ navigation }) {
  const [apiData, setApiData] = useState([]);
  const [menuNav, setMenuNav] = useState(false);

  // if (!localStorage.getItem("token-lugar-cultural"))
  //   navigation.navigate("Iniciar Sesion");

  const cerrarSesion = () => {
    localStorage.removeItem("token-lugar-cultural");
  };

  useEffect(() => {
    getLocations().then((item) => setApiData(item));
  }, []);

  return (
    <ScrollView>
      <StatusBar />
      <View style={styles.navBarCtn}>
        <View style={styles.searchBarCtn}>
          <Searchbar style={styles.searchBar} placeholder="Buscar" />
        </View>
        <TouchableOpacity
          onPress={() => cerrarSesion()}
          style={styles.dropDownStyle}
          activeOpacity={0.8}
        >
          <Text>Salir</Text>
          <Image source={ImgPaths.iconDropDown} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {apiData.map((item, index) => (
          <CardsComponent key={index} data={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  navBarCtn: {
    display: "flex",
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },

  dropDownStyle: {
    paddingHorizontal: 5,
    backgroundColor: "white",
    minHeight: 10,
    borderRadius: 2,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },

  searchBarCtn: {
    width: "75%",
  },

  searchBar: {
    width: "100%",
    borderRadius: 2,
    backgroundColor: "rgb(245,245,245)",
  },

  contentContainer: {
    width: "100%",
    paddingVertical: 25,
    paddingHorizontal: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
});

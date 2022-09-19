import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Formsubmit = ({ buttonText, helpText, screen, onPress }) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.btnText}>{buttonText}</Text>
      </TouchableOpacity>
      <Link style={styles.link} to={{ screen: screen }}>
        {helpText}
      </Link>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 2.5,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(100, 123, 35)",
    paddingVertical: 7.5,
    paddingHorizontal: 10,
  },

  btnText: {
    fontSize: 25,
    color: "#fff",
  },

  link: {
    fontSize: 25,
    textAlign: "center",
    padding: 10,
  },
});

export default Formsubmit;

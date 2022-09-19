import React from "react";
import { View, StyleSheet } from "react-native";

const FormContainer = ({ children }) => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.formContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(224,220,220)",
  },

  formContainer: {
    width: "90%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
  },
});

export default FormContainer;

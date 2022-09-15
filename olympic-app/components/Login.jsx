import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function Login({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <View style={styles.contentContainer}>
      <View style={styles.singInCtn}>
        <Text style={styles.title}>Iniciar Sesion</Text>
        <View style={styles.inputCtn}>
          <TextInput
            style={styles.input}
            onChangeText={(event) => {
              setData({ email: event });
            }}
            placeholder="Ingrese Usuario"
          />
          <TextInput
            style={styles.input}
            onChangeText={(event) => {
              setData({ password: event });
            }}
            secureTextEntry={true}
            placeholder="Ingrese Contraseña"
          />
        </View>
        <View style={styles.buttonCtn}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text>Aceptar</Text>
          </TouchableOpacity>
        </View>
        <Link style={styles.link} to={{ screen: "Sign Up" }}>
          ¿No tienes una cuenta?
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },

  singInCtn: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-around",
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 10,
  },

  inputCtn: {
    display: "flex",
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },

  buttonCtn: {
    display: "flex",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 6,
  },

  button: {
    alignContent: "center",
    alignItems: "center",
  },

  link: {
    fontSize: 13,
  },
});

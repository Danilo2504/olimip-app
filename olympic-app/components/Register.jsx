import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";

export default function SignUp({ navigation }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registrar = (e) => {
    e.preventDefault();
    fetch("http://10.120.0.48:3006/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    Alert.alert("Pro favor confirme su cuenta");
  };

  return (
    <View style={styles.contentContainer}>
      <View style={styles.singInCtn}>
        <Text style={styles.title}>Crear una Cuenta</Text>
        <View style={styles.inputCtn}>
          <TextInput
            style={styles.input}
            onChangeText={(event) => {
              setForm({ name: event });
            }}
            placeholder="Nombre"
          />
          <TextInput
            name="email"
            style={styles.input}
            onChangeText={(event) => {
              setForm({ email: event });
            }}
            placeholder="Email"
          />
          <TextInput
            name="password"
            style={styles.input}
            onChangeText={(event) => {
              setForm({ password: event });
            }}
            secureTextEntry={true}
            placeholder="Contraseña"
          />
        </View>
        <View style={styles.buttonCtn}>
          <TouchableOpacity style={styles.button} onPress={(e) => registrar(e)}>
            <Text>Aceptar</Text>
          </TouchableOpacity>
        </View>
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

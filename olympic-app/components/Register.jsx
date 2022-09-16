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

export default function Register({navigation}) {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const register = async (e) => {
    e.preventDefault();
    console.log(form);
    await fetch("http://localhost:3006/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  return (
    <View style={styles.contentContainer}>
      <View style={styles.singInCtn}>
        <Text style={styles.title}>Register</Text>
          <TextInput
            style={styles.input}
            name="username"
            onChangeText={(event) => {
              setForm({ username: event });
            }}
            placeholder="Ingresar Nombre"
            placeholderTextColor="rgba(0, 0, 0, .25)"
          />
           <TextInput
            style={styles.input}
            name="email"
            onChangeText={(event) => {
              setForm({ email: event });
            }}
            placeholder="Ingresar Email"
            placeholderTextColor="rgba(0, 0, 0, .25)"
          />
          <TextInput
            style={styles.input}
            onChangeText={(event) => {
              setForm({ password: event });
            }}
            secureTextEntry={true}
            placeholder="Ingresar Contraseña"
            placeholderTextColor="rgba(0, 0, 0, .25)"
          />
        <TouchableOpacity
          style={styles.button}
          onPress={e => register(e)}
          >
          <Text style={styles.btnText}>Registrarse</Text>
          </TouchableOpacity>
        <Link style={styles.link} to={{ screen: "Iniciar Sesion" }}>
          ¿Tienes una cuenta?
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  singInCtn: {
    display: "flex",
    width: "90%",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 25,
    gap: 12.5
  },

  title: {
    fontSize: 25,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    borderRadius: 2.5,
    fontSize: 25,
    paddingVertical: 5,
    paddingHorizontal: 10
  },

  button: {
    borderRadius: 2.5,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(100, 123, 35)",
    paddingVertical: 7.5,
    paddingHorizontal: 10
  },

  btnText: {
    fontSize: 25,
    color: "#fff"
  },

  link: {
    fontSize: 25,
  },
});

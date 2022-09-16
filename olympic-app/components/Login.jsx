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

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const login = async (e) => {
    try {
      e.preventDefault();
      console.log(JSON.stringify(form));
      const res = await fetch("http://localhost:3006/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        let err = new Error("Error en la petición Fetch");
        err.status = res.status || "-erororororororo-";
        err.statusText = res.statusText || "Ocurrió un error";

        throw err;
      }
      const data = await res.json();
      localStorage.setItem("token-lugar-cultural", data.token);
      window.location.replace("/");
    } catch (err) {
      alert(err);
    }
  };

  const handleInputUser = (username) => {
    setForm({ ...form, username });
  };
  const handleInputPass = (password) => {
    setForm({ ...form, password });
  };

  return (
    <View style={styles.contentContainer}>
      <View style={styles.singInCtn}>
        <Text style={styles.title}>Iniciar Sesion</Text>
        <TextInput
          style={styles.input}
          name="username"
          autoFocus={true}
          value={form.username}
          onChangeText={(userName) => handleInputName(userName)}
          placeholder="Ingresar Nombre"
          placeholderTextColor="rgba(0, 0, 0, .25)"
          required={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={(email) => handleInputEmail(email)}
          secureTextEntry={true}
          placeholder="Ingresar Contraseña"
          placeholderTextColor="rgba(0, 0, 0, .25)"
          required={true}
        />
        <TouchableOpacity style={styles.button} onPress={(e) => login(e)}>
          <Text style={styles.btnText}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <Link style={styles.link} to={{ screen: "Registrarse" }}>
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  singInCtn: {
    display: "flex",
    width: "90%",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 25,
    gap: 12.5,
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
    paddingHorizontal: 10,
  },

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
  },
});

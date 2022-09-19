import React from "react";
import { Text, StyleSheet } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";
import { useState } from "react";
import "localstorage-polyfill";

const Login = ({ navigation }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;

  if (localStorage.getItem("token-lugar-cultural"))
    navigation.navigate("Inicio");

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

  const handleOnChangeText = (value, fieldName) => {
    setForm({ ...form, [fieldName]: value });
  };

  return (
    <FormContainer>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <FormInput
        placeholder="Ingrese su nombre"
        name="username"
        label="Nombre o email"
        autoFocus={true}
        secureTextEntry={false}
        autoCapitalize="none"
        keyboardType="email-address"
        value={username}
        onChangeText={(value) => handleOnChangeText(value, "username")}
      />
      <FormInput
        placeholder="Ingrese su contraseña"
        name="password"
        label="Contraseña"
        autoFocus={false}
        secureTextEntry={true}
        autoCapitalize="none"
        keyboardType="default"
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
      />
      <FormSubmit
        buttonText="Iniciar Sesión"
        helpText="¿No tienes una cuenta?"
        screen="RegisterForm"
        onPress={(e) => login(e)}
      />
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 12.5,
  },
});

export default Login;

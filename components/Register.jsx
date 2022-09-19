import React from "react";
import { Text, StyleSheet } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import Formsubmit from "./FormSubmit";
import FormModal from "./FormModal";
import { useState } from "react";
import "localstorage-polyfill";

const Register = () => {
  const [modalState, setModalState] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = form;

  const handleOnChangeText = (value, fieldName) => {
    setForm({ ...form, [fieldName]: value });
  };

  if (localStorage.getItem("token-lugar-cultural"))
    navigation.navigate("Inicio");

  const register = async (e) => {
    try {
      if (!Object.entries(form).some(([key, value]) => value.trim() == "")) {
        e.preventDefault();
        console.log(JSON.stringify(form));
        await fetch("http://localhost:3006/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        setModalState(!modalState);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <FormContainer>
      <FormModal state={modalState} />
      <Text style={styles.title}>Registrarse</Text>
      <FormInput
        placeholder="Ingrese su nombre"
        name="username"
        label="Nombre"
        autoFocus={true}
        secureTextEntry={false}
        autoCapitalize="senteces"
        keyboardType="default"
        value={username}
        onChangeText={(value) => handleOnChangeText(value, "username")}
      />
      <FormInput
        placeholder="Ingrese su email"
        name="email"
        label="Direccion de email"
        autoFocus={false}
        secureTextEntry={false}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(value) => handleOnChangeText(value, "email")}
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
      <Formsubmit
        buttonText="Registrarse"
        helpText="¿Tienes una cuenta?"
        screen="LoginForm"
        onPress={(e) => register(e)}
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

export default Register;

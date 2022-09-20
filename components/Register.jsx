import React from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import Formsubmit from "./FormSubmit";
import { useState } from "react";

const Register = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
        setModalVisible(!modalVisible);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <FormContainer>
      <View style={modalVisible ? {} : { display: "none" }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Confirma tu email !!</Text>
              <View style={styles.buttonCtn}>
                <Pressable
                  style={[styles.buttonModal, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Aceptar</Text>
                </Pressable>
                <Pressable
                  style={[styles.buttonModal, styles.buttonClose]}
                  onPress={() => navigation.navigate("Iniciar Sesion")}
                >
                  <Text style={styles.textStyle}>Iniciar sesion</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

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
        screen="Iniciar Sesion"
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
  // modal styles
  centeredView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(75, 75, 75, 0.806)",
  },

  modalView: {
    margin: 20,
    width: "90%",
    height: "25%",
    backgroundColor: "white",
    justifyContent: "center",
    boxShadow: "rgb(0 0 0 / 24%) 0px 3px 4px",
    borderRadius: 2.5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonCtn: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },

  buttonModal: {
    borderRadius: 2.5,
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 7.5,
    paddingHorizontal: 10,
    elevation: 2,
    margin: 12.5,
  },

  buttonClose: {
    backgroundColor: "rgb(100, 123, 35)",
  },

  textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 25,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
  },
});

export default Register;

import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert
} from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function Register({ navigation }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [modalVisible, setModalVisible] = useState(false);

  if(localStorage.getItem('token-lugar-cultural')) console.log('anda a inicio');

  const register = async (e) => {
    try {
      e.preventDefault();
      console.log(form);
      await fetch("http://localhost:3006/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setModalVisible(!modalVisible)
    } catch (err) {
      alert(err);
    }
  };
  const handleInputName = (username) => {
    setForm({ ...form, username });
  };
  const handleInputEmail = (email) => {
    setForm({ ...form, email });
  };
  const handleInputPass = (password) => {
    setForm({ ...form, password });
  };
  console.log(form)
  return (
    <View style={styles.contentContainer}>
      
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
      

      <View style={styles.singInCtn}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          name="username"
          autoFocus={true}
          value={form.username}
          onChangeText={(userName) => handleInputName(userName)}
          placeholder="Ingresar Nombre"
          placeholderTextColor="rgba(0, 0, 0, .25)"
        />
        <TextInput
          style={styles.input}
          autoFocus={true}
          name="email"
          value={form.email}
          onChangeText={(email) => handleInputEmail(email)}
          placeholder="Ingresar Email"
          placeholderTextColor="rgba(0, 0, 0, .25)"
        />
        <TextInput
          style={styles.input}
          autoComplete="on"
          name="password"
          value={form.password}
          onChangeText={(password) => handleInputPass(password)}
          secureTextEntry={true}
          placeholder="Ingresar Contraseña"
          placeholderTextColor="rgba(0, 0, 0, .25)"
        />
        <TouchableOpacity style={styles.button} onPress={(e) => register(e)}>
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
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

  if (localStorage.getItem('token-lugar-cultural')) navigation.navigate('Inicio')

  const register = async (e) => {
    try {
      if(!Object.entries(form).some(([key, value]) => (value).trim() == '' )){
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
      }

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

  return (
    <View style={styles.contentContainer}>
      <View style={styles.centeredView + modalVisible ? {display: "block", alignItems:"center"} : {display: "none"}}>
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
              onPress={()=>navigation.navigate("Iniciar Sesion")}
            >
              <Text style={styles.textStyle}>Iniciar sesion</Text>
            </Pressable>
            </View>
           
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
          required={true}
        />
        <TextInput
          style={styles.input}
          autoFocus={true}
          name="email"
          value={form.email}
          onChangeText={(email) => handleInputEmail(email)}
          placeholder="Ingresar Email"
          placeholderTextColor="rgba(0, 0, 0, .25)"
          required={true}
          type="email"
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
          required={true}
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
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.806)",
    boxShadow: "rgb(0 0 0 / 24%) 0px 3px 4px",
    borderRadius: 2.5,
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

  buttonCtn: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 15,
  },

  buttonModal: {
    borderRadius: 2,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "rgb(100, 123, 35)",
  },

  textStyle: {
    color: "white", 
    textAlign: "center",
    fontSize: 20
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25
  }
});

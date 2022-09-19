import React from "react";
import { Text, View, StyleSheet, Modal, Pressable } from "react-native";
import { useState } from "react";

const FormModal = ({ state }) => {
  const [modalVisible, setModalVisible] = useState(state);
  return (
    <View style={modalVisible == false ? { display: "none" } : {}}>
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
  );
};

const styles = StyleSheet.create({
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
    height: "35%",
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

export default FormModal;

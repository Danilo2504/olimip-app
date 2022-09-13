import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from "react";

export default function Login(){
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState([]);
    return (
        <View>
            <Text>Iniciar sesion</Text>
            <TextInput
                style={styles.input}
                onChange={onChangeText}
                value={text}
                placeholder="Ingrese Usuario"
            />
            <TextInput
                style={styles.input}
                onChange={onChangeText}
                value={text}
                placeholder="Ingrese Contraseña"
            />
            <TouchableOpacity style={styles.button}>
                Aceptar
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    button: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
    },
});
import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from "react";

export default function Login(){
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState([]);
    return (
        <View style="content-container">
            <View style='sign-container'>
                <View>
                    <Text style='section-title'>Ingresa Tus Datos</Text>
                    <form action='/users/signin' method='POST'>
                        <View style='form-group-container'>
                            <TextInput
                                autofocus='true'
                                style='form-input form-input-username'
                                type='text'
                                name='username'
                                placeholder='Username'
                                required='true'
                            />
                        </View>
                        <View style='form-group-container'>
                            <TextInput
                                style='form-input'
                                type='password'
                                name='password'
                                placeholder='Contraseña'
                                required='true'
                            />
                        </View>
                        <View style='form-group-container'>
                            <TextInput
                                style='form-input form-input-submit'
                                type='submit'
                                value='Ingresar'
                            />
                        </View>
                    </form>
                    <Text>¿No tienes una cuenta?
                        <Link style='mute' href='/users/signup'>Registrate</Link>
                    </Text>
                </View>
                <View style='sign-hero sign-in-img' alt='lasuizabiblioteca sign'></View>
            </View>
        </View>
    );



        // <View>
        //     <Text>Iniciar sesion</Text>
        //     <TextInput
        //         style={styles.input}
        //         onChange={onChangeText}
        //         value={text}
        //         placeholder="Ingrese Usuario"
        //     />
        //     <TextInput
        //         style={styles.input}
        //         onChange={onChangeText}
        //         value={text}
        //         placeholder="Ingrese Contraseña"
        //     />
        //     <TouchableOpacity style={styles.button}>
        //         <Text>Aceptar</Text>
        //     </TouchableOpacity>
        // </View>
    //);
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
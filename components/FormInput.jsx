import React from "react";
import { Text, StyleSheet, TextInput } from "react-native";

const FormInput = ({
  placeholder,
  label,
  name,
  secureTextEntry,
  autoFocus,
  value,
  onChangeText,
  autoCapitalize,
  keyboardType,
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor="rgba(0, 0, 0, .25)"
        placeholder={placeholder}
        name={name}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        required={true}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    borderRadius: 2.5,
    fontSize: 23.5,
    height: 40,
    paddingLeft: 10,
    marginBottom: 20,
  },

  label: {
    fontSize: 18.5,
    fontWeight: "bold",
  },
});

export default FormInput;

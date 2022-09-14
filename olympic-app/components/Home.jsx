import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LittleMuseum from './LittleMuseum';

export default function Home({}){
    return(
        <View style={styles.contentContainer}>
            <LittleMuseum/>
            <LittleMuseum/>
            <LittleMuseum/>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        width: "var(--page-width)",
        marginVertical: "auto",
        paddingVertical: "50px",
        flexGrow: 1,
    },
});

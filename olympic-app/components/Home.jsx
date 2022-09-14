import React from 'react';
import { StyleSheet, View } from 'react-native';
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
        width: "100%",
        paddingVertical: 50,
        paddingHorizontal: 0,
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        // '@media screen and (max-width:350px)'{
        //         backgroundColor:"red";
        // }
    },
});

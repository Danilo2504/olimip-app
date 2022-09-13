import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default function Home({data}){
const {name} = data;
    return(
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/image.png")} style={styles.imageStyle}/>
            </View>
            <View style={styles.tittleContainer}>
                <Text style={styles.titleStyle}>{name}</Text>
            </View>
        </View>
    );
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      flexWrap: 'wrap',
      width: deviceWidth - 25,
      backgroundColor: "#0f0f0",
      height: 100,
      borderRadius: 5,
      shadowColor: "black",
      shadowOffset: {width: 5, height: 5},
      shadowOpacity: 0.75,
      shadowRadius: 5,
      elevation: 2,
      marginVertical: 20,
    },

    imageContainer:{
        flex: 1,
        backgroundColor: "red",
        height: 40,
        width:  60,
    },

    imageStyle: {
        height: 40,
        width: 50,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    tittleContainer:{
        flex: 1,
        backgroundColor: "blue",
        width: 100,
    },

    titleStyle:{
        fontSize: 20,
        fontWeight: "800",

    },
});

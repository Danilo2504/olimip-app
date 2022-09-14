import { StyleSheet, Text, View, Image } from 'react-native';

export default function LittleMuseum(){
    return (
        <View style={styles.littleMuseumCtn}>
            <View style={styles.thumbnail}>
                <Image src={require('../assets/image.png')}/>
            </View>
            <View style={styles.titleViewMoreCtn}>
                <View style={styles.titleAndDescriptionCtn}>
                    <Text style={styles.titulo}>Museo Bellas Artes, Buenos Aires</Text>
                    <View style={styles.descContainer}>
                        <Text style={styles.desc}>
                            Lorem iTextsum dolor sit amet consectetur adiTextisicing elit. Reiciendis deserunt, quod doloribus beatae.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    littleMuseumCtn:{
        borderRadius: 2,
        backgroundColor:"rgba(238, 238, 238, 0.806)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: "#eee",
        borderWidth: 1,
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        width: "90%",
        maxHeight: 125,
        marginBottom: 20,
        // overflow: "hidden"
    },

    thumbnail:{
        height: 100,
        backgroundColor: "coral",
        borderRadius: 2,
        aspectRatio: "1/1"
    },

    titleViewMoreCtn:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
    },

    titulo:{
        fontWeight: '600',
    },

    descContainer:{
        width: "100%",
        backgroundColor: "red"
    },

    desc:{
        width: "100%",
        textOverflow: "ellipsis",
        wordWrap: "break-word"
    },  

});
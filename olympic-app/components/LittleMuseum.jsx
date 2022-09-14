import { StyleSheet, Text, View, Image } from 'react-native';

export default function LittleMuseum(){
    return (
        <View style={styles.littleMuseumCtn}>
            <View style={styles.thumbnail}>
                <Image src={require('../assets/image.png')}/>
            </View>
            <View style={styles.titleViewMoreCtn}>
                <View style={styles.titleAndDescriptionCtn}>
                    <View style={styles.titleArrow}>
                        <Text>Museo Bellas Artes, Buenos Aires</Text>
                    </View>
                    <View style={styles.description}>
                        <Text>
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
        borderRadius: 5,
        backgroundColor:"rgba(238, 238, 238, 0.806)",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: "#eee",
        borderWidth: 1,
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        height: 100,
        width: 300,
        marginBottom: 20,
    },

    thumbnail:{
        width: 70,
        height: "100%",
        backgroundColor: "coral",
        borderRadius: 5,
    },

    titleViewMoreCtn:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
        width: "100%",
    },

    titleArrow:{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: "center",
    },

});
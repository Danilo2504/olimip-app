import { StyleSheet, Text, View, Image } from 'react-native';

export default function LittleMuseum(){
    return (
        <View style={styles.littleMuseumCtn}>
            <View style={styles.thumbnail}>
                <Image src={require('../assets/image.png')}/>
            </View>
            <View style={styles.titleViewMoreCtn}>
                <View> 
                    {
                        //style=styles.titleAndDescriTexttionCtn
                    }
                    <View style={styles.titleArrow}>
                        <Text>Museo Bellas Artes, Buenos Aires</Text>
                    </View>
                    <View> 
                        {
                            //style=styles.descriTexttion
                        }
                        <Text>
                            Lorem iTextsum dolor sit amet consectetur adiTextisicing elit. Reiciendis deserunt, quod doloribus beatae cum culTexta imTextedit dolore est quo Textariatur molestiae aTexteriam incidunt, doloremque consequatur sed necessitatibus id commodi. Accusamus.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    littleMuseumCtn:{
        borderRadius: "5px",
        backgroundColor:"rgba(238, 238, 238, 0.806)",
        paddingVertical: "10px",
        borderColor: "#eee",
        borderWidth: "1px",
        display: "flex",
        height: "150px",
        marginBottom :"20px",
    },

    thumbnail:{
        display: "inline-block",
        width: "150px",
        height: "100%",
        // backgroundColor: "coral",
        borderRadius: "5px",
    },

    titleViewMoreCtn:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "10px",
        width: "100%",
    },

    titleArrow:{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        alignItems: "center",
    },
});
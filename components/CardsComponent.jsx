import { StyleSheet, Text, View, Image } from "react-native";

export default function CardsComponent({ data }) {
  const { desc, name } = data;

  return (
    <View style={styles.littleMuseumCtn}>
      <View style={styles.thumbnail}>
        <Image style={styles.image} source={require("../assets/image.png")} />
      </View>
      <View style={styles.titleAndDescContainer}>
        <Text style={styles.titulo}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  littleMuseumCtn: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "90%",
    height: 125,
    borderRadius: 2,
    backgroundColor: "rgba(255, 255, 255, 0.806)",
    padding: 10,
    borderColor: "#eee",
    borderWidth: 1,
    marginBottom: 20,
    boxShadow: "rgb(0 0 0 / 24%) 0px 3px 4px",
    overflow: "hidden",
  },

  thumbnail: {
    height: "100%",
    width: "30%",
    borderRadius: 2,
    backgroundColor: "darkgray",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  titleAndDescContainer: {
    width: "70%",
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  titulo: {
    fontWeight: "800",
    fontSize: 18,
  },

  desc: {
    height: 65,
    fontSize: 15,
    lineHeight: 17.5,
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    overflow: "hidden",
  },
});

import { StyleSheet, Text, View, Image } from "react-native";

export default function LittleMuseum({ data }) {
  const { title, thumbnailUrl } = data;
  return (
    <View style={styles.littleMuseumCtn}>
      <View style={styles.thumbnail}>
        <Image style={styles.image} source={{ uri: thumbnailUrl }} />
      </View>
      <View style={styles.titleAndDescContainer}>
        <Text style={styles.titulo}>{title}</Text>
        <Text style={styles.desc}>
          Lorem iTextsum dolor sit amet consectetur adiTextisicing elit.
          Reiciendis deserunt, quod doloribus beatae.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  littleMuseumCtn: {
    borderRadius: 2,
    backgroundColor: "rgba(255, 255, 255, 0.806)",
    padding: 10,
    borderColor: "#eee",
    borderWidth: 1,
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    width: "90%",
    height: 125,
    marginBottom: 20,
    boxShadow: "rgb(0 0 0 / 24%) 0px 3px 4px",
    overflow: "hidden",
    gap: 10,
  },
  thumbnail: {
    height: "100%",
    borderRadius: 2,
    aspectRatio: "1/1",
    backgroundColor: "darkgray",
  },

  image: {
    height: "100%",
    aspectRatio: "1/1",
  },

  titleAndDescContainer: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    overflow: "hidden",
    gap: 2.5,
    // backgroundColor: "red"
  },

  titulo: {
    fontWeight: "800",
    fontSize: 17.5,
  },

  desc: {
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    fontSize: 15,
    lineHeight: 17.5,
    // backgroundColor: "green",
    height: 15 * 2 + 17.5 * 2,
    overflow: "hidden",
  },
});

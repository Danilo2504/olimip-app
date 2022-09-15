import { StyleSheet, Text, View, Image } from "react-native";

export default function LittleMuseum({ data }) {
  const { title, thumbnailUrl } = data;
  return (
    <View style={styles.littleMuseumCtn}>
      <View style={styles.thumbnail}>
        <Image style={styles.image} source={{ uri: thumbnailUrl }} />
      </View>
      <View style={styles.titleAndDescContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titulo}>{title}</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.desc}>
            Lorem iTextsum dolor sit amet consectetur adiTextisicing elit.
            Reiciendis deserunt, quod doloribus beatae.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  littleMuseumCtn: {
    borderRadius: 2,
    backgroundColor: "rgba(238, 238, 238, 0.806)",
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
  },
  thumbnail: {
    height: 100,
    borderRadius: 2,
    aspectRatio: "1/1",
  },

  image: {
    height: "100%",
    width: "100%",
  },

  titleAndDescContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 10,
  },

  titleContainer: {
    width: "100%",
  },

  titulo: {
    fontWeight: "800",
  },

  descContainer: {
    width: "100%",
  },

  desc: {
    width: "100%",
    textOverflow: "ellipsis",
    wordWrap: "break-word",
  },
});

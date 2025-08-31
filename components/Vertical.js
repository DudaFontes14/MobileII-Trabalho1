import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";

export default function Vertical({ title, image }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.card, { width: width * 0.9 }]}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    backgroundColor: "#d4d0d0ff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

import { View, Text, Image, StyleSheet } from "react-native";

export default function Horizontal({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    marginRight: 10,
    backgroundColor: "#d4d0d0ff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    padding: 8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

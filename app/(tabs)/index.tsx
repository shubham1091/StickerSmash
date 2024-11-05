import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerConainer}>
        <Button
          lable="Choose a photo"
          theme="primary"
        />
        <Button lable="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerConainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

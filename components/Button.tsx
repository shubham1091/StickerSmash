import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  lable: string;
  theme?: "primary" | "secondary";
};

export const Button = ({ lable, theme }: Props) => {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable style={[styles.button, { backgroundColor: "#fff" }]}>
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#25292e"}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{lable}</Text>
        </Pressable>
      </View>
    );
  } else if (theme === "secondary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 2, borderColor: "#8e8e8e", borderRadius: 18 },
        ]}
      >
        <Pressable style={[styles.button, { backgroundColor: "#f0f0f0" }]}>
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#8e8e8e"}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#8e8e8e" }]}>{lable}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => {
          alert(`You clicked ${lable}`);
        }}
      >
        <Text style={styles.buttonLabel}>{lable}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});

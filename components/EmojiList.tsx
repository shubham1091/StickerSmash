import { Image, type ImageSource } from "expo-image";
import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet } from "react-native";

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};

// assets\images\emojis\emoji1.png
export const EmojiList = ({ onSelect, onCloseModal }: Props) => {
  const [emoji] = useState<ImageSource[]>([
    require("@/assets/images/emojis/emoji1.png"),
    require("@/assets/images/emojis/emoji2.png"),
    require("@/assets/images/emojis/emoji3.png"),
    require("@/assets/images/emojis/emoji4.png"),
    require("@/assets/images/emojis/emoji5.png"),
    require("@/assets/images/emojis/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image
            source={item}
            key={index}
            style={styles.image}
          />
        </Pressable>
      )}
    />
  );
};

export default EmojiList;

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

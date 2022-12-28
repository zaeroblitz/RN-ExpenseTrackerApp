import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    padding: 8,
    backgroundColor: "#333",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: "#B2B2B2",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "#D6E4E5",
    borderRadius: 12,
  },
});

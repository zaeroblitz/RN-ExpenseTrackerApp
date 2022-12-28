import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, style, textInputConfig }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 10,
  },
  label: {
    color: "#F1F1F1",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    color: "#222222",
    padding: 8,
    borderRadius: 12,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

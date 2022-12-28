import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { formattedDate } from "../../../utils/date";

const ExpensesListItem = ({ item, index }) => {
  const navigation = useNavigation();

  const handlePressAction = () => {
    navigation.navigate("ManageExpenses", {
      expenseId: item.id,
    });
  };

  return (
    <Pressable style={styles.container} onPress={handlePressAction}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index + 1}</Text>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.contentContainer}>
          <Text style={styles.date}>{formattedDate(item.date)}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
        </View>

        <View>
          <FontAwesome name="pencil-square-o" size={24} color="#9CA1A9" />
        </View>
      </View>
    </Pressable>
  );
};

export default ExpensesListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  indexContainer: {
    backgroundColor: "#F7F4F7",
    width: 56,
    height: 56,
    padding: 8,
    borderRadius: 18,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  index: {
    color: "#9CA1A9",
    fontWeight: "bold",
    fontSize: 18,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  date: {
    color: "#9CA1A9",
    fontWeight: "300",
    fontSize: 14,
  },
  description: {
    color: "#120216",
    fontWeight: "300",
    fontSize: 16,
  },
  amount: {
    color: "#EF8767",
    fontWeight: "500",
    fontSize: 16,
  },
});

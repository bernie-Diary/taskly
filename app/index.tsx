import {
  StyleSheet,
  View,
} from "react-native";
import ShoppingListItem from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function App() {
 
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee"/>
      <ShoppingListItem name="Tea" isCompleted/>
      <ShoppingListItem name="Orange juice"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  }
});

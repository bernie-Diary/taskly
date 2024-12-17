import {
  StyleSheet,
  View,
} from "react-native";
import ShoppingListItem from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function App() {
 
  return (
    <View style={styles.container}>
      <Link href="/counter" style={{textAlign:"center", marginBottom: 18, fontSize: 24}}>
          Go to Counter
      </Link>
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
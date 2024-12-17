import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";

export default function CounterScreen() {
    const route = useRouter();
  return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => route.navigate("/idea")}>
            <Text style={{textAlign:"center", marginBottom: 18, fontSize: 24}}>Go to idea page</Text>
        </TouchableOpacity>
      <Text style={styles.text}>Counter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
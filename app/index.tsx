import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1  justify-center items-center">
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/(tabs)/search">Search</Link>
    </View>
  );
}

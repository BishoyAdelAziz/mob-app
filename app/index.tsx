import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href={"/onboadring"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        on boadring
      </Link>
      <Link
        href={"/(Auth)/sign-in/signin"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        sign in
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}

import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNFSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNFSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-background">
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
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "chatgpt" } }}
      >
        ChatGPT Plus Subscription
      </Link>
    </SafeAreaView>
  );
}

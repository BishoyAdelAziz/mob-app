import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNFSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNFSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-4  bg-background">
      <Text className="text-7xl font-montserrat-semi-bold tracking-tighter ">
        Home
      </Text>

      <Link
        href={"/onboadring"}
        className="mt-4 font-montserrat-bold-italic rounded bg-primary text-white p-4"
      >
        on boadring
      </Link>
      <Link
        href={"/(Auth)/sign-in/signin"}
        className="mt-4 font-montserrat-bold-italic rounded bg-primary text-white p-4"
      >
        sign in
      </Link>
    </SafeAreaView>
  );
}

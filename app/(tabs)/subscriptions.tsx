import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNFSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNFSafeAreaView);
export default function subscriptions() {
  return (
    <SafeAreaView className="flex-1  bg-background">
      <Text>subscriptions</Text>
    </SafeAreaView>
  );
}

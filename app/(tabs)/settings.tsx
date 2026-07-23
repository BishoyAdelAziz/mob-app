import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNFSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNFSafeAreaView);
export default function settings() {
  return (
    <SafeAreaView className="flex-1  bg-background">
      <Text>settings</Text>
    </SafeAreaView>
  );
}

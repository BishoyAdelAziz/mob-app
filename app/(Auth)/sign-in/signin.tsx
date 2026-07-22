import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function signin() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>signin</Text>
      <Link href={"/(Auth)/sign-up/signup"}>Create an account</Link>
    </View>
  );
}

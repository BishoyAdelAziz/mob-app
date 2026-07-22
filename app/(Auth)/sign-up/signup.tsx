import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Signup() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>signUP</Text>
      <Link href={"/(Auth)/sign-in/signin"}>Login</Link>
    </View>
  );
}

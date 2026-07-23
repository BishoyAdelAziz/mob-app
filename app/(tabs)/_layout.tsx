import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import clsx from "clsx";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const tabIcon = (focused: boolean, icon: ImageSourcePropType) => (
    <View className="tabs-icon">
      <View className={clsx("tabs-pill", focused && "tabs-active")}>
        <Image source={icon} className="tabs-glyph" />
      </View>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, components.tabBar.horizontalInset),
          height: components.tabBar.height,
          marginHorizontal: components.tabBar.horizontalInset,
          borderRadius: components.tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical:
            components.tabBar.height / 2 - components.tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: components.tabBar.iconFrame,
          height: components.tabBar.iconFrame,
          alignSelf: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => tabIcon(focused, tab.icon),
          }}
        />
      ))}
    </Tabs>
  );
}

import { Text, TouchableOpacity, View } from "react-native";
interface ListHeadingProps {
  title: string;
}
export default function ListHeading({ title }: ListHeadingProps) {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>
      <TouchableOpacity className="list-action">
        <Text className="list-action-text font-montserrat-extra-bold">
          View All
        </Text>
      </TouchableOpacity>
    </View>
  );
}

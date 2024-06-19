import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen;
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, TouchableOpacity, View } from "react-native";
import tw from 'tailwind-react-native-classnames';

export const TabIcon = ({
  icon,
  color,
  focused,
}: {
  icon: IconProp;
  color: string;
  focused: boolean;
}) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      size={30}
      color={color}
      style={tw`${focused ? 'mb-5' : ''}`}
    />
  );
};

export const LimitedTimeBar = () => {
  return (
    <View style={tw`flex flex-col h-48 px-3 pt-14`}>
      <View style={tw`flex flex-row justify-between items-center`}>
        <Image style={{ width: 150, height: 50 }}
          source={require('@/assets/images/instagram_logo.png')} />
        <View style={tw`flex-row`}>
          <TouchableOpacity style={tw`px-3`}>
            <FontAwesomeIcon icon={faHeart} size={26} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`px-3`}>
            <FontAwesomeIcon icon={faCommentDots} size={26} />
          </TouchableOpacity>
        </View>
      </View>
      <View>

      </View>
    </View>
  )
}

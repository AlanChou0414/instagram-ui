import { DATE } from '@/assets/data/post';
import IconBookmark from '@/assets/images/icon-bookmark.svg';
import IconLike from '@/assets/images/icon-favorite.svg';
import IconMsg from '@/assets/images/icon-msg.svg';
import IconSend from '@/assets/images/icon-share.svg';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useRef, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import {
  GestureHandlerRootView,
  GestureHandlerStateChangeEvent,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';

export const Post = ({ info }: { info: PostInfo }) => {
  const doubleTapRef = useRef();
  const [likePost, setLikePost] = useState(false);

  const handleDoubleTap = ({ nativeEvent }: GestureHandlerStateChangeEvent) => {
    if (nativeEvent.state === State.ACTIVE) {
      setLikePost(true);
    }
  };

  return (
    <View style={tw`flex flex-col pb-10`}>
      <View style={tw`flex flex-row justify-between items-center px-3 pb-2`}>
        <View style={tw`flex flex-row items-center`}>
          <Image
            source={require('@/assets/images/avatars-default.png')}
            style={{ width: 30, height: 30 }}
          />
          <Text style={tw`px-2`}>{info.Account}</Text>
        </View>
        <TouchableOpacity style={tw`px-1`}>
          <FontAwesomeIcon icon={faEllipsis} size={20} />
        </TouchableOpacity>
      </View>
      <GestureHandlerRootView style={tw`flex-1`}>
        <TapGestureHandler
          ref={doubleTapRef}
          numberOfTaps={2}
          onHandlerStateChange={handleDoubleTap}
        >
          <Image source={{ uri: info.Photo }} height={400} />
        </TapGestureHandler>
      </GestureHandlerRootView>
      <View style={tw`flex flex-row justify-between px-2 pt-3`}>
        <View style={tw`flex flex-row`}>
          <TouchableOpacity
            style={tw`px-2`}
            onPress={() => setLikePost(!likePost)}
          >
            {likePost ? (
              <FontAwesomeIcon icon={faHeart} color="#dd4f4f" size={24} />
            ) : (
              <IconLike width={24} height={24} fill={'red'} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={tw`px-2`}>
            <IconMsg width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`px-2`}>
            <IconSend width={24} height={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={tw`px-2`}>
          <IconBookmark width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const LimitedTimeBar = () => {
  return (
    <View style={tw`flex flex-col px-3`}>
      <View style={tw`flex flex-row justify-between items-center`}>
        <Image
          style={{ width: 150, height: 50 }}
          source={require('@/assets/images/instagram_logo.png')}
        />
        <View style={tw`flex-row`}>
          <TouchableOpacity style={tw`px-2`}>
            <IconLike width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`px-2`}>
            <IconMsg width={26} height={26} />
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export const PostList = () => {
  return (
    <FlatList
      data={DATE}
      renderItem={({ item }) => <Post info={item} />}
      keyExtractor={(item) => item.Id}
    />
  );
};

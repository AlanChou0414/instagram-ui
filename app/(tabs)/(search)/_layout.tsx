import { generateRandomPost } from '@/app/utils/common';
import IconSearchDefault from '@/assets/images/icon-search-default.svg';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  NativeSyntheticEvent,
  RefreshControl,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';

export const SearchBar = ({
  setHiddenPost,
}: {
  setHiddenPost: Dispatch<SetStateAction<boolean>>;
}) => {
  const [focusInput, setFocusInput] = useState(false);

  const onSearch = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    const { text } = event.nativeEvent;
    // console.log(text);
    onCancel();
  };

  const onFocusInput = () => {
    setFocusInput(true);
    setHiddenPost(true);
  };

  const onCancel = () => {
    setHiddenPost(false);
    setFocusInput(false);
    Keyboard.dismiss();
  };

  return (
    <View style={tw`flex flex-row items-center mx-4 mb-2`}>
      <View
        style={tw`relative bg-gray-200 rounded-lg py-3 ${focusInput ? 'w-4/5' : 'w-full'}`}
      >
        <IconSearchDefault
          style={tw`absolute top-4 left-3`}
          width={20}
          height={20}
          color="#e3e3e3"
        />
        <TextInput
          style={tw`pl-10 text-xl`}
          placeholder="Search"
          inputMode="search"
          onFocus={onFocusInput}
          returnKeyType="search"
          onSubmitEditing={onSearch}
          clearButtonMode="while-editing"
        />
      </View>
      {focusInput && (
        <TouchableOpacity style={tw`px-3`} onPress={onCancel}>
          <Text style={tw`text-lg`}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const SearchPost = ({ hiddenPost }: { hiddenPost: boolean }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <>
      {!hiddenPost && (
        <FlatList
          style={tw`mb-14`}
          data={generateRandomPost(30)}
          renderItem={({ item }) => (
            <TouchableOpacity style={tw`w-1/3 p-0.5`}>
              <Image
                source={{ uri: 'https://fakeimg.pl/120x120/E3E3E3' }}
                style={{ width: '100%', height: 120 }}
              />
            </TouchableOpacity>
          )}
          numColumns={3}
          keyExtractor={(item) => item.Id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </>
  );
};

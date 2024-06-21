import IconSearchDefault from '@/assets/images/icon-search-default.svg';
import { useState } from 'react';
import {
  Keyboard,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';

export const SearchBar = () => {
  const [focusInput, setFocusInput] = useState(false);

  const onSearch = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    const { text } = event.nativeEvent;
    // console.log(text);
    onCancel();
  };

  const onCancel = () => {
    setFocusInput(false);
    Keyboard.dismiss();
  };

  return (
    <View style={tw`flex flex-row items-center mx-4`}>
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
          onFocus={() => setFocusInput(true)}
          returnKeyType="search"
          onSubmitEditing={onSearch}
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

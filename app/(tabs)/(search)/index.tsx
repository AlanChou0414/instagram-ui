import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { SearchBar, SearchPost } from './_layout';

const SearchScreen = () => {
  const [hiddenPost, setHiddenPost] = useState(false);

  return (
    <SafeAreaView>
      <SearchBar setHiddenPost={setHiddenPost} />
      <SearchPost hiddenPost={hiddenPost} />
    </SafeAreaView>
  );
};

export default SearchScreen;

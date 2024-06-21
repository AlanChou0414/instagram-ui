import { SafeAreaView } from 'react-native';
import { LimitedTimeBar, PostList } from './_layout';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <LimitedTimeBar />
      <PostList />
    </SafeAreaView>
  );
};

export default HomeScreen;

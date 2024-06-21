import { SafeAreaView } from 'react-native';
import { PostList } from './_layout';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <PostList post={12} />
    </SafeAreaView>
  );
};

export default HomeScreen;

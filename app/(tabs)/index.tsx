import IconAddPost from '@/assets/images/icon-addport.svg';
import IconHome from '@/assets/images/icon-home.svg';
import IconSearch from '@/assets/images/icon-search.svg';
import IconVideo from '@/assets/images/icon-video.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { RootTabParamList } from '../types/navigation';
import AddPostScreen from './(AddPost)';
import HomeScreen from './(home)';
import ProfileScreen from './(profile)/inex';
import SearchScreen from './(search)';
import VideoScreen from './(video)';

const Tab = createBottomTabNavigator<RootTabParamList>();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { padding: 15, marginBottom: 20 },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#5a5a5a',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconHome
              style={tw`${focused ? 'mb-3' : ''}`}
              width={35}
              height={35}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconSearch
              style={tw`${focused ? 'mb-3' : ''}`}
              width={35}
              height={35}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IconAddPost width={35} height={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconVideo
              style={tw`${focused ? 'mb-3' : ''}`}
              width={35}
              height={35}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('@/assets/images/avatars-default.png')}
              style={[tw`${focused ? 'mb-3' : ''}`, { width: 30, height: 30 }]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

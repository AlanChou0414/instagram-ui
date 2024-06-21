import IconAddPostActive from '@/assets/images/icon-addport-active.svg';
import IconAddPostDefault from '@/assets/images/icon-addport-default.svg';
import IconHomeActive from '@/assets/images/icon-home-active.svg';
import IconHomeDefault from '@/assets/images/icon-home-default.svg';
import IconSearchActive from '@/assets/images/icon-search-active.svg';
import IconSearchDefault from '@/assets/images/icon-search-default.svg';
import IconVideoActive from '@/assets/images/icon-video-active.svg';
import IconVideoDefault from '@/assets/images/icon-video-default.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
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
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <IconHomeActive width={35} height={35} />
              ) : (
                <IconHomeDefault width={35} height={35} />
              )}
            </>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <IconSearchActive width={35} height={35} />
              ) : (
                <IconSearchDefault width={35} height={35} />
              )}
            </>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <IconAddPostActive width={35} height={35} />
              ) : (
                <IconAddPostDefault width={35} height={35} />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <IconVideoActive width={35} height={35} />
              ) : (
                <IconVideoDefault width={35} height={35} />
              )}
            </>
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
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

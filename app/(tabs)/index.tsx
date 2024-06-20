import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faCircleUser,
  faHome,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types/navigation';
import HomeScreen from './(home)';
import ProfileScreen from './(profile)/inex';
import SearchScreen from './(search)';
import VideoScreen from './(video)';
import { LimitedTimeBar, TabIcon } from './_layout';

const Tab = createBottomTabNavigator<RootTabParamList>();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { padding: 20, marginBottom: 20 },
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
            <TabIcon icon={faHome} color={color} focused={focused} />
          ),
          header: (props) => (<LimitedTimeBar />)
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={faMagnifyingGlass} color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={faYoutube} color={color} focused={focused} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={faCircleUser} color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

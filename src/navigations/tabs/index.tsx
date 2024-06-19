import HomeScreen from "@/src/screens/home";
import ProfileScreen from "@/src/screens/profile";
import SearchScreen from "@/src/screens/search";
import VideoScreen from "@/src/screens/video";
import { RootTabParamList } from "@/src/types/navigation";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHome, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<RootTabParamList>();

/* 主要導覽 */
const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { padding: 20, marginBottom: 20 },
      tabBarShowLabel: false
    }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faHome} size={30} />
      }} />
      <Tab.Screen name='Search' component={SearchScreen} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faMagnifyingGlass} size={30} />
      }} />
      <Tab.Screen name='Video' component={VideoScreen} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faYoutube} size={30} />
      }} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{
        tabBarIcon: () => <FontAwesomeIcon icon={faUser} size={30} />
      }} />
    </Tab.Navigator>
  )
}

export default MainTab
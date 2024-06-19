import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMugSaucer, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainTab from './navigations/tabs';

export default function App() {
  library.add(fab, faSquareCheck, faMugSaucer);

  return (
    <SafeAreaProvider>
      <StatusBar animated style="dark" />
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

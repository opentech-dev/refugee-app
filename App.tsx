import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { PaperProvider } from 'react-native-paper';

import Navigator from './src/navigator/Navigator';
import LanguageProvider from './src/providers/LanguageProvider';
import TopicProvider from './src/providers/TopicProvider';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 1000);
  return (
    <NavigationContainer>
      <PaperProvider>
        <LanguageProvider>
          <TopicProvider>
            <Navigator />
          </TopicProvider>
        </LanguageProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

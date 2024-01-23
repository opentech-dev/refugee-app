import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import Navigator from './src/navigator/Navigator';
import LanguageProvider from './src/providers/LanguageProvider';
import TopicProvider from './src/providers/TopicProvider';

export default function App() {
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

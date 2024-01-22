import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import Navigator from './src/navigator/Navigator';
import LanguageProvider from './src/providers/LanguageProvider';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <LanguageProvider>
          <Navigator />
        </LanguageProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';

import { RootStackParamList } from './types';
import AppBar from '../components/AppBar';
import { LanguageContext } from '../providers/LanguageContext';
import About from '../screens/About';
import ChooseLanguage from '../screens/choose-language/ChooseLanguage';
import Expressions from '../screens/expressions/Expressions';
import Topics from '../screens/topics/Topics';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigator = () => {
  const { language } = useContext(LanguageContext);

  if (language === null) return null;

  return (
    <>
      <Stack.Navigator
        screenOptions={{ animation: 'none' }}
        initialRouteName={language === '' ? 'ChooseLanguage' : 'Topics'}
      >
        <Stack.Screen
          name="ChooseLanguage"
          component={ChooseLanguage}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Topics"
          component={Topics}
          options={{
            header: () => (
              <AppBar title="Topics" showLanguagePicker showMenuButton />
            ),
          }}
        />
        <Stack.Screen
          name="Expressions"
          component={Expressions}
          options={{
            header: () => (
              <AppBar showBackButton showMenuButton title="Usual Expressions" />
            ),
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            header: () => <AppBar showBackButton title="About" />,
          }}
        />
      </Stack.Navigator>
    </>
  );
};
export default Navigator;

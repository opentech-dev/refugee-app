import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';

import { RootStackParamList } from './types';
import AppBar from '../components/AppBar';
import { getTopics } from '../get-topics';
import { languageItems } from '../language-items';
import { LanguageContext } from '../providers/LanguageContext';
import { TopicContext } from '../providers/TopicContext';
import About from '../screens/About';
import ChooseLanguage from '../screens/choose-language/ChooseLanguage';
import Expressions from '../screens/expressions/Expressions';
import Topics from '../screens/topics/Topics';
import { Language, TopicKey } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigator = () => {
  const { language } = useContext(LanguageContext);
  const { topic } = useContext(TopicContext);

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
              <AppBar
                title={getTopics()[language as Language].topicsTitle}
                showLanguagePicker
                showMenuButton
              />
            ),
          }}
        />
        <Stack.Screen
          name="Expressions"
          component={Expressions}
          options={{
            header: () => (
              <AppBar
                showBackButton
                showMenuButton
                title={
                  getTopics()[language as Language].topics[topic as TopicKey]
                }
              />
            ),
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            header: () => (
              <AppBar
                showBackButton
                title={
                  languageItems.find((item) => item.value === language)
                    ?.aboutTitle ?? 'About'
                }
              />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};
export default Navigator;

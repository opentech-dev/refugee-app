import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import { useChooseLanguageInterval } from './useChooseLanguageInterval';
import CheckIcon from '../../../assets/icons/check.svg';
import { appStyles } from '../../appStyles';
import { languageItems } from '../../language-items';
import { ScreenProps } from '../../navigator/types';
import { LanguageContext } from '../../providers/LanguageContext';

const ChooseLanguage = ({ navigation }: ScreenProps<'ChooseLanguage'>) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const { chooseLanguageMessage } = useChooseLanguageInterval({
    languageItems,
    language,
  });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View>
        <View style={styles.titleContainer}>
          <Text variant="titleLarge" style={styles.title}>
            {chooseLanguageMessage ??
              languageItems.find((item) => item.value === language)
                ?.chooseMessage ??
              'Choose your language'}
          </Text>
        </View>
        <View style={styles.cardContainer}>
          {languageItems.map((item) => (
            <Card
              elevation={0}
              style={{
                shadowOpacity: 0,
                backgroundColor:
                  language === item.value
                    ? appStyles.cardSelectedBackground
                    : appStyles.cardBackground,
              }}
              key={item.label}
              onPress={() => setLanguage(item.value)}
            >
              <Card.Content>
                <View style={styles.languageCardContent}>
                  <View style={styles.languageCardMain}>
                    <View
                      style={{
                        borderRadius: 8,
                        borderColor:
                          language === item.value
                            ? appStyles.cardSelectedBackground
                            : appStyles.svgStroke,
                        borderWidth: 1,
                        overflow: 'hidden',
                      }}
                    >
                      {item.icon}
                    </View>
                    <Text
                      style={{
                        ...styles.cardText,
                        fontWeight: item.value === 'arabic' ? '700' : '600',
                      }}
                      variant="titleMedium"
                    >
                      {item.label}
                    </Text>
                  </View>
                  {language === item.value && <CheckIcon />}
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>
      </View>
      {/* <Button onPress={() => setLanguage('')}>Clear language</Button> */}
      {language && (
        <Button
          mode="contained"
          style={styles.continueButton}
          labelStyle={{
            fontSize: 16,
            color: appStyles.white,
            fontWeight: language === 'arabic' ? '700' : '600',
          }}
          contentStyle={{ height: 48 }}
          onPress={() => {
            navigation.navigate('Topics');
          }}
        >
          {languageItems.find((item) => item.value === language)
            ?.continueMessage ?? 'Continue'}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 80,
    marginBottom: 16,
    height: 64,
  },
  title: {
    textAlign: 'center',
    lineHeight: 28,
    color: appStyles.default,
  },
  cardText: {
    fontSize: 20,
    color: appStyles.default,
  },
  continueButton: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: appStyles.primary,
  },
  container: {
    backgroundColor: appStyles.containerBackground,
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  cardContainer: {
    display: 'flex',
    gap: 12,
  },
  languageCardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageCardMain: {
    gap: 24,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ChooseLanguage;

import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { topicItems } from './topic-items';
import { appStyles } from '../../appStyles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { getTopics } from '../../get-topics';
import { ScreenProps } from '../../navigator/types';
import { LanguageContext } from '../../providers/LanguageContext';
import { TopicContext } from '../../providers/TopicContext';
import { TopicKey, TopicsType } from '../../types';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const shouldFlipIcon = (value: TopicKey) => {
  return ['purchases', 'healthcare', 'transportation'].includes(value);
};

const Topics = ({ navigation }: ScreenProps<'Topics'>) => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'arabic';

  const { setTopic } = useContext(TopicContext);
  const [topics, setTopics] = useState<TopicsType>();

  const handleSelectTopic = (topicKey: TopicKey) => {
    if (!language || !topics) return;
    setTopic(topicKey);
    navigation.navigate('Expressions', {
      language,
      topic: topicKey,
    });
  };

  useEffect(() => {
    if (!language) return;
    const newTopics = getTopics();
    setTopics(newTopics[language].topics);
  }, [language]);

  if (!topics) return <FullScreenLoader />;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {topicItems.map((item) => (
            <View key={item.value} style={styles.gridItem}>
              <TouchableOpacity onPress={() => handleSelectTopic(item.value)}>
                <View style={styles.imageContainer}>
                  {item.icon || <Text>Icon missing</Text>}
                </View>
                <Text
                  style={{
                    ...styles.text,
                    textAlign: 'center',
                    fontWeight: isArabic ? '700' : '600',
                  }}
                  variant="titleMedium"
                >
                  {topics[item.value]}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.containerBackground,
    height: '100%',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
  },
  gridItem: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 250,
    marginBottom: 16,
    alignItems: 'center',
  },
  imageContainer: {
    marginLeft: 20,
    width: 200,
    height: 200,
    marginBottom: 8,
  },
  text: {
    color: appStyles.default,
    fontSize: 20,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
});

export default Topics;

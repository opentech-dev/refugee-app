import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { topicItems } from './topic-items';
import { appStyles } from '../../appStyles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { getTopics } from '../../get-topics';
import { ScreenProps } from '../../navigator/types';
import { LanguageContext } from '../../providers/LanguageContext';
import { TopicContext } from '../../providers/TopicContext';
import { TopicKey, TopicsType } from '../../types';

const Topics = ({ navigation }: ScreenProps<'Topics'>) => {
  const { language } = useContext(LanguageContext);
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
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.cardContainer}>
          {topicItems.map((item) => (
            <Card
              elevation={0}
              key={item.value}
              style={styles.card}
              onPress={() => handleSelectTopic(item.value)}
            >
              <Card.Content>
                <View style={styles.cardContent}>
                  {item.icon}
                  <Text style={styles.text} variant="titleMedium">
                    {topics[item.value]}
                  </Text>
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: appStyles.containerBackground },
  cardContainer: {
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 16,
  },
  cardContent: {
    gap: 16,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    shadowOpacity: 0,
    backgroundColor: 'white',
    display: 'flex',
  },
  text: {
    fontSize: 20,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
});

export default Topics;

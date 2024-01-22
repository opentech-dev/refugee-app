import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

import { getExpressions } from './get-expressions';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ScreenProps } from '../../navigator/types';
import { ExpressionsType } from '../../types';

const Expressions = ({ route }: ScreenProps<'Expressions'>) => {
  const { language, topic } = route.params;
  const [expressions, setExpressions] = useState<ExpressionsType>();

  useEffect(() => {
    if (!language || !topic) return;
    setExpressions(getExpressions(language, topic));
  }, [language, topic]);

  if (!expressions) return <FullScreenLoader />;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          {Object.keys(expressions).map((expressionKey) => (
            <Card key={expressionKey} style={styles.card}>
              <Card.Content>
                <View style={styles.cardContent}>
                  <View style={styles.cardRow}>
                    <Text
                      style={{ fontSize: 22, ...styles.cardText }}
                      variant="titleMedium"
                    >
                      {expressionKey}
                    </Text>
                    <IconButton
                      size={24}
                      onPress={() => {}}
                      icon="volume-high"
                    />
                  </View>
                  <View style={styles.cardRow}>
                    <Text
                      style={{
                        ...styles.cardText,
                        color: '#374151',
                        fontWeight: '400',
                      }}
                      variant="titleMedium"
                    >
                      {expressions[expressionKey]}
                    </Text>
                    <IconButton
                      iconColor="#9CA3AF"
                      size={24}
                      onPress={() => {}}
                      icon="star"
                    />
                  </View>
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
  container: {
    backgroundColor: '#E5E7EB',
    height: '100%',
  },
  cardContainer: {
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 16,
    flexGrow: 0,
  },
  cardContent: {
    display: 'flex',
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'white',
  },
  cardText: {
    verticalAlign: 'middle',
  },
});

export default Expressions;

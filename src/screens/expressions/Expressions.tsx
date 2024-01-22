import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

import { getExpressions } from './get-expressions';
import { appStyles } from '../../appStyles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ScreenProps } from '../../navigator/types';
import { ExpressionsType } from '../../types';

const Expressions = ({ route }: ScreenProps<'Expressions'>) => {
  const { language, topic } = route.params;
  const [nativeExpressions, setNativeExpressions] = useState<ExpressionsType>();
  const [foreignExpressions, setForeignExpressions] =
    useState<ExpressionsType>();

  useEffect(() => {
    if (!language || !topic) return;
    setNativeExpressions(getExpressions(language, topic));
    setForeignExpressions(getExpressions('romanian', topic));
  }, [language, topic]);

  if (!nativeExpressions || !foreignExpressions) return <FullScreenLoader />;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          {Object.keys(foreignExpressions).map((expressionKey) => (
            <Card key={expressionKey} style={styles.card} elevation={0}>
              <Card.Content>
                <View style={styles.cardContent}>
                  <View style={styles.cardRow}>
                    <Text
                      style={{ fontSize: 22, ...styles.cardText }}
                      variant="titleMedium"
                    >
                      {foreignExpressions[expressionKey]}
                    </Text>
                    <IconButton
                      size={24}
                      iconColor={appStyles.darkIcon}
                      onPress={() => {}}
                      icon="volume-high"
                    />
                  </View>
                  <View style={styles.cardRow}>
                    <Text
                      style={{
                        ...styles.cardText,
                        color: appStyles.muted,
                        fontWeight: '400',
                      }}
                      variant="titleMedium"
                    >
                      {nativeExpressions[expressionKey]}
                    </Text>
                    <IconButton
                      iconColor={appStyles.mutedIcon}
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
    backgroundColor: appStyles.containerBackground,
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
    shadowOpacity: 0,
    backgroundColor: appStyles.cardBackground,
  },
  cardText: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    verticalAlign: 'middle',
  },
});

export default Expressions;

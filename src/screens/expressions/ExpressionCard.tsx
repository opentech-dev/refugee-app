import { StyleSheet, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

import { FavoriteExpression } from './useFavoriteExpressions';
import { usePlayAudioExpression } from './usePlayAudioExpression';
import { appStyles } from '../../appStyles';
import { Language } from '../../types';

const ExpressionCard = ({
  language,
  expressionKey,
  nativeValue,
  foreignValue,
  isFavorite,
  toggleFavorite,
}: {
  language: Language;
  foreignValue: string;
  nativeValue: string;
  expressionKey: string;
  isFavorite: boolean;
  toggleFavorite: (
    language: Language,
    key: string,
    expression: FavoriteExpression,
  ) => void;
}) => {
  const { playingExpression, playAudio } = usePlayAudioExpression();

  return (
    <Card
      key={expressionKey}
      style={{
        ...styles.card,
        backgroundColor:
          expressionKey === playingExpression
            ? appStyles.cardSelectedBackground
            : appStyles.cardBackground,
      }}
      elevation={0}
    >
      <Card.Content>
        <View style={styles.cardContent}>
          <View style={styles.cardRow}>
            <Text
              style={{ fontSize: 22, ...styles.cardText }}
              variant="titleMedium"
            >
              {foreignValue}
            </Text>
            <IconButton
              size={24}
              iconColor={appStyles.darkIcon}
              onPress={() => {}}
              icon="volume-high"
              onPressOut={() => playAudio(expressionKey)}
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
              {nativeValue}
            </Text>
            <IconButton
              iconColor={
                isFavorite ? appStyles.activeStarIcon : appStyles.mutedIcon
              }
              size={24}
              onPress={() => {
                toggleFavorite(language, expressionKey, {
                  nativeValue,
                  foreignValue,
                });
              }}
              icon="star"
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
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
  },
  cardText: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    verticalAlign: 'middle',
  },
});

export default ExpressionCard;

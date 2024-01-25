import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ExpressionCard, MemoizedExpressionCard } from './ExpressionCard';
import { useExpressions } from './useExpressions';
import { useFavoriteExpressions } from './useFavoriteExpressions';
import { usePlayAudioExpression } from './usePlayAudioExpression';
import { appStyles } from '../../appStyles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ScreenProps } from '../../navigator/types';

const Expressions = ({ route }: ScreenProps<'Expressions'>) => {
  const { language, topic } = route.params;
  const { foreignExpressions, nativeExpressions } = useExpressions({
    language,
    topic,
  });
  const { favorites, toggleFavorite } = useFavoriteExpressions();
  const { playingExpression, playAudio, stopSound } = usePlayAudioExpression();

  useEffect(() => {
    return () => {
      stopSound();
    };
  }, []);

  if (!nativeExpressions || !foreignExpressions || !favorites)
    return <FullScreenLoader />;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          {topic === 'favorites'
            ? Object.keys(favorites[language] || {}).map(
                (expressionKey, index) => (
                  <ExpressionCard
                    toggleFavorite={toggleFavorite}
                    key={index}
                    language={language}
                    foreignValue={
                      favorites[language][expressionKey].foreignValue
                    }
                    nativeValue={favorites[language][expressionKey].nativeValue}
                    expressionKey={expressionKey}
                    isFavorite={Object.prototype.hasOwnProperty.call(
                      favorites[language] ?? {},
                      expressionKey,
                    )}
                    isPlaying={expressionKey === playingExpression}
                    playAudio={playAudio}
                    topic={topic}
                  />
                ),
              )
            : Object.keys(foreignExpressions).map((expressionKey, index) => (
                <MemoizedExpressionCard
                  toggleFavorite={toggleFavorite}
                  key={index}
                  language={language}
                  foreignValue={foreignExpressions[expressionKey]}
                  nativeValue={nativeExpressions[expressionKey]}
                  expressionKey={expressionKey}
                  isFavorite={Object.prototype.hasOwnProperty.call(
                    favorites[language] ?? {},
                    expressionKey,
                  )}
                  isPlaying={expressionKey === playingExpression}
                  playAudio={playAudio}
                  topic={topic}
                />
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
});

export default Expressions;

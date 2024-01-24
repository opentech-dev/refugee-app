import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import ExpressionCard from './ExpressionCard';
import { useExpressions } from './useExpressions';
import { useFavoriteExpressions } from './useFavoriteExpressions';
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

  if (!nativeExpressions || !foreignExpressions || !favorites)
    return <FullScreenLoader />;
  else if (topic === 'favorites' && !Object.keys(favorites).length) {
    return <Text>No favorites</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          {topic === 'favorites'
            ? Object.keys(favorites[language]).map((expressionKey, index) => (
                <ExpressionCard
                  toggleFavorite={toggleFavorite}
                  key={index}
                  language={language}
                  foreignValue={favorites[language][expressionKey].foreignValue}
                  nativeValue={favorites[language][expressionKey].nativeValue}
                  expressionKey={expressionKey}
                  isFavorite={Object.prototype.hasOwnProperty.call(
                    favorites[language] ?? {},
                    expressionKey,
                  )}
                />
              ))
            : Object.keys(foreignExpressions).map((expressionKey, index) => (
                <ExpressionCard
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

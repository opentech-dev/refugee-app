import { Language } from '../../types';

export const replicateFavorites = (
  language: '' | Language | null,
  // eslint-disable-next-line
  favorites: any,
  allNewLanguageExpressions: Record<string, string>,
  allForeignExpressions: Record<string, string>,
) => {
  const newLanguageExpressionKeys: { [key: string]: string } = {};
  Object.keys(allNewLanguageExpressions).forEach((category) => {
    Object.assign(
      newLanguageExpressionKeys,
      allNewLanguageExpressions[category],
    );
  });
  if (!language) return;
  if (!favorites[language]) {
    favorites[language] = {};
  }

  const foreignExpressionKeys: { [key: string]: string } = {};
  Object.keys(allForeignExpressions).forEach((category) => {
    Object.assign(foreignExpressionKeys, allForeignExpressions[category]);
  });
  if (!language) return;
  if (!favorites[language]) {
    favorites[language] = {};
  }

  Object.keys(favorites).forEach((lang) => {
    Object.keys(favorites[lang]).forEach((key) => {
      if (newLanguageExpressionKeys[key]) {
        favorites[language][key] = {
          foreignValue: foreignExpressionKeys[key],
          nativeValue: newLanguageExpressionKeys[key],
        };
      }
    });
  });

  return favorites;
};

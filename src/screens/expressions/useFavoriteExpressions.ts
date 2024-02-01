import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import { Language } from '../../types';

export type FavoriteExpression = {
  nativeValue: string;
  foreignValue: string;
};

type Favorites = {
  [language in Language]: {
    [key: string]: FavoriteExpression;
  };
};

const FAVORITES_STORAGE_KEY = 'favorites';

export const useFavoriteExpressions = () => {
  const [favorites, setFavorites] = useState<Favorites | null>(null);

  const loadFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      setFavorites(
        jsonValue != null
          ? (JSON.parse(jsonValue) as Favorites)
          : ({} as Favorites),
      );
    } catch (e) {
      console.error('Error loading favorites:', e);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const toggleFavorite = (
    language: Language,
    key: string,
    expression: FavoriteExpression,
  ) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites) return null;
      const languageFavorites = prevFavorites[language] || {};

      if (languageFavorites[key]) {
        delete languageFavorites[key];
      } else {
        languageFavorites[key] = expression;
      }

      const newFavorites = {
        ...prevFavorites,
        [language]: { ...languageFavorites },
      };

      const jsonValue = JSON.stringify(newFavorites);
      AsyncStorage.setItem(FAVORITES_STORAGE_KEY, jsonValue);

      return newFavorites;
    });
  };

  return { favorites, toggleFavorite };
};

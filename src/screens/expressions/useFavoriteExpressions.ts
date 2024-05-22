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

export const FAVORITES_STORAGE_KEY = 'favorites';

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

      const isFavorite = prevFavorites[language]?.[key];

      // eslint-disable-next-line
      let updatedFavorites: any;
      if (isFavorite) {
        updatedFavorites = Object.keys(prevFavorites).reduce(
          // eslint-disable-next-line
          (acc: any, lang) => {
            const { [key]: _, ...rest } = prevFavorites[lang as Language];
            acc[lang] = rest;
            return acc;
          },
          {},
        );
      } else {
        updatedFavorites = {
          ...prevFavorites,
          [language]: {
            ...prevFavorites[language],
            [key]: expression,
          },
        };
      }

      const jsonValue = JSON.stringify(updatedFavorites);
      AsyncStorage.setItem(FAVORITES_STORAGE_KEY, jsonValue);

      return updatedFavorites;
    });
  };

  return { favorites, toggleFavorite };
};

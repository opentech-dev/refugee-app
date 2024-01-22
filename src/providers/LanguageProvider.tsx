import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';

import { LanguageContext } from './LanguageContext';
import { Language } from '../types';

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = React.useState<Language | '' | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('language').then((storedLanguage) => {
      setLanguage((storedLanguage as Language) ?? '');
    });
  }, []);

  const handleSetLanguage = (newLanguage: Language | '' | null) => {
    AsyncStorage.setItem('language', newLanguage ?? '');
    setLanguage(newLanguage);
  };

  const contextValue = {
    language,
    setLanguage: handleSetLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

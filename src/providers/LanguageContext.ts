import { createContext } from 'react';

import { Language } from '../types';

type LanguageContextType = {
  language: Language | '' | null;
  setLanguage: (language: Language | '' | null) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: '',
  setLanguage: () => {},
});

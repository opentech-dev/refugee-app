import { ReactNode } from 'react';

export type Language = 'english' | 'arabic' | 'ukranian' | 'russian';

export type LanguageItem = {
  label: string;
  value: Language;
  chooseMessage: string;
  icon: ReactNode;
};

export type TopicKey =
  | 'favorites'
  | 'greetings'
  | 'humans'
  | 'purchases'
  | 'tansportation'
  | 'time'
  | 'healthcare'
  | 'politics'
  | 'media'
  | 'museums'
  | 'fashion'
  | 'education'
  | 'health';

export type TopicsType = {
  [key in TopicKey]: string;
};

export type ExpressionsType = {
  [key in string]: string;
};

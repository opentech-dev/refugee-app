import { Language } from '../../types';

export const getTopics = (language: Language) => {
  switch (language) {
    case 'english':
      return require(`topics/english.json`);
    case 'russian':
      return require('topics/russian.json');
    case 'ukranian':
      return require('topics/ukranian.json');
    default:
      return require('topics/english.json');
  }
};

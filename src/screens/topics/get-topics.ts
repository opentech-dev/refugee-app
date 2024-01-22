import { Language } from '../../types';

export const getTopics = (language: Language) => {
  switch (language) {
    case 'english':
      return require('../../../assets/topics/english.json');
    case 'russian':
      return require('../../../assets/topics/russian.json');
    case 'ukranian':
      return require('../../../assets/topics/ukranian.json');
    default:
      return require('../../../assets/topics/english.json');
  }
};

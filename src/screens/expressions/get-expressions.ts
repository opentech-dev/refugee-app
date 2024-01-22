import { Language, TopicKey } from '../../types';

export const getExpressions = (language: Language, topic: TopicKey) => {
  switch (language) {
    case 'english':
      switch (topic) {
        case 'greetings':
          return require('../../../assets/expressions/greetings/english.json');
        default:
          return require('../../../assets/expressions/greetings/english.json');
      }
    case 'russian':
      switch (topic) {
        case 'greetings':
          return require('../../../assets/expressions/greetings/russian.json');
        default:
          return require('../../../assets/expressions/greetings/russian.json');
      }
    default:
      return require('../../../assets/topics/english.json');
  }
};

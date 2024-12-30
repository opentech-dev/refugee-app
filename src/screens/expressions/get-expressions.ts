import { Language, TopicKey } from '../../types';

export const getExpressions = (
  language: Language | 'romanian',
  topic: TopicKey,
) => {
  switch (language) {
    case 'english':
      switch (topic) {
        case 'greetings':
          return require('../../../assets/expressions/greetings/english.json');
        case 'humans':
          return require('../../../assets/expressions/humans/english.json');
        case 'purchases':
          return require('../../../assets/expressions/purchases/english.json');
        case 'transportation':
          return require('../../../assets/expressions/transportation/english.json');
        case 'time':
          return require('../../../assets/expressions/time/english.json');
        case 'healthcare':
          return require('../../../assets/expressions/healthcare/english.json');
        case 'politics':
          return require('../../../assets/expressions/politics/english.json');
        case 'media':
          return require('../../../assets/expressions/media/english.json');
        case 'museums':
          return require('../../../assets/expressions/museums/english.json');
        case 'fashion':
          return require('../../../assets/expressions/fashion/english.json');
        case 'education':
          return require('../../../assets/expressions/education/english.json');
        case 'health':
          return require('../../../assets/expressions/health/english.json');
        default:
          return require('../../../assets/expressions/greetings/english.json');
      }
    case 'russian':
      switch (topic) {
        case 'greetings':
          return require('../../../assets/expressions/greetings/russian.json');
        case 'humans':
          return require('../../../assets/expressions/humans/russian.json');
        case 'purchases':
          return require('../../../assets/expressions/purchases/russian.json');
        case 'transportation':
          return require('../../../assets/expressions/transportation/russian.json');
        case 'time':
          return require('../../../assets/expressions/time/russian.json');
        case 'healthcare':
          return require('../../../assets/expressions/healthcare/russian.json');
        case 'politics':
          return require('../../../assets/expressions/politics/russian.json');
        case 'media':
          return require('../../../assets/expressions/media/russian.json');
        case 'museums':
          return require('../../../assets/expressions/museums/russian.json');
        case 'fashion':
          return require('../../../assets/expressions/fashion/russian.json');
        case 'education':
          return require('../../../assets/expressions/education/russian.json');
        case 'health':
          return require('../../../assets/expressions/health/russian.json');
        default:
          return require('../../../assets/expressions/greetings/russian.json');
      }
    case 'ukranian':
      switch (topic) {
        case 'greetings':
          return require('../../../assets/expressions/greetings/ukranian.json');
        case 'humans':
          return require('../../../assets/expressions/humans/ukranian.json');
        case 'purchases':
          return require('../../../assets/expressions/purchases/ukranian.json');
        case 'transportation':
          return require('../../../assets/expressions/transportation/ukranian.json');
        case 'time':
          return require('../../../assets/expressions/time/ukranian.json');
        case 'healthcare':
          return require('../../../assets/expressions/healthcare/ukranian.json');
        case 'politics':
          return require('../../../assets/expressions/politics/ukranian.json');
        case 'media':
          return require('../../../assets/expressions/media/ukranian.json');
        case 'museums':
          return require('../../../assets/expressions/museums/ukranian.json');
        case 'fashion':
          return require('../../../assets/expressions/fashion/ukranian.json');
        case 'education':
          return require('../../../assets/expressions/education/ukranian.json');
        case 'health':
          return require('../../../assets/expressions/health/ukranian.json');
        default:
          return require('../../../assets/expressions/greetings/ukranian.json');
      }
    case 'arabic':
      switch (topic) {
        case 'greetings':
          return require('../../../assets/expressions/greetings/arabic.json');
        case 'humans':
          return require('../../../assets/expressions/humans/arabic.json');
        case 'purchases':
          return require('../../../assets/expressions/purchases/arabic.json');
        case 'transportation':
          return require('../../../assets/expressions/transportation/arabic.json');
        case 'time':
          return require('../../../assets/expressions/time/arabic.json');
        case 'healthcare':
          return require('../../../assets/expressions/healthcare/arabic.json');
        case 'politics':
          return require('../../../assets/expressions/politics/arabic.json');
        case 'media':
          return require('../../../assets/expressions/media/arabic.json');
        case 'museums':
          return require('../../../assets/expressions/museums/arabic.json');
        case 'fashion':
          return require('../../../assets/expressions/fashion/arabic.json');
        case 'education':
          return require('../../../assets/expressions/education/arabic.json');
        case 'health':
          return require('../../../assets/expressions/health/arabic.json');
        default:
          return require('../../../assets/expressions/greetings/arabic.json');
      }
    case 'romanian':
      switch (topic) {
        case 'greetings':
          return require('../../../assets/expressions/greetings/romanian.json');
        case 'humans':
          return require('../../../assets/expressions/humans/romanian.json');
        case 'purchases':
          return require('../../../assets/expressions/purchases/romanian.json');
        case 'transportation':
          return require('../../../assets/expressions/transportation/romanian.json');
        case 'time':
          return require('../../../assets/expressions/time/romanian.json');
        case 'healthcare':
          return require('../../../assets/expressions/healthcare/romanian.json');
        case 'politics':
          return require('../../../assets/expressions/politics/romanian.json');
        case 'media':
          return require('../../../assets/expressions/media/romanian.json');
        case 'museums':
          return require('../../../assets/expressions/museums/romanian.json');
        case 'fashion':
          return require('../../../assets/expressions/fashion/romanian.json');
        case 'education':
          return require('../../../assets/expressions/education/romanian.json');
        case 'health':
          return require('../../../assets/expressions/health/romanian.json');
        default:
          return require('../../../assets/expressions/greetings/romanian.json');
      }
  }
};

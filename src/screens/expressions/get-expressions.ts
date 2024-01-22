import { Language, TopicKey } from '../../types';

export const getExpressions = (
  language: Language | 'romanian',
  topic: TopicKey,
) => {
  switch (language) {
    case 'english':
      switch (topic) {
        case 'greetings':
          return require('expressions/greetings/english.json');
        case 'humans':
          return require('expressions/humans/english.json');
        case 'purchases':
          return require('expressions/purchases/english.json');
        case 'transportation':
          return require('expressions/transportation/english.json');
        case 'time':
          return require('expressions/time/english.json');
        case 'healthcare':
          return require('expressions/healthcare/english.json');
        case 'politics':
          return require('expressions/politics/english.json');
        case 'media':
          return require('expressions/media/english.json');
        case 'museums':
          return require('expressions/museums/english.json');
        case 'fashion':
          return require('expressions/fashion/english.json');
        case 'education':
          return require('expressions/education/english.json');
        case 'health':
          return require('expressions/health/english.json');
        default:
          return require('expressions/greetings/english.json');
      }
    case 'russian':
      switch (topic) {
        case 'greetings':
          return require('expressions/greetings/russian.json');
        case 'humans':
          return require('expressions/humans/russian.json');
        case 'purchases':
          return require('expressions/purchases/russian.json');
        case 'transportation':
          return require('expressions/transportation/russian.json');
        case 'time':
          return require('expressions/time/russian.json');
        case 'healthcare':
          return require('expressions/healthcare/russian.json');
        case 'politics':
          return require('expressions/politics/russian.json');
        case 'media':
          return require('expressions/media/russian.json');
        case 'museums':
          return require('expressions/museums/russian.json');
        case 'fashion':
          return require('expressions/fashion/russian.json');
        case 'education':
          return require('expressions/education/russian.json');
        case 'health':
          return require('expressions/health/russian.json');
        default:
          return require('expressions/greetings/russian.json');
      }
    case 'ukranian':
      switch (topic) {
        case 'greetings':
          return require('expressions/greetings/ukranian.json');
        case 'humans':
          return require('expressions/humans/ukranian.json');
        case 'purchases':
          return require('expressions/purchases/ukranian.json');
        case 'transportation':
          return require('expressions/transportation/ukranian.json');
        case 'time':
          return require('expressions/time/ukranian.json');
        case 'healthcare':
          return require('expressions/healthcare/ukranian.json');
        case 'politics':
          return require('expressions/politics/ukranian.json');
        case 'media':
          return require('expressions/media/ukranian.json');
        case 'museums':
          return require('expressions/museums/ukranian.json');
        case 'fashion':
          return require('expressions/fashion/ukranian.json');
        case 'education':
          return require('expressions/education/ukranian.json');
        case 'health':
          return require('expressions/health/ukranian.json');
        default:
          return require('expressions/greetings/ukranian.json');
      }
    case 'arabic':
      switch (topic) {
        case 'greetings':
          return require('expressions/greetings/arabic.json');
        case 'humans':
          return require('expressions/humans/arabic.json');
        case 'purchases':
          return require('expressions/purchases/arabic.json');
        case 'transportation':
          return require('expressions/transportation/arabic.json');
        case 'time':
          return require('expressions/time/arabic.json');
        case 'healthcare':
          return require('expressions/healthcare/arabic.json');
        case 'politics':
          return require('expressions/politics/arabic.json');
        case 'media':
          return require('expressions/media/arabic.json');
        case 'museums':
          return require('expressions/museums/arabic.json');
        case 'fashion':
          return require('expressions/fashion/arabic.json');
        case 'education':
          return require('expressions/education/arabic.json');
        case 'health':
          return require('expressions/health/arabic.json');
        default:
          return require('expressions/greetings/arabic.json');
      }
    case 'romanian':
      switch (topic) {
        case 'greetings':
          return require('expressions/greetings/romanian.json');
        case 'humans':
          return require('expressions/humans/romanian.json');
        case 'purchases':
          return require('expressions/purchases/romanian.json');
        case 'transportation':
          return require('expressions/transportation/romanian.json');
        case 'time':
          return require('expressions/time/romanian.json');
        case 'healthcare':
          return require('expressions/healthcare/romanian.json');
        case 'politics':
          return require('expressions/politics/romanian.json');
        case 'media':
          return require('expressions/media/romanian.json');
        case 'museums':
          return require('expressions/museums/romanian.json');
        case 'fashion':
          return require('expressions/fashion/romanian.json');
        case 'education':
          return require('expressions/education/romanian.json');
        case 'health':
          return require('expressions/health/romanian.json');
        default:
          return require('expressions/greetings/romanian.json');
      }
  }
};

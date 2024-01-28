import { LanguageItem } from './types';
import Arabic from '../assets//icons/languages/arabic.svg';
import English from '../assets/icons/languages/english.svg';
import Russian from '../assets/icons/languages/russian.svg';
import Ukranian from '../assets/icons/languages/ukranian.svg';

export const languageItems: LanguageItem[] = [
  {
    label: 'English',
    value: 'english',
    chooseMessage: 'Choose your language',
    continueMessage: 'Continue',
    icon: <English />,
  },
  {
    label: 'Русский',
    value: 'russian',
    chooseMessage: 'Выберите ваш язык',
    continueMessage: 'Продолжить',

    icon: <Russian />,
  },
  {
    label: 'Українська',
    value: 'ukranian',
    chooseMessage: 'Виберіть свою мову',
    continueMessage: 'Продовжити',
    icon: <Ukranian />,
  },
  {
    label: 'عَرَبِيّ',
    value: 'arabic',
    chooseMessage: 'اختر لغتك',
    continueMessage: 'يكمل',
    icon: <Arabic />,
  },
];

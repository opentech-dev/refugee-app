import { LanguageItem } from './types';
import Arabic from '../assets//icons/languages/arabic.svg';
import English from '../assets/icons/languages/english.svg';
import Russian from '../assets/icons/languages/russian.svg';
import Ukranian from '../assets/icons/languages/ukranian.svg';

export const languagesItems: LanguageItem[] = [
  {
    label: 'English',
    value: 'english',
    chooseMessage: 'Choose your language',
    icon: <English />,
  },
  {
    label: 'Русский',
    value: 'russian',
    chooseMessage: 'Выберите ваш язык',
    icon: <Russian />,
  },
  {
    label: 'Українська',
    value: 'ukranian',
    chooseMessage: 'Виберіть свою мову',
    icon: <Ukranian />,
  },
  {
    label: 'عَرَبِيّ',
    value: 'arabic',
    chooseMessage: 'اختر لغتك',
    icon: <Arabic />,
  },
];

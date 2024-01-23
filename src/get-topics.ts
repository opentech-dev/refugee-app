import { Language, TopicKey } from './types';

type TopicItems = {
  [key in Language]: {
    topicsTitle: string;
    topics: {
      [key in TopicKey]: string;
    };
  };
};

export const getTopics = (): TopicItems => ({
  english: {
    topicsTitle: 'Topics',
    topics: {
      transportation: 'Transportation',
      education: 'Education / Culture and civilisation',
      fashion: 'The code of good manners / Beauty, Fashion',
      favorites: 'Favorites',
      greetings: 'Forms of greeting',
      health: 'Health',
      healthcare: 'Health Care',
      politics: 'Politics, State / Economics',
      humans: 'Man and his characteristics',
      media: 'Jurisprudence / Mass - media / Communication',
      museums: 'Museums and exhibitions / Theatre',
      purchases: 'Purchases',
      time: 'Time',
    },
  },
  russian: {
    topicsTitle: 'Tемы',
    topics: {
      transportation: 'Транспортные средства',
      education: 'Образование / Культура и цивилизация',
      fashion: 'Кодекс поведения / Красота, мода',
      favorites: 'Favorites',
      greetings: 'Формы приветствия',
      health: 'Здоровье',
      healthcare: 'Здравоохранение',
      politics: 'Политика, Государство / Экономика',
      humans: 'Человек и его характеристикa',
      media: 'Юриспруденция / СМИ / Связи',
      museums: 'Музеи и выставки / Театр',
      purchases: 'Покупки',
      time: 'Время',
    },
  },
  arabic: {
    topicsTitle: 'Topics',
    topics: {
      transportation: 'Transportations',
      education: 'Education',
      fashion: 'Fashion',
      favorites: 'Favorites',
      greetings: 'Greetings',
      health: 'Health',
      healthcare: 'Healthcare',
      politics: 'Politics',
      humans: 'Man and his characteristics',
      media: 'Media',
      museums: 'Museums',
      purchases: 'Purchases',
      time: 'Time',
    },
  },
  ukranian: {
    topicsTitle: 'Tеми',
    topics: {
      favorites: 'Favorites',
      transportation: 'Транспортні засоби',
      education: 'Освіта / Культура та цивілізація',
      fashion: 'Кодекс поведінки / Краса, мода',
      greetings: 'Форми привітання',
      health: 'Здоров’я',
      healthcare: "Охорона здоров'я",
      politics: 'Політика, Держава / Економіка',
      humans: 'Людина та її характеристика',
      media: 'Юриспруденція / ЗМІ / Звязку',
      museums: 'Музеї та виставки / Театр',
      purchases: 'Покупки',
      time: 'Час',
    },
  },
});

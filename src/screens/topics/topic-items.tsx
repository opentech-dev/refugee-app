import { ReactNode } from 'react';

import Education from '../../../assets/icons/topics/education.svg';
import Fashion from '../../../assets/icons/topics/fashion.svg';
import Favorites from '../../../assets/icons/topics/favorites.svg';
import Greetings from '../../../assets/icons/topics/greetings.svg';
import Health from '../../../assets/icons/topics/health.svg';
import HealthCare from '../../../assets/icons/topics/healthcare.svg';
import Humans from '../../../assets/icons/topics/humans.svg';
import Media from '../../../assets/icons/topics/media.svg';
import Museumns from '../../../assets/icons/topics/museums.svg';
import Politics from '../../../assets/icons/topics/politics.svg';
import Purchases from '../../../assets/icons/topics/purchases.svg';
import Time from '../../../assets/icons/topics/time.svg';
import Transportation from '../../../assets/icons/topics/transportation.svg';
import { TopicKey } from '../../types';

type Topic = {
  value: TopicKey;
  icon: ReactNode;
};

export const topicItems: Topic[] = [
  { value: 'favorites', icon: <Favorites /> },
  { value: 'greetings', icon: <Greetings /> },
  { value: 'humans', icon: <Humans /> },
  { value: 'purchases', icon: <Purchases /> },
  { value: 'transportation', icon: <Transportation /> },
  { value: 'time', icon: <Time /> },
  { value: 'healthcare', icon: <HealthCare /> },
  { value: 'politics', icon: <Politics /> },
  { value: 'media', icon: <Media /> },
  { value: 'museums', icon: <Museumns /> },
  { value: 'fashion', icon: <Fashion /> },
  { value: 'education', icon: <Education /> },
  { value: 'health', icon: <Health /> },
];

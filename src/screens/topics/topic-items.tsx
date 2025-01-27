import { ReactNode } from 'react';
import { Image } from 'react-native';
import { TopicKey } from '../../types';

type Topic = {
  value: TopicKey;
  icon: ReactNode;
};

export const topicItems: Topic[] = [
  {
    value: 'favorites',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/favorites.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Favorites"
      />
    ),
  },
  {
    value: 'greetings',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/greetings.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Greetings"
      />
    ),
  },
  {
    value: 'humans',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/human.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Humans"
      />
    ),
  },
  {
    value: 'purchases',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/money.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Purchases"
      />
    ),
  },
  {
    value: 'transportation',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/transportation.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Transportation"
      />
    ),
  },
  {
    value: 'time',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/time.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Time"
      />
    ),
  },
  {
    value: 'healthcare',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/healthcare.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Healthcare"
      />
    ),
  },
  {
    value: 'politics',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/politics.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Politics"
      />
    ),
  },
  {
    value: 'media',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/media.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Media"
      />
    ),
  },
  {
    value: 'museums',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/culture.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Museums"
      />
    ),
  },
  {
    value: 'fashion',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/fashion.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Fashion"
      />
    ),
  },
  {
    value: 'education',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/school.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Education"
      />
    ),
  },
  {
    value: 'health',
    icon: (
      <Image
        source={require('../../../assets/icons/topics-img/health.jpg')}
        style={{ width: 180, height: 180 }}
        alt="Health"
      />
    ),
  },
];

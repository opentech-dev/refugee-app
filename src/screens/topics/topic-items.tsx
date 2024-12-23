import { ReactNode } from 'react';
import { Image } from 'react-native';

// import Education from '../../../assets/icons/topics/education.svg';
// import Fashion from '../../../assets/icons/topics/fashion.svg';
// import Favorites from '../../../assets/icons/topics/favorites.svg';
// import Greetings from '../../../assets/icons/topics/greetings.svg';
// import Health from '../../../assets/icons/topics/health.svg';
// import HealthCare from '../../../assets/icons/topics/healthcare.svg';
// import Humans from '../../../assets/icons/topics/humans.svg';
// import Media from '../../../assets/icons/topics/media.svg';
// import Museumns from '../../../assets/icons/topics/museums.svg';
// import Politics from '../../../assets/icons/topics/politics.svg';
// import Purchases from '../../../assets/icons/topics/purchases.svg';
// import Time from '../../../assets/icons/topics/time.svg';
// import Transportation from '../../../assets/icons/topics/transportation.svg';
import { TopicKey } from '../../types';


const EducationIcon = '../../../assets/icons/topics-img/school.jpeg';
const FashionIcon = '../../../assets/icons/topics-img/fashion.jpeg';
const FavoritesIcon = '../../../assets/icons/topics-img/favorites.jpeg';
const GreetingsIcon = '../../../assets/icons/topics-img/greetings.jpeg';
const HealthIcon = '../../../assets/icons/topics-img/health.jpeg';
const HealthCareIcon = '../../../assets/icons/topics-img/healthcare.jpeg';
const HumansIcon = '../../../assets/icons/topics-img/human.jpeg';
const MediaIcon = '../../../assets/icons/topics-img/media.jpeg';
const MuseumsIcon = '../../../assets/icons/topics-img/culture.jpeg';
const PoliticsIcon = '../../../assets/icons/topics-img/politics.jpeg';
const PurchasesIcon = '../../../assets/icons/topics-img/money.jpeg';
const TimeIcon = '../../../assets/icons/topics-img/time.jpeg';
const TransportationIcon = '../../../assets/icons/topics-img/transportation.jpeg';


type Topic = { 
  value: TopicKey;
  icon: ReactNode;
};

export const topicItems: Topic[] = [
  { value: 'favorites', icon: <Image source={require(FavoritesIcon)} style={{ width: 180, height: 180 }} alt="Time" />},
  { value: 'greetings', icon: <Image source={require(GreetingsIcon)} style={{ width: 180, height: 180 }} alt="Greetings" /> },
  { value: 'humans', icon: <Image source={require(HumansIcon)} style={{ width: 180, height: 180 }} alt="Humans" /> },
  { value: 'purchases', icon: <Image source={require(PurchasesIcon)} style={{ width: 180, height: 180 }} alt="Education" /> },
  { value: 'transportation', icon: <Image source={require(TransportationIcon)} style={{ width: 180, height: 180 }} alt="Education" />},
  { value: 'time', icon: <Image source={require(TimeIcon)} style={{ width: 180, height: 180 }} alt="Time" /> },
  { value: 'healthcare', icon: <Image source={require(HealthCareIcon)} style={{ width: 180, height: 180 }} alt="Time" /> },
  { value: 'politics', icon: <Image source={require(PoliticsIcon)} style={{ width: 180, height: 180 }} alt="Education" /> },
  { value: 'media', icon: <Image source={require(MediaIcon)} style={{ width: 180, height: 180 }} alt="Media" /> },
  { value: 'museums', icon: <Image source={require(MuseumsIcon)} style={{ width: 180, height: 180 }} alt="Culture" /> },
  { value: 'fashion', icon: <Image source={require(FashionIcon)} style={{ width: 180, height: 180 }} alt="Fashion" /> },
  { value: 'education', icon: <Image source={require(EducationIcon)} style={{ width: 180, height: 180 }} alt="Education" />  },
  { value: 'health', icon: <Image source={require(HealthIcon)} style={{ width: 180, height: 180 }} alt="Time" /> },
]

import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Language, TopicKey } from '../types';

export type RootStackParamList = {
  ChooseLanguage: undefined;
  Topics: undefined;
  Expressions: { language: Language; topic: TopicKey };
  About: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

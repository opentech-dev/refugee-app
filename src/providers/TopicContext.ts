import { createContext } from 'react';

import { TopicKey } from '../types';

type TopicContextType = {
  topic: TopicKey | '' | null;
  setTopic: (topic: TopicKey | '' | null) => void;
};

export const TopicContext = createContext<TopicContextType>({
  topic: '',
  setTopic: () => {},
});

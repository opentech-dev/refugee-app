import React, { useState, FC, ReactNode } from 'react';

import { TopicContext } from './TopicContext';
import { TopicKey } from '../types';

interface TopicProviderProps {
  children: ReactNode;
}

const TopicProvider: FC<TopicProviderProps> = ({ children }) => {
  const [topic, setTopic] = useState<TopicKey | '' | null>('');

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

export default TopicProvider;

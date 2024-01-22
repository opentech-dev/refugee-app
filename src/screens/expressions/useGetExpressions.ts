import { useEffect, useState } from 'react';

import { getExpressions } from './get-expressions';
import { ExpressionsType, Language, TopicKey } from '../../types';

export const useGetExpressions = ({
  language,
  topic,
}: {
  language: Language;
  topic: TopicKey;
}) => {
  const [nativeExpressions, setNativeExpressions] = useState<ExpressionsType>();
  const [foreignExpressions, setForeignExpressions] =
    useState<ExpressionsType>();

  useEffect(() => {
    if (!language || !topic) return;
    setNativeExpressions(getExpressions(language, topic));
    setForeignExpressions(getExpressions('romanian', topic));
  }, [language, topic]);

  return {
    nativeExpressions,
    foreignExpressions,
  };
};

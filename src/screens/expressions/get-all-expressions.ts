import { getExpressions } from './get-expressions';
import { Language } from '../../types';
import { topicItems } from '../topics/topic-items';

export const getAllExpressions = (
  language: Language | null | '' | 'romanian',
) => {
  const expressionsByTopic: Record<string, string> = {};
  if (!language) return;

  topicItems.forEach(({ value }) => {
    if (value !== 'favorites') {
      expressionsByTopic[value] = getExpressions(language, value);
    }
  });

  return expressionsByTopic;
};

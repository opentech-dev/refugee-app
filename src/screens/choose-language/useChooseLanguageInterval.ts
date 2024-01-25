import { useEffect, useState } from 'react';

import { Language, LanguageItem } from '../../types';

export const useChooseLanguageInterval = ({
  languageItems,
  language,
}: {
  languageItems: LanguageItem[];
  language: Language | '' | null;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chooseLanguageMessage, setChooseLanguageMessage] = useState<
    string | null
  >();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!language) {
      setChooseLanguageMessage(languageItems[currentIndex].chooseMessage);

      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % languageItems.length;
          setChooseLanguageMessage(languageItems[nextIndex].chooseMessage);
          return nextIndex;
        });
      }, 1500);
    } else {
      setChooseLanguageMessage(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [language, currentIndex, languageItems]);

  return { chooseLanguageMessage };
};

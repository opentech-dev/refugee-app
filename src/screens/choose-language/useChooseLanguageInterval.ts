import { useEffect, useState } from 'react';
import { Animated } from 'react-native';

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
  const [fadeAnim] = useState(new Animated.Value(0));

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
      }, 2800);
    } else {
      setChooseLanguageMessage(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [language, currentIndex, languageItems]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }).start();
        });
      });
    });
  }, [chooseLanguageMessage]);

  return { chooseLanguageMessage, fadeAnim };
};

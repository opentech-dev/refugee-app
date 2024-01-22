import { Audio } from 'expo-av';
import { useState } from 'react';

import { getAudioFile } from './get-audio-file';

export const usePlayAudioExpression = () => {
  const [playingExpression, setPlayingExpression] = useState('');

  const playAudio = async (expressionKey: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        getAudioFile(expressionKey),
      );
      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) {
          if (status.error) {
            // error playing the file
          }
        } else {
          if (status.didJustFinish && !status.isLooping) {
            setPlayingExpression('');
          }
        }
      });
      setPlayingExpression(expressionKey);
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return { playAudio, playingExpression };
};

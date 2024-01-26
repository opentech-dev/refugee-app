import { Audio } from 'expo-av';
import { useState, useRef } from 'react';

import { getAudioFile } from './get-audio-file';

export const usePlayAudioExpression = () => {
  const [playingExpression, setPlayingExpression] = useState('');
  const soundRef = useRef<Audio.Sound | null>(null);

  const stopSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    } catch {
      //
    }
  };

  const playAudio = async (expressionKey: string) => {
    try {
      if (playingExpression === expressionKey) {
        stopSound();
        setPlayingExpression('');
        return;
      }

      if (soundRef.current) {
        await stopSound();
      }

      const { sound } = await Audio.Sound.createAsync(
        getAudioFile(expressionKey),
      );

      soundRef.current = sound;

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish && !status.isLooping) {
          setPlayingExpression('');
          sound.unloadAsync();
          soundRef.current = null;
        }
      });

      if (sound._loaded) {
        setPlayingExpression(expressionKey);
        await sound.playAsync();
      }
    } catch {
      //
    }
  };

  return { playAudio, stopSound, playingExpression };
};

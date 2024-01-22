export const getAudioFile = (expressionKey: string) => {
  switch (expressionKey) {
    case 'greetings_001':
      return require('audio/greetings_001.mp3');
  }
};

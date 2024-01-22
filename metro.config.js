/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('metro-config');
const path = require('path');

const extraNodeModules = {
  assets: path.resolve(__dirname, 'assets'),
  expressions: path.resolve(__dirname, 'assets/expressions'),
  topics: path.resolve(__dirname, 'assets/topics'),
  audio: path.resolve(__dirname, 'assets/audio'),
};

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      extraNodeModules: new Proxy(extraNodeModules, {
        get: (target, name) =>
          name in target
            ? target[name]
            : path.join(process.cwd(), `node_modules/${name}`),
      }),
    },
  };
})();

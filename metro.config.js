const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Base Metro configuration
const config = getDefaultConfig(__dirname);

// Add support for SVGs using react-native-svg-transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

// Extend supported file extensions
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== 'svg',
);
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'svg',
  'cjs',
  'mjs',
  'jsx',
  'ts',
  'tsx',
];

// Add support for aliases
config.resolver.alias = {
  '@components': path.resolve(__dirname, 'src/components'),
  '@screens': path.resolve(__dirname, 'src/screens'),
  '@assets': path.resolve(__dirname, 'assets'),
};

// Enable inline requires for faster load times
config.transformer.inlineRequires = true;

// Optimize build for performance
config.transformer.minifierConfig = {
  mangle: {
    toplevel: true,
  },
  keep_classnames: false,
  keep_fnames: false,
  output: {
    comments: false,
  },
  compress: {
    drop_console: true,
    passes: 2,
  },
};

module.exports = config;

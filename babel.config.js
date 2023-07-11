export const presets = ['module:metro-react-native-babel-preset'];
export const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      absoluteRuntime: false,
      corejs: false,
      helpers: true,
      regenerator: true,
      version: '7.0.0-beta.0',
    },
  ],
  'react-native-reanimated/plugin',
];

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {findWorkspaces} = require('find-workspaces');
const fs = require('fs');

const watchFolders = findWorkspaces(__dirname).map(item => item.location);
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: ['..', ...watchFolders],
  resetCache: true,
  resolver: {
    nodeModulesPaths: [
      'node_modules',
      '../../node_modules',
      ...watchFolders.map(item => `${item}/node_modules`),
    ],
  },
};

fs.writeFileSync(
  './metro.config.json',
  JSON.stringify(mergeConfig(getDefaultConfig(__dirname), config), null, 2),
);

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

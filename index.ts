import { getCurrentScriptPath, readFileRecursive } from './lib/files';
export * from './lib/files';
export const files = {
  readFileRecursive,
  getCurrentScriptPath,
};

import { ranger } from './lib/array';
export * from './lib/array';
export const array = {
  ranger,
};

import { JSONClone, ptyLog } from './lib/json';
export * from './lib/json';
export const json = {
  JSONClone,
  ptyLog,
};

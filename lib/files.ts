import * as fs from 'fs';
import * as path from 'path';

/**
 *
 * @description 获取对应目录下所有文件的名称
 * @param dir 所要读取对应文件夹的地址
 * @returns 由文件夹下所有文件的名称组成的数组。
 */
export function readFileRecursive(dir: string) {

  return __readFileRecursive(dir);

  function __readFileRecursive(dir: string, fileList: string[] = []) {
    const files = fs.readdirSync(dir);

    files.forEach((item) => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        __readFileRecursive(fullPath, fileList);
      } else {
        fileList.push(fullPath);
      }
    });

    return fileList;
  }
}

type CallSuite = Parameters<typeof Error.prepareStackTrace>[1] extends Array<infer T> ? T : never;

/**
 *
 * @description 获取当前运行函数所在文件的地址
 */
export function getCurrentScriptPath() {
  const orig = Error.prepareStackTrace;
  Error.prepareStackTrace = function (_, stack) {
    return stack;
  };
  const err = new Error();
  const stack = err.stack as unknown as CallSuite[];
  Error.prepareStackTrace = orig;
  return stack[2].getFileName();
}

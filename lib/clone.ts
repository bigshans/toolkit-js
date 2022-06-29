import { typeOf } from './typeUtils';

/**
 * @description 深拷贝对象，循环依赖不会报错。代码修改自 rambda 。
 * @param source 源数据
 * @returns 深拷贝完成后的数据
 */
export function dpClone<T>(source: T): T {
  return source == null ? source : _clone(source, [], []);
}

function _cloneRegExp(pattern: RegExp): RegExp {
  return new RegExp(
    pattern.source,
    (pattern.global ? 'g' : '') +
      (pattern.ignoreCase ? 'i' : '') +
      (pattern.multiline ? 'm' : '') +
      (pattern.sticky ? 'y' : '') +
      (pattern.unicode ? 'u' : '')
  );
}

function _clone(value: any, refFrom: any[], refTo: any[]): any {
  function copy(copiedValue: any) {
    const len = refFrom.length;
    let idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx] = value;
    refTo[idx] = copiedValue;
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        copiedValue[key] = _clone(value[key], refFrom, refTo);
      }
    }
    return copiedValue;
  }
  switch (typeOf(value)) {
    case 'Object':
      return copy(Object.create(Object.getPrototypeOf(value)));
    case 'Array':
      return copy([]);
    case 'Date':
      return new Date(value.valueOf());
    case 'RegExp':
      return _cloneRegExp(value);
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      return value.slice();
    default:
      return value;
  }
}

/**
 * @description 使用 JSON 进行深拷贝，不过是有损拷贝， class 无法拷贝
 * @param source 源数据
 * @return 深拷贝完成后的数据
 **/
export function cloneByJSON(source: any) {
  return source == null ? source : JSON.parse(JSON.stringify(source));
}

export const clone = {
  dpClone,
  cloneByJSON,
};

/**
 * @description 获取对象的类型
 * @param val 需要获取类型的对象
 * @return 对象的类型
 **/
export function typeOf(val: any): string {
  return val === 'null'
    ? 'Null'
    : val === undefined
    ? 'Undefined'
    : Object.prototype.toString.call(val).slice(8, -1);
}

export const typeUtils = {
  typeOf,
};

/**
 * @description 根据区间长度生成整数数组，用于迭代数组索引
 * @param length 生成区间长度
 * @returns 生成 0 <= x < length 区间的整数数列
 */
export function ranger(length: number): number[];
/**
 * @description 根据区间的开始与结束生成整数数组，用于迭代数组索引
 * @param start 区间起始
 * @param end 区间结束
 * @returns 生成 start <= x < end 区间的整数数列
 */
export function ranger(start: number, end: number): number[];
export function ranger(start: number, end?: number): number[] {
  if (end === undefined || end === null) {
    const length = start;
    return [...Array(length).keys()];
  }
  return [...Array(end - start).keys()].map((i) => i + start);
}

export const array = {
  ranger,
};

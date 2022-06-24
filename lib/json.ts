/**
 * @description log JSON more pretty
 * @param obj
 * @param indent indent for print JSON, default is 2
 */
export function ptyLog(obj: any, indent = 2) {
  console.log(JSON.stringify(obj, null, indent));
}

/**
 *
 * @description deep clone by JSON, but not a complete copy
 * @param source
 */
export function JSONClone(source: any) {
  return JSON.parse(JSON.stringify(source));
}

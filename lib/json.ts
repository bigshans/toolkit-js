/**
 * @description log JSON more pretty
 * @param obj
 * @param indent indent for print JSON, default is 2
 */
export function ptyLog(obj: any, indent = 2) {
  console.log(JSON.stringify(obj, null, indent));
}

export const json = {
  ptyLog,
};

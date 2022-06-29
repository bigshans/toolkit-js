export type Detect = {
  cancel: () => boolean;
};
/**
 * @description recursive call timeout
 * @param callback
 * @param ms
 * @return {Detect} detect can cancel the task
 **/
export function interval(callback: Function, ms?: number): Detect {
  let clear = false;
  function recursiveTimeout() {
    if (clear) {
      return;
    }
    setTimeout(async () => {
      await callback();
      recursiveTimeout();
    }, ms);
  }
  recursiveTimeout();
  return {
    cancel: () => clear = true,
  };
}

export const timer = {
  interval,
};

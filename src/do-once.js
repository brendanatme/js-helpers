/**
 * doOnce
 * 
 * wrap a function so it is only called once
 * 
 * @param cb function to call once
 * @returns function
 */
export const doOnce = (cb) => {
  let called = false;

  return (...args) => {
    if (!called) {
      called = true;
      cb(...args);
    }
  };
};

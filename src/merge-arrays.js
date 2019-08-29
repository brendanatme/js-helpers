/**
 * mergeArrays
 * 
 * flatten an array of arrays
 * 
 * @param  {...any} args 
 * @returns {any[]}
 */
export const mergeArrays = (...args) => args.reduce((acc, val) => [...acc, ...val]);

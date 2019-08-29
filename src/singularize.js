/**
 * singularize
 * 
 * takes a plural word and removes trailing 's'
 * 
 * @param {string}
 * @returns {string}
 */
export const singularize = (str) => str.replace(/s$/, '');

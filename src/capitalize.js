/**
 * capitalize
 * 
 * capitalizes first character
 * in each word of string
 * 
 * ripped from
 * https://stackoverflow.com/questions/2332811/capitalize-words-in-string
 * 
 * @param {string}
 * @returns {string}
 */
export const capitalize = (str) => str.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

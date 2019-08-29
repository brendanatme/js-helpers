/**
 * mapArrayToObject
 * 
 * @param {{}[]} arr array of objects to map to object
 * @param {string} key key of item object in array to use as identifier in mapped object
 * 
 * @return {any} mapped object
 */
export const mapArrayToObject = (arr, key) => {
  const obj = {};

  arr.map((item) => {
    obj[item[key]] = item;
  });

  return obj;
};

/**
 * @param {string} str
 * @return {number}
 */
export default function (str) {
  const INT_MAX = 0x7fffffff;
  const INT_MIN = -0x80000000;

  let result = str.trim().match(/^([\+\-]?\d+)/g) || 0;
  result = Array.isArray(result) ? result[0] : result;
  return Math.max(INT_MIN, Math.min(result, INT_MAX)) || result;
}

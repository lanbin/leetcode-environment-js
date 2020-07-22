/**
 * @param {number[]} height
 * @return {number}
 */

export default function (height) {
  if (height.length < 2) return 0;

  let len = height.length;
  let start = 0;
  let i = 0;
  let result = 0;

  for (; start < len; start++) {
    for (i = start + 1; i < len; i++) {
      result = Math.max(
        Math.min(height[start], height[i]) * (i - start),
        result
      );
    }
  }
  return result;
}

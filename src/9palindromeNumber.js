/**
 * @param {string} str
 * @return {number}
 */
// export default function (x) {
//   if (x < 0) return false;

//   const reverse = x.toString().split("").reverse().join("");
//   return x == reverse;
// }

export default function (x) {
  if (x < 0) return false;
  x = x.toString();
  let len = x.length;
  let start = 0;
  let end = len - 1;

  while (true) {
    if (end - start == 1) {
      return x[start] === x[end];
    }

    if (end === start) return true;

    if (x[start] !== x[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

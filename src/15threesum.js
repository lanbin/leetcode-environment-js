export default function (nums) {
  if (nums.length < 3) return [];

  const threeNumsArr = [];
  nums = nums.sort((a, b) => a - b);
  let indexArr = [];
  let len = nums.length;

  for (let start = 0; start < len; start++) {
    for (let i = start + 1; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const resStr = "" + nums[start] + nums[i] + nums[j];

        if (
          nums[start] + nums[i] + nums[j] === 0 &&
          !indexArr.includes(resStr)
        ) {
          indexArr.push(resStr);
          threeNumsArr.push([nums[start], nums[i], nums[j]]);
        }
      }
    }
  }
  return threeNumsArr;
}

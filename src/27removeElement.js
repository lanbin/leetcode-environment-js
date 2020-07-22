/*
 * @Author: lanbin
 * @Date:   2018-12-19 11:50:42
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-19 12:09:26
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    if (nums.length === 1) {
        return nums[0] === val ? [] : nums
    }

    var res = 0
    var j = 0
    for (var index = 0; index < nums.length; index++, j++) {
        if (j === nums.length) break;
        if (nums[index] === val) {
            res++
            while (j < nums.length) {
                if (nums[j] !== val) {
                    let tmp = nums[index]
                    nums[index] = nums[j]
                    nums[j] = tmp
                    break;
                }
                j++
            }
        }
    }
    return nums.length - res;
};

export default removeElement
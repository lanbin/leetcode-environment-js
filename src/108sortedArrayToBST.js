var sortedArrayToBST = function(nums) {
    return g(nums, 0, nums.length - 1)
};

// 二分
function g(nums, start, end) {
    if (start > end) return null

    var mid = start + parseInt((end - start) / 2)
    var mvid = nums[mid]

    var node = new TreeNode(mvid)
    node.left = g(nums, start, mid - 1)
    node.right = g(nums, mid + 1, end)

    return node
}

export default sortedArrayToBST
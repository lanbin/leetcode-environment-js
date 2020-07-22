var merge = function(nums1, m, nums2, n) {
    var max = m + n
    for (var index = m; index < max; index++) {
        nums1[index] = nums2[index - m]
    }

    for (var i = 0; i < max; i++) {
        for (var j = 0; j < i; j++) {
            if (nums1[i] < nums1[j]) {
                let tmp = nums1[i]
                nums1[i] = nums1[j]
                nums1[j] = tmp
            }
        }
    }
    return nums1
}

export default merge
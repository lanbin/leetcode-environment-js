var ways = {
    "1": 1,
    "2": 2,
    "3": 3
}

var climbStairs = function(n) {

    if (n <= 3) return ways[n]
    if (!ways[n]) {
        ways[n] = climbStairs(n - 1) + climbStairs(n - 2)
    }
    return ways[n]
}

export default climbStairs
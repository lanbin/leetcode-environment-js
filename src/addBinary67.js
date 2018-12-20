var addBinary = function(a, b) {
    var maxLen = Math.max(a.length, b.length)
    var result = []
    var carry = false

    a = a.split('').reverse()
    b = b.split('').reverse()

    for (var index = 0; index < maxLen; index++) {
        let res = ~~a[index] + ~~b[index] + (carry ? 1 : 0)
        if (res <= 1) {
            carry = false
            result.push(res)
        } else if (res > 1) {
            carry = true
            result.push(res % 2)
        }
    }

    if (carry) {
        result.push(1)
    }
    return result.reverse().join('')
}

export default addBinary
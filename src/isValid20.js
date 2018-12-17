/*
 * @Author: lanbin
 * @Date:   2018-12-17 16:54:53
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-17 19:45:18
 */

var isValid = function(s) {
    if (s === '') return true
    if (s.length < 2) return false

    let stack = []
    let rightBracket = /\)|\]|\}/
    let pair = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    while (s.length > 0) {
        let letter = s[0]
        if (letter.match(rightBracket)) {
            if (stack.length > 0 &&
                pair[letter] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(letter)
        }
        s = s.substr(1, s.length)
    }
    return stack.length === 0
};

export default isValid
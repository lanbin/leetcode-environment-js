/*
 * @Author: lanbin
 * @Date:   2018-12-18 11:03:16
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-26 12:22:02
 */

class ListNode {
    constructor(val = '', next = null) {
        this.val = val
        this.next = next
    }
}

const List = {

    // 这里目前实现的都是单向不循环的链表

    /**
     * [from 将数组转成链表]
     * @param  {Array} data [数据源]
     * @return {ListNode}      [链表的头]
     */
    from(data) {
        let current = null
        let next = null

        if (Array.isArray(data)) {
            for (var index = data.length - 1; index >= 0; index--) {
                current = new ListNode(data[index], current)
            }
        }
        return current
    },

    /**
     * [display 显示链表的顺序，显示值]
     * @param  {ListNode} node [链表的某个元素]
     */
    display(node) {
        let val = []
        while (node) {
            val.push(node.val)
            node = node.next
        }
        console.log(val.join('->'))
    },

    /**
     * [compare 对比两个链表]
     * @param  {List} l1 [链表]
     * @param  {List} l2 [链表]
     * @return {Boolean}    [是否相等]
     */
    compareValue(l1, l2) {
        while (l1) {
            // 如果l2没有了 则false
            if (!l2) return false
            // 如果值不一样 则false
            if (l1.val !== l2.val) return false
            l1 = l1.next
            l2 = l2.next
        }

        // l1匹配结束之后 l2也应该结束
        return !l1 && !l2
    }

}

export default List
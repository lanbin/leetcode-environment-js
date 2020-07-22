/*
 * @Author: lanbin
 * @Date:   2018-12-17 19:48:15
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-18 20:41:37
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * 链表只要返回第一个头，后面按照一个接一个的拼接好就行了
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let res = null

    if (l1.val < l2.val) {
        res = l1
        res.next = mergeTwoLists(l1.next, l2)
    } else {
        res = l2
        res.next = mergeTwoLists(l1, l2.next)
    }
    return res
};

export default mergeTwoLists
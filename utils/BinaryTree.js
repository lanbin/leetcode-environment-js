/*
 * @Author: lanbin
 * @Date:   2018-12-26 12:22:31
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-26 14:48:39
 */

class TreeNode {
    constructor(val = '', left = null, right = null) {
        if (val === null) return null
        this.val = val
        this.left = left
        this.right = right
    }
}

const BinaryTree = {
    from(data = []) {
        if (!Array.isArray(data) || data.length === 0) return null

        var level = 0
        var currentLevelNode = []
        var rootNode = null

        while (data.length > 0) {
            if (level === 0) {
                var tmpData = data.splice(0, 1)
                rootNode = new TreeNode(tmpData[0])
                currentLevelNode.push(rootNode)
                level++
                continue;
            }

            var len = currentLevelNode.length
            var index = 0
            var nextLevelNodes = []

            while (index < len) {
                var t = data.splice(0, 1)

                if (t.length === 0) return rootNode
                if (!currentLevelNode[index].left) {
                    currentLevelNode[index].left = new TreeNode(t[0])
                    nextLevelNodes.push(currentLevelNode[index].left)
                    continue;
                } else {
                    currentLevelNode[index].right = new TreeNode(t[0])
                    nextLevelNodes.push(currentLevelNode[index].right)
                    index++
                }
            }
            level++
            currentLevelNode = nextLevelNodes
        }
        return rootNode
    },

    traversalBottomUp(root) {
        if (!root) return []

        var res = [
            [root.val]
        ]
        var level = 0
        var currentLevelNode = [root]

        while (currentLevelNode.length > 0) {
            var index = 0
            var len = currentLevelNode.length
            var levelVal = []
            var nextLevelNodes = []
            while (index < len) {
                if (currentLevelNode[index].left && currentLevelNode[index].left.val !== null) {
                    levelVal.push(currentLevelNode[index].left.val)
                    nextLevelNodes.push(currentLevelNode[index].left)
                }
                if (currentLevelNode[index].right && currentLevelNode[index].right.val !== null) {
                    levelVal.push(currentLevelNode[index].right.val)
                    nextLevelNodes.push(currentLevelNode[index].right)
                }
                index++
            }
            currentLevelNode = nextLevelNodes
            if (levelVal.length > 0) {
                res.unshift(levelVal)
            }
        }
        return res
    }
}

export default BinaryTree
import {
    expect
} from 'chai'

import BinaryTree from '../utils/BinaryTree.js'
import LevelOrderBottom from '../src/levelOrderBottom107.js'

var arr = [3, 9, 20, null, null, 15, 7]
var arrResult = [
    [15, 7],
    [9, 20],
    [3]
]

describe('LevelOrderBottom', _ => {
    it(`Binary bottom-up level order traversal`, done => {
        expect(LevelOrderBottom(BinaryTree.from(arr)))
            .to.be.deep.equal(arrResult)
        done()
    })
})
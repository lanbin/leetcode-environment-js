import {
    expect
} from 'chai'

import merge from '../src/merge88.js'

describe('merge', _ => {
    it(`[1,2,3,0,0,0], 3 , [2,5,6], 3`, done => {
        expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
            .to.be.deep.equal([1, 2, 2, 3, 5, 6])
        done()
    })
})
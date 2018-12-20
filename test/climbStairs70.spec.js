import {
    expect
} from 'chai'

import climbStairs from '../src/climbStairs70.js'

describe('climbStairs', _ => {

    it(`n = 2`, done => {
        expect(climbStairs(2)).to.be.equal(2)
        done()
    })

    it(`n = 3`, done => {
        expect(climbStairs(3)).to.be.equal(3)
        done()
    })

    it(`n = 5`, done => {
        expect(climbStairs(5)).to.be.equal(8)
        done()
    })

    it(`n = 10`, done => {
        expect(climbStairs(10)).to.be.equal(89)
        done()
    })
})
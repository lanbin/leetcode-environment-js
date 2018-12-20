import {
    expect
} from 'chai'

import addBinary from '../src/addBinary67.js'

describe('addBinary', _ => {
    it(`11 + 1 = 100`, done => {
        expect(addBinary('11', '1')).to.be.equal('100')
        done()
    })

    it(`1010 + 1011 = 10101`, done => {
        expect(addBinary('1010', '1011')).to.be.equal('10101')
        done()
    })
})
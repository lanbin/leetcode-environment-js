/*
 * @Author: lanbin
 * @Date:   2018-12-17 18:39:46
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-17 19:54:19
 */

import {
    expect
} from 'chai'

import isValid from '../src/isValid20.js'

const INPUTS = [{
    input: '()',
    result: true
}, {
    input: '()[]{}',
    result: true
}, {
    input: '([)',
    result: false
}, {
    input: '[)',
    result: false
}, {
    input: '([)]',
    result: false
}, {
    input: '([])',
    result: true
}, {
    input: '[',
    result: false
}, {
    input: '',
    result: true
}, {
    input: '((',
    result: false
}]

describe('isValid', _ => {

    INPUTS.map(input => {

        it(`Test "${input.input}"`, done => {
            expect(isValid(input.input)).to.equal(input.result)
            done()
        })
    })

})
/*
 * @Author: lanbin
 * @Date:   2018-12-20 17:57:32
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-20 19:11:08
 */

import prompts from 'prompts'
import generator from './generator'

async function init() {
    let question = [{
        type: 'number',
        name: 'quiznum',
        message: 'The Number of The Quiz'
    }, {
        type: 'text',
        name: 'funcname',
        message: 'The Name of The Function'
    }]

    const {
        quiznum,
        funcname
    } = await prompts(question)

    if (quiznum && funcname) {
        let componentName = `${funcname}${quiznum}`

        generator({
            quiznum,
            funcname
        })
    }
}

init()
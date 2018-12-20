/*
 * @Author: lanbin
 * @Date:   2018-12-20 17:57:32
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-20 18:51:53
 */

import prompts from 'prompts'
import generator from './generator'

async function init() {
    let question = [{
        type: 'number',
        name: 'quiznum',
        message: '题目的序号'
    }, {
        type: 'text',
        name: 'funcname',
        message: '题目的方法名称'
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
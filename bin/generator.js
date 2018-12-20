/*
 * @Author: lanbin
 * @Date:   2018-12-20 18:46:18
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-20 19:07:35
 */

import path from 'path'
import fs from 'fs-extra'

const testFolder = path.resolve('./test/')
const testTemplate = path.resolve('./template/test.spec.tjs')
const srcFolder = path.resolve('./src/')
const srcTemplate = path.resolve('./template/src.tjs')

function createFile(data, type = 'src') {
    const {
        funcname,
        quiznum
    } = data
    var template = type === 'src' ? srcTemplate : testTemplate
    var folderPath = type === 'src' ? srcFolder : testFolder
    var distFilePath = path.resolve(folderPath, replaceFileName(`${funcname}${quiznum}`, template))

    fs.readFile(template, 'utf-8')
        .then(content => {
            return content.replace(/{funcname}/g, funcname)
                .replace(/{quiznum}/g, quiznum)
        })
        .then(resString => {
            return fs.outputFile(distFilePath, resString)

        })
        .then(_ => {
            console.log(`${distFilePath} 创建完成.`)
        })
        .catch(_ => {
            console.error(_)
        })
}

function replaceFileName(name, filePath) {
    var sourceFileName = path.basename(filePath)
    sourceFileName = sourceFileName.split('.')
    sourceFileName[0] = name
    sourceFileName[sourceFileName.length - 1] = sourceFileName[sourceFileName.length - 1].replace('tjs', 'js')
    return sourceFileName.join('.')
}

/**
 * [generator description]
 * @param  {Object} data [{quiznum, funcname}]
 */
function generator(data = {}) {
    createFile(data, 'src')
    createFile(data, 'test')
}

export default generator
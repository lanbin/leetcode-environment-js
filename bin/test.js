/*
 * @Author: lanbin
 * @Date:   2018-12-20 19:32:37
 * @Last Modified by:   lanbin
 * @Last Modified time: 2018-12-20 20:15:33
 */

import {
    spawn
} from 'child_process'
import path from 'path'
import fs from 'fs-extra'
import selectShell from 'select-shell'

// config and init select-shell
var list = selectShell({
    multiSelect: false,
    pointerColor: 'yellow',
    checkedColor: 'blue'
})

// readdir and construct list's optinons
fs.readdir(path.resolve('./test'))
    .then(files => {
        files.forEach(file => {
            list.option(file)
        })
        list.list();
    })
    .catch(_ => {
        console.log(_)
    })

list.on('select', options => {
    if (options[0]) {
        let testFilePath = path.resolve('./test', options[0].value)
        spawn('npm test', [testFilePath], {
            shell: true,
            stdio: 'inherit'
        })
    } else {
        console.log('Select error.')
    }
    process.exit(0);
});

list.on('cancel', function(options) {
    console.log('Cancel list, ' + options.length + ' options selected');
    process.exit(0);
});
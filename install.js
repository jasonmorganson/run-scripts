const path = require('path')
const read = require('read-pkg')
const write = require('write-pkg')
const cwd = process.env.INIT_CWD || process.cwd()
const pkg = path.join(cwd, 'package.json')

const scripts = {
    test: 'run test'
}

read(pkg).then(json => {
    json.scripts = scripts
    write(pkg, json)
})

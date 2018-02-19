const fs = require('fs')
const path = require('path')
const read = require('read-pkg')
const write = require('write-pkg')
const log = console.log
const cwd = process.env.INIT_CWD || process.cwd()
const pkg = path.join(cwd, 'package.json')

const scripts = {
    test: 'run test'
}

log('Installing run-scripts')

read(pkg).then(json => {

    // Write runfile
    const runfile = `module.exports = {\n    ...require('${json.name}')\n}`
    fs.writeFileSync(path.join(cwd, 'runfile.js'), runfile)

    // Write tsconfig
    const tsconfig = `{\n    "extends": "./node_modules/${json.name}/tsconfig.json"\n}`
    fs.writeFileSync(path.join(cwd, 'tsconfig.json'), tsconfig)

    // Write package.json scripts
    json.scripts = scripts
    log('Scripts: ' + Object.keys(scripts).join(', '))
    write(pkg, json).then(() => {
        log('Installed run-scripts!')
    })
})


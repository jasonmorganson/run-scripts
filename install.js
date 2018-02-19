const read = require('read-pkg')
const write = require('write-pkg')

const scripts = {
    test: 'run test'
}

read('package.json').then(pkg => {
    pkg.scripts = scripts
    write('package.json', pkg)
})

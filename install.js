const read = require('read-pkg')
const write = require('write-pkg')

const scripts = {
    test: 'run test'
}

read().then(pkg => {
    pkg.scripts = scripts
    write(pkg)
})

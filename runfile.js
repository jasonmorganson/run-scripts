const {run: runjs, options} = require('runjs')
const dir = __dirname
const log = console.log
const cwd = process.cwd()
const PATH = process.env.PATH
const env = {PATH: `${__dirname}/node_modules/.bin:${PATH}`}
const run = command => runjs(command, {env})
const prefix = name => name.length === 1 ? '-' : '--'
const option = on => name => on[name] === true ? `${prefix(name)}${name}` : ''

function clean() {
    run('rimraf dist')
}

function lint() {
    const opt = option(options(this))
    run(`tslint --project ${cwd}/tsconfig.json --config ${dir}/tslint.json --format verbose ${opt('fix')}`)
}

function build() {
    const opt = option(options(this))
    clean()
    run(`tsc --rootDir ${cwd} --outDir ${cwd}/dist ${opt('w')} ${opt('watch')}`)
}

function unit() {
    const opt = option(options(this))
    const nyc = `nyc --check-coverage --per-file --lines 100 --branches 100 --functions 100 --statements 100`
    build.call(this)
    run(`${nyc} ava ${opt('w')} ${opt('watch')}`)
}

function test() {
    const opt = option(options(this))
    lint.call(this)
    unit.call(this)
}

function docs() {
    run('typedoc src types --out docs')
}

function prepublish() {
    test.call(this)
    run('pkg-ok')
}

module.exports = {
    docs,
    lint,
    test,
    clean,
    build,
    prepublish,
}

const {run: runjs} = require('runjs')
const dir = __dirname
const cwd = process.cwd()
const PATH = process.env.PATH
const env = {PATH: `${__dirname}/node_modules/.bin:${PATH}`}
const run = command => runjs(command, {env})

function clean() {
    run('rimraf dist')
}

function lint() {
    run(`tslint --project ${cwd}/tsconfig.json --config ${dir}/tslint.json --format verbose`)
}

function build() {
    clean()
    run(`tsc --rootDir ${cwd} --outDir ${cwd}/dist`)
}

function test() {
    lint()
    build()
    run(`nyc ava`)
}

function docs() {
    run('typedoc src types --out docs')
}

module.exports = {
    docs,
    lint,
    test,
    clean,
    build,
}

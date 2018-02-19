Run Scripts
===========

A collection of [runjs](https://github.com/pawelgalazka/runjs) scripts.


Also see
https://hackernoon.com/simple-build-tools-npm-scripts-vs-makefile-vs-runjs-31e578278162

# Usage

In a project:

1. Install
> `npm i --save-dev runjs run-scripts`

2. Edit npm scripts to use run scripts
> ```json
> "scripts": {
    "test": "run test"
> }
> ```

3. Run with either npm or run scripts
Like this:
> `run test`
Or this works like normal:
> `npm test`


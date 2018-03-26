const sonarts = require('./tslint-sonarts');
const consistentCodeStyle = require('./tslint-consistent-codestyle');
const immutable = require('./tslint-immutable');

const rules = Object.assign(
    {},
    immutable,
    sonarts,
    consistentCodeStyle
);

const extensions = {
    "extends": [
        "tslint:all",
        "tslint-immutable",
        "tslint-sonarts", 
        "tslint-consistent-codestyle"
    ]
};

const tsLintJson = Object.assign(
    {},
    extensions,
    {
        rules
    }
);


module.exports = tsLintJson;
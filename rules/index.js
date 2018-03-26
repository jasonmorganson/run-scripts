const sonarts = require('./tslint-sonarts');
const consistentCodeStyle = require('./tslint-consistent-codestyle');

const rules = Object.assign(
    {},
    sonarts,
    consistentCodeStyle
);

const extensions = {
    "extends": [
        "tslint:all",
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
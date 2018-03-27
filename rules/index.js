const sonarts = require('./tslint-sonarts');
const consistentCodeStyle = require('./tslint-consistent-codestyle');
const immutable = require('./tslint-immutable');
const microsoft = require('./tslint-microsoft-contrib');

const tsLintJson = Object.assign(
    {},
    {
        "extends": [
            "tslint:recommended",
            "tslint-immutable",
            "tslint-sonarts", 
            "tslint-consistent-codestyle",
            "tslint-microsoft-contrib"
        ]
    },
    {
        "rules": Object.assign(
            {
                "semicolon": [true, "never"],
                "quotemark": [true, "single"]
            },
            immutable,
            sonarts,
            consistentCodeStyle,
            microsoft
        )
    }
);

module.exports = tsLintJson;
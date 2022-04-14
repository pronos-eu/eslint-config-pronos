const coreStyle = require('../style').rules

const {tsRule} = require('../../utils/ruleUtils')

module.exports = {
    rules: {
        // Require trailing comma in multiline objects, arrays and functions
        // https://typescript-eslint.io/rules/comma-dangle/
        ...tsRule(coreStyle, 'comma-dangle'),

        // Require consistent spacing withing object literals and object types.
        // https://typescript-eslint.io/rules/object-curly-spacing
        ...tsRule(coreStyle, 'object-curly-spacing'),

        // Require spaces around operators
        // https://typescript-eslint.io/rules/space-infix-ops/
        ...tsRule(coreStyle, 'space-infix-ops'),
    },
}

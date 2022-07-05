module.exports = {
    rules: {
        // Disallow unused variables
        // https://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': ['error', {
            // Allow directly specifying unused variables and/or arguments using `_` prefix
            // "varsIgnorePattern": "^_",
            // "argsIgnorePattern": "^_",

            // TODO: Consider relaxing the config to allow for following exceptions
            // Allow unused rest variables, e.g `const [a, ...rest] = list`
            // "ignoreRestSiblings": true,
        }],

        // Disallow usage of console calls
        // https://eslint.org/docs/latest/rules/no-console
        'no-console': 'error',

        // Disallow usage of undefined variables
        // https://eslint.org/docs/latest/rules/no-undef
        'no-undef': 'error',
    },
}

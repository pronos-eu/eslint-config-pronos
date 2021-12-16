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

        'no-console': 'error',
    },
}

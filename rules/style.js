// FIXME: Review basic style rules

module.exports = {
    rules: {
        'comma-dangle': ['warn', 'always-multiline'],
        'no-unused-vars': 'error',
        'no-unneeded-ternary': 'warn',
        'no-console': 'error',
        'no-multiple-empty-lines': ['warn', {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        }], 
        'no-unexpected-multiline': 'warn',
        'linebreak-style': 'off',
        indent: ['error', 4, {SwitchCase: 1}],
        semi: ['error', 'never'],
        'function-paren-newline': 'off',
        'operator-linebreak': ['error', 'after'],
        'space-before-function-paren': ['error', {
            anonymous: 'ignore', // TODO: always
            named: 'ignore', // TODO: always
            asyncArrow: 'always',
        }],
        'no-confusing-arrow': 'warn',
        'no-plusplus': 'off',
        'no-async-promise-executor': 'off',
        'no-use-before-define': 'off',
        'object-curly-spacing': ['warn', 'never'],
        'consistent-return': 'off',
        'prefer-const': 'warn',
        'max-len': ['warn', 160], // TODO: ["error", 160]
        'arrow-parens': ['warn', 'as-needed'],
        quotes: ['error', 'single', {allowTemplateLiterals: true, avoidEscape: true}],
        'no-mixed-operators': 'off',
        'no-underscore-dangle': 'off', // TODO: change to warn?,
        'space-unary-ops': ['warn', {words: true, nonwords: false}],
        'default-case': 'error',
        'keyword-spacing': 'warn',
        'object-shorthand': 'warn',
        'no-undef': 'off',
        'no-case-declarations': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-promise-reject-errors': 'warn',
        'id-length': ['warn', {min: 2, exceptions: ['_', 'i', 'j', 'k', 'n', 'm']}],
        'no-shadow': 'warn',
        'no-return-assign': 'off',
        'no-trailing-spaces': 'off',
        'no-param-reassign': 'warn', // TODO: remove this line as by default it's an error
        'no-restricted-syntax': 'warn', // TODO: remove this line as by default it's an error
        'class-methods-use-this': 'warn', // TODO: remove this line as by default it's an error
    },
}

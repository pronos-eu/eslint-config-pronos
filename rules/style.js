// FIXME: Review basic style rules

module.exports = {
    rules: {
        // Require trailing comma in multiline objects, arrays and functions
        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', 'always-multiline'],

        // Ignore warnings regarding newlines before arrow shorthand body
        // Removed after discussion on #dev-convo
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': 'off',

        // Require consistent indentation
        // https://eslint.org/docs/rules/indent
        indent: ['error', 4, {SwitchCase: 1}],

        // Disallow usage of optional semicolons in favor of ASI
        // https://eslint.org/docs/rules/semi
        semi: ['error', 'never'],

        // Disallow multiple empty lines in code and padding at start and end of file
        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': ['warn', {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        }],

        // Require consistent spacing in object literals
        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': ['error', 'never'],

        // Enforce newline before return statement if it's not the only statement in a block
        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': ['error',
            {blankLine: 'always', prev: '*', next: 'return'},
        ],

        // Enforce consistent style of strings
        // https://eslint.org/docs/rules/quotes
        quotes: ['error', 'single', {allowTemplateLiterals: true, avoidEscape: true}],

        // Require spaces around operators
        // https://eslint.org/docs/rules/space-infix-ops
        'space-infix-ops': 'error',

        // TODO: Test section, check, document then move above
        'no-trailing-spaces': ['warn', {
            skipBlankLines: true,
        }],
        'no-unneeded-ternary': 'warn',
        'no-unexpected-multiline': 'warn',

        // TODO: Review following rules
        'linebreak-style': 'off',
        'function-paren-newline': 'off',
        'operator-linebreak': ['error', 'after'],
        'no-confusing-arrow': 'warn',
        'no-plusplus': 'off',
        'no-async-promise-executor': 'off',
        'no-use-before-define': 'off',
        'consistent-return': 'off',
        'prefer-const': 'warn',
        'arrow-parens': ['warn', 'as-needed'],
        'no-mixed-operators': 'off',
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
    },
}

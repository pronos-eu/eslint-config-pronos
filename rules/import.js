module.exports = {
    plugins: [
        'import',
    ],
    rules: {
        'import/extensions': 'off',
        'import/order': ['warn', {
            groups: [
                'builtin',
                'external',
                'internal',
            ],
        }],
        'import/namespace': 'warn',
        'import/no-named-as-default': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
    },
}

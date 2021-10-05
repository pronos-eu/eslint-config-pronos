module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:import/typescript',
    ],
    overrides: [{
        files: ['*.ts', '*.tsx'],
        extends: [
            'plugin:@typescript-eslint/recommended',
        ],
        rules: {},
    }],
}

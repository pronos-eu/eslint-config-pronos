module.exports = {
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:import/typescript',
    ],
    overrides: [{
        files: ['*.ts', '*.tsx'],
        extends: [
            'plugin:@typescript-eslint/recommended',
            './rules/typescript/style',
        ],
        rules: {},
    }],
}

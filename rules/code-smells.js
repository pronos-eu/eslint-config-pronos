module.exports = {
    rules: {
        'no-restricted-properties': ['error', {
            object: 'DiContainer',
            property: 'get',
            message: 'Please use getService.',
        }, {
            object: 'Parse',
            property: 'config',
            message: 'Please use getParseConfig.',
        }],
        'import/no-internal-modules': ['error', {
            forbid: ['../modules/*'],
        }],
    },
}

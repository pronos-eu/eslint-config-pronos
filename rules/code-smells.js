module.exports = {
    rules: {
        "no-restricted-properties": [2, {
            "object": "DiContainer",
            "property": "get",
            "message": "Please use getService."
        }, {
                "object": "Parse",
                "property": "config",
                "message": "Please use getParseConfig."
            }]
    }, "import/no-internal-modules": ["warn", {
        "forbid": ["**/modules/*"],
    }]
}

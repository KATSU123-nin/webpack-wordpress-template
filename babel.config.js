module.exports = api => {
    api.cache(true);

    return {
        "presets": [
            ["@babel/preset-env", {
                    targets: [
                        "defaults",
                        "not IE 11",
                        "maintained node versions"
                    ]
                }
            ]
        ]
    }
}

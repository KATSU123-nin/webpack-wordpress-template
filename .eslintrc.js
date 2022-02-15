module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: "eslint:recommended",
    parser: "@babel/eslint-parser",
    parserOptions: {
      sourceType: "module",
      allowImportExportEverywhere: false,
      babelOptions: {
          configFile: "./babel.config.js",
      },
    },
    root: true,
    globals: {
        "_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__": false
    },
    rules: {
        "no-unused-vars": "off"
    }
  };

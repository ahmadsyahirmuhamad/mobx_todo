module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "classes": true
        }
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "global-require": "off",
        "react-native/no-unused-styles": 2,
        "jsx-a11y/href-no-hash": "off",
        "no-use-before-define": 0,
        "no-extra-semi": 2,
        "class-methods-use-this": 0,
        "semi": 0
    }
};
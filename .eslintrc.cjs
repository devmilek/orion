/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier',
        'plugin:storybook/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: false,
                printWidth: 100,
                tabWidth: 4,
            },
        ],
    },
}

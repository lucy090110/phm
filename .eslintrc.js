module.exports = {
    // extends: ['@mlamp/eslint-config-mlt'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true
    },
    globals: {
        HULU: false
    },
    rules: {
        // 如果一个变量不会被重新赋值，则使用const声明
        'prefer-const': 'error',
        'no-invalid-this': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
    }
};

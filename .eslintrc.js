module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react",
    ],
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
    ],
    "rules": {
      "prettier/prettier": 'error',
      "react/jax-filename-extension": [
        'warn',
        {
          extensions: ['.jsx', '.js']
        }
      ],
      "import/prefer-default-export": "off",
    },
};

// eslint.config.js

const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,

  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",

      sourceType: "script",

      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        process: "readonly",

        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",

        setTimeout: "readonly",
        clearTimeout: "readonly",

        setInterval: "readonly",
        clearInterval: "readonly",

        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",

        console: "readonly",

        THREE: "readonly",

        gsap: "readonly",
        ScrollTrigger: "readonly",

        fetch: "readonly",
        URL: "readonly",
        Image: "readonly",

        addEventListener: "readonly",
        removeEventListener: "readonly",
        window: "readonly",
      },
    },

    rules: {
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "no-console": "off",

      eqeqeq: "error",

      curly: "error",

      semi: ["error", "always"],

      quotes: ["error", "double"],

      "no-var": "error",

      "prefer-const": "warn",

      "no-undef": "error",
    },
  },
];

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", "tab"], // 强制使用一致的缩进
    "linebreak-style": ["error", "unix"], // 强制使用一致的换行风格
    quotes: ["error", "double"], // 尽可能使用双引号
    semi: ["error", "always"], // 要求在语句末尾使用分号
    "key-spacing": [
      0,
      {
        beforeColon: false,
        afterColon: true
      }
    ], // 对象字面量冒号的前后空格
    "quote-props": ["error", "always"], //对象字面量中的属性名是否强制双引号
    "no-magic-numbers": [
      "error",
      {
        ignoreArrayIndexes: true,
        ignore: [1, -1, 0]
      }
    ],
    "guard-for-in": 0, //for in循环要用if语句过滤
    "operator-linebreak": ["error", "after"] //换行时运算符在行尾还是行首
  }
};

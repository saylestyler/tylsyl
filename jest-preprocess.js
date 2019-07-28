const babelOptions = {
  presets: ['babel-preset-gatsby']
};

// make jest handle mocking static file imports (dummy modules (assets here instead of code))
module.exports = require('babel-jest').createTransformer(babelOptions);

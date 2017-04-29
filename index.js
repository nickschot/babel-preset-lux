const IS_NODE_SEVEN = process.version.charAt(1) === '7';
const HAS_HARMONY_FLAG = process.execArgv.includes('--harmony');
const HAS_ASYNC_AWAIT = IS_NODE_SEVEN
    && (parseInt(process.version.charAt(3), 10) >= 6 || HAS_HARMONY_FLAG);

const presets = [];
const plugins = [
  require('babel-plugin-external-helpers'),
  require('babel-plugin-transform-class-properties'),
  require('babel-plugin-transform-flow-strip-types'),
  [require('babel-plugin-transform-object-rest-spread'), {
    useBuiltIns: true
  }]
];

if (!IS_NODE_SEVEN) {
  plugins.push(
    require('babel-plugin-transform-exponentiation-operator')
  );
}

if(!HAS_ASYNC_AWAIT){
    plugins.push(
        require('babel-plugin-transform-async-to-generator')
    );
}

module.exports = {
  presets,
  plugins
};

var loaderUtils = require('loader-utils');

module.exports = function (source, options) {
    // 处理source
    console.log('\r\ffirst-loader start');
    console.log('options', loaderUtils.getOptions(this) || {});
    return source;
}
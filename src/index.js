define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var XRegExp = require('xregexp/src/xregexp');

require('xregexp/src/addons/build')(XRegExp);
require('xregexp/src/addons/matchrecursive')(XRegExp);
require('xregexp/src/addons/unicode-base')(XRegExp);
require('xregexp/src/addons/unicode-blocks')(XRegExp);
require('xregexp/src/addons/unicode-categories')(XRegExp);
require('xregexp/src/addons/unicode-properties')(XRegExp);
require('xregexp/src/addons/unicode-scripts')(XRegExp);

module.exports = XRegExp;

return module.exports;});

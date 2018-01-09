'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _svgo = require('svgo');

var _svgo2 = _interopRequireDefault(_svgo);

var _pluginsRemoveClass = require('../plugins/removeClass');

var _pluginsRemoveClass2 = _interopRequireDefault(_pluginsRemoveClass);

var svgo = new _svgo2['default']({
  plugins: ['removeDoctype', 'removeXMLProcInst', 'removeComments', 'removeMetadata', 'removeEditorsNSData', 'cleanupAttrs', 'convertStyleToAttrs', 'cleanupIDs', 'removeRasterImages', 'removeUselessDefs', 'cleanupNumericValues', 'cleanupListOfValues', 'convertColors', 'removeUnknownsAndDefaults', 'removeNonInheritableGroupAttrs', 'removeUselessStrokeAndFill', 'removeViewBox', 'cleanupEnableBackground', 'removeHiddenElems', 'removeEmptyText', 'convertShapeToPath', 'moveElemsAttrsToGroup', 'moveGroupAttrsToElems', 'collapseGroups', 'convertPathData', 'convertTransform', 'removeEmptyAttrs', 'removeEmptyContainers', 'mergePaths', 'removeUnusedNS', 'transformsWithOnePath', 'sortAttrs', 'removeTitle', 'removeDesc', 'removeDimensions', 'addClassesToSVGElement', 'removeStyleElement', {
    removeAttrs: {
      attrs: 'class'
    }
  }]
});

exports['default'] = svgo;
module.exports = exports['default'];
'use strict';

var canUseDOM = require('./canUseDOM')

let style;

if (canUseDOM) {
  style = document.createElement('div').style;
} else {
  style = {};
}

module.exports = style;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideCountdown = exports.FlipCountdown = exports.BasicCountdown = undefined;

var _countdown = require('./components/countdown');

var _countdown2 = _interopRequireDefault(_countdown);

var _basicCountdown = require('./components/basic-countdown');

var _basicCountdown2 = _interopRequireDefault(_basicCountdown);

var _flipCountdown = require('./components/flip-countdown');

var _flipCountdown2 = _interopRequireDefault(_flipCountdown);

var _slideCountdown = require('./components/slide-countdown');

var _slideCountdown2 = _interopRequireDefault(_slideCountdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicCountdown = (0, _basicCountdown2.default)(_countdown2.default);
var FlipCountdown = (0, _flipCountdown2.default)(_countdown2.default);
var SlideCountdown = (0, _slideCountdown2.default)(_countdown2.default);

exports.BasicCountdown = BasicCountdown;
exports.FlipCountdown = FlipCountdown;
exports.SlideCountdown = SlideCountdown;
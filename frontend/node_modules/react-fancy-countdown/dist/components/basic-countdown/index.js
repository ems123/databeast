'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _datetimeUtil = require('../../datetime-util');

var _datetimeUtil2 = _interopRequireDefault(_datetimeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var basicCountdown = function basicCountdown(WrappedComponent) {
  var BasicCountdown = function (_React$Component) {
    _inherits(BasicCountdown, _React$Component);

    /**
      =====Format=====
      years: Y or y
      months: M
      weeks: W or w
      days: D or d
      hours: H or h
      minutes: m
      seconds: s
      Escape token characters within the template string using square brackets.
      ================
    */

    function BasicCountdown(props) {
      _classCallCheck(this, BasicCountdown);

      var _this = _possibleConstructorReturn(this, (BasicCountdown.__proto__ || Object.getPrototypeOf(BasicCountdown)).call(this, props));

      _this.state = {
        time: "",
        due: false
      };

      _this.updateTime = _this.updateTime.bind(_this);
      return _this;
    }

    _createClass(BasicCountdown, [{
      key: 'updateTime',
      value: function updateTime(seconds) {
        if (seconds) {
          if (this.props.format) {
            seconds = _datetimeUtil2.default.format(seconds, this.props.format);
          }
        } else {
          seconds = 'Invalid date!';
        }

        this.setState({
          time: seconds
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          WrappedComponent,
          _extends({}, this.props, {
            updateTime: this.updateTime }),
          _react2.default.createElement(
            'div',
            null,
            !this.state.due ? this.state.time : this.props.dueElement
          )
        );
      }
    }]);

    return BasicCountdown;
  }(_react2.default.Component);

  BasicCountdown.propTypes = {
    format: _propTypes2.default.string
  };

  return BasicCountdown;
};

exports.default = basicCountdown;
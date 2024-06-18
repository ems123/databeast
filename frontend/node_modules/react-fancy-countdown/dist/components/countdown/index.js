'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Countdown = function (_React$Component) {
  _inherits(Countdown, _React$Component);

  /**
    =====Props=====
    dueElement: The dom will replace original dom when the time is up.
    callback: Method will invoked when the time is up.
    ================
  */

  function Countdown(props) {
    _classCallCheck(this, Countdown);

    var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this, props));

    _this.state = {
      deadline: _datetimeUtil2.default.isValid(_this.props.deadline),
      due: false
    };

    _this.start = _this.start.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.stop = _this.stop.bind(_this);
    return _this;
  }

  _createClass(Countdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.update();
      this.start();

      /** pause timer when tab inactive. */
      document.addEventListener("visibilitychange", function () {
        switch (document.visibilityState) {
          case 'hidden':
            _this2.pause = true;
            break;
          case 'visible':
            _this2.pause = false;
            break;
        }
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      var _this3 = this;

      if (this.props.deadline != nextProps.deadline) {
        clearInterval(this.timer);
        this.setState({
          deadline: nextProps.deadline,
          due: false
        }, function () {
          _this3.update();
          _this3.start();
        });
      }
    }
  }, {
    key: 'start',
    value: function start() {
      var _this4 = this;

      this.timer = setInterval(function () {
        _this4.update();
      }, this.props.interval);
    }
  }, {
    key: 'update',
    value: function update() {
      if (!this.pause) {
        var secondsInterval = this.state.deadline ? _datetimeUtil2.default.getInterval(_datetimeUtil2.default.now(), this.state.deadline) : undefined;

        if (secondsInterval <= 0) {
          this.stop();
        } else {
          this.props.updateTime(secondsInterval);
        }
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var _this5 = this;

      this.setState({
        due: true
      }, function () {
        _this5.props.callback();
        clearInterval(_this5.timer);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className, id: this.props.id },
        this.state.due ? this.props.dueElement : this.props.children
      );
    }
  }]);

  return Countdown;
}(_react2.default.Component);

Countdown.propTypes = {
  deadline: _propTypes2.default.string.isRequired,
  updateTime: _propTypes2.default.func.isRequired,
  callback: _propTypes2.default.func.isRequired,
  interval: _propTypes2.default.number,
  dueElement: _propTypes2.default.element
};

Countdown.defaultProps = {
  dueElement: _react2.default.createElement(
    'div',
    null,
    ' Time is up. '
  ),
  callback: function callback() {
    console.log('Time is up.');
  },
  interval: 1000
};

exports.default = Countdown;
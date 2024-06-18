'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('twix');

require('moment-duration-format');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateTimeUtil = function () {
  function DateTimeUtil() {
    _classCallCheck(this, DateTimeUtil);
  }

  _createClass(DateTimeUtil, null, [{
    key: 'getSecondsDef',
    value: function getSecondsDef() {
      return {
        WEEK: 60 * 60 * 24 * 7,
        DAY: 60 * 60 * 24,
        HOUR: 60 * 60,
        MINUTE: 60
      };
    }
  }, {
    key: 'isValid',
    value: function isValid(dateTime) {
      var m = (0, _moment2.default)(dateTime);
      return m.isValid() ? m : false;
    }
  }, {
    key: 'now',
    value: function now() {
      return (0, _moment2.default)();
    }
  }, {
    key: 'toDate',
    value: function toDate(string) {
      return (0, _moment2.default)(string);
    }
  }, {
    key: 'format',
    value: function format(seconds, _format) {
      return _moment2.default.duration(seconds, "seconds").format(_format);
    }
  }, {
    key: 'getInterval',
    value: function getInterval(start, end) {
      if (DateTimeUtil.isValid(start) && DateTimeUtil.isValid(end)) {
        return (0, _moment2.default)(start).twix((0, _moment2.default)(end)).count("seconds");
      } else {
        return undefined;
      }
    }
  }, {
    key: 'getTimeObjs',
    value: function getTimeObjs(flatSeconds, daysOpt, weeksOpt) {
      var seconds = parseInt(flatSeconds % DateTimeUtil.getSecondsDef().MINUTE);
      var minutes = parseInt(flatSeconds % DateTimeUtil.getSecondsDef().HOUR / DateTimeUtil.getSecondsDef().MINUTE);
      var hours = parseInt(flatSeconds % DateTimeUtil.getSecondsDef().DAY / DateTimeUtil.getSecondsDef().HOUR);
      if (!daysOpt) {
        hours = parseInt(flatSeconds / DateTimeUtil.getSecondsDef().HOUR % 100);
      }

      var days = parseInt(flatSeconds % DateTimeUtil.getSecondsDef().WEEK / DateTimeUtil.getSecondsDef().DAY);
      var weeks = parseInt(flatSeconds / DateTimeUtil.getSecondsDef().WEEK);
      if (daysOpt) {
        if (!weeksOpt) {
          days = parseInt(flatSeconds / DateTimeUtil.getSecondsDef().DAY % 100);
        }
      }

      return {
        seconds: seconds, minutes: minutes, hours: hours, days: days, weeks: weeks
      };
    }
  }]);

  return DateTimeUtil;
}();

exports.default = DateTimeUtil;
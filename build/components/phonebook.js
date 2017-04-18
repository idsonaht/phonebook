'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneBook = function (_Component) {
  _inherits(PhoneBook, _Component);

  function PhoneBook() {
    _classCallCheck(this, PhoneBook);

    return _possibleConstructorReturn(this, (PhoneBook.__proto__ || Object.getPrototypeOf(PhoneBook)).apply(this, arguments));
  }

  _createClass(PhoneBook, [{
    key: 'deletePerson',
    value: function deletePerson(id) {
      this.props.onDelete(id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var persons = void 0;
      if (this.props.phonebook) {
        persons = this.props.phonebook.map(function (person) {
          return _react2.default.createElement(_person2.default, { onDelete: _this2.deletePerson.bind(_this2), key: person.firstName, person: person });
        });
      }
      return _react2.default.createElement(
        'div',
        { className: 'PhoneBook col-md-offset-2 col-md-6' },
        _react2.default.createElement(
          'h3',
          { className: 'margin-bottom-35' },
          'View Contacts'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'list-group' },
          persons
        )
      );
    }
  }]);

  return PhoneBook;
}(_react.Component);

/* Validation */


PhoneBook.propTypes = {
  phonebook: _react2.default.PropTypes.array,
  onDelete: _react2.default.PropTypes.func
};

exports.default = PhoneBook;
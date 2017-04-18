"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Person = function (_Component) {
  _inherits(Person, _Component);

  function Person() {
    _classCallCheck(this, Person);

    return _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).apply(this, arguments));
  }

  _createClass(Person, [{
    key: "deletePerson",
    value: function deletePerson(id) {
      this.props.onDelete(id);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "li",
        { className: "Person list-group-item margin-bottom-10" },
        _react2.default.createElement(
          "button",
          { type: "button", className: "btn btn-info", "data-toggle": "collapse", "data-target": this.props.person.firstName },
          this.props.person.firstName,
          " ",
          this.props.person.lastName,
          " - ",
          this.props.person.group
        ),
        _react2.default.createElement(
          "a",
          { href: "#", onClick: this.deletePerson.bind(this, this.props.person.firstName) },
          " ",
          _react2.default.createElement("span", { className: "glyphicon glyphicon-remove pull-right" })
        ),
        _react2.default.createElement(
          "div",
          { id: this.props.person.firstName, className: "collapse" },
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        )
      );
    }
  }]);

  return Person;
}(_react.Component);

/* Validation */


Person.propTypes = {
  person: _react2.default.PropTypes.object,
  onDelete: _react2.default.PropTypes.func
};

exports.default = Person;
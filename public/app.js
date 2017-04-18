'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _phonebook = require('./components/phonebook');

var _phonebook2 = _interopRequireDefault(_phonebook);

var _addPerson = require('./components/addPerson');

var _addPerson2 = _interopRequireDefault(_addPerson);

var _logo = require('./assets/logo.png');

var _logo2 = _interopRequireDefault(_logo);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    console.log(name);
    _this.state = {
      phonebook: []
    };
    return _this;
  }

  //Fetch from api


  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'getPhoneBook',
    value: function getPhoneBook() {
      this.setState({ phonebook: [{
          firstName: 'Thanos',
          lastName: 'Di',
          phone: '6978791291',
          address: 'Smirnis 140',
          city: 'Athens',
          country: 'Greece',
          group: 'Work'
        }, {
          firstName: 'Thanos2',
          lastName: 'Di',
          phone: '6978791291',
          address: 'Smirnis 140',
          city: 'Athens',
          country: 'Greece',
          group: 'Work'
        }, {
          firstName: 'Thanos3 ',
          lastName: 'Di',
          phone: '6978791291',
          address: 'Smirnis 140',
          city: 'Athens',
          country: 'Greece',
          group: 'Work'
        }] });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getPhoneBook();
    }
  }, {
    key: 'handleAddPerson',
    value: function handleAddPerson(person) {
      var phonebook = this.state.phonebook;
      phonebook.push(person);
      this.setState({ phonebook: phonebook });
    }
  }, {
    key: 'handleDeletePerson',
    value: function handleDeletePerson(id) {
      var phonebook = this.state.phonebook;
      var index = phonebook.findIndex(function (x) {
        return x.id === id;
      });
      phonebook.splice(index, 1);
      this.setState({ phonebook: phonebook });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App row' },
        _react2.default.createElement(
          'h2',
          null,
          'PhoneBook Application'
        ),
        _react2.default.createElement(
          'div',
          { className: 'App-header col-sm-12' },
          _react2.default.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' })
        ),
        _react2.default.createElement(_addPerson2.default, { addPerson: this.handleAddPerson.bind(this) }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_phonebook2.default, { phonebook: this.state.phonebook, onDelete: this.handleDeletePerson.bind(this) })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
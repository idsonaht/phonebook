'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPerson = function (_Component) {
  _inherits(AddPerson, _Component);

  function AddPerson() {
    _classCallCheck(this, AddPerson);

    var _this = _possibleConstructorReturn(this, (AddPerson.__proto__ || Object.getPrototypeOf(AddPerson)).call(this));

    _this.state = {
      newPerson: {}
    };
    return _this;
  }

  _createClass(AddPerson, [{
    key: 'handleSubmit',


    /* Submit Handler */
    value: function handleSubmit(e) {
      var formIsValid = true;
      /* Check if form has empty values */
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this.refs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _key = _step.value;

          if (this.refs[_key].value === '') {
            alert(_key + ' is required');
            formIsValid = false;
          }
        }

        /* Create newPerson object and add form data */
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (formIsValid) {
        var newPerson = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = Object.keys(this.refs)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            newPerson[key] = this.refs[key].value;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.setState({
          newPerson: newPerson
        }, function () {
          // console.log(this.state);
          this.props.addPerson(this.state.newPerson);
        });
      }
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var groupOptions = this.props.group.map(function (group) {
        return _react2.default.createElement(
          'option',
          { key: group, value: group },
          group
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'col-md-4' },
        _react2.default.createElement(
          'h3',
          null,
          'Add Person'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'form-group row' },
            _react2.default.createElement(
              'label',
              null,
              'First Name *'
            ),
            _react2.default.createElement('input', { type: 'text', ref: 'firstName', className: 'form-control', placeholder: 'Sherlock', required: true })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group row' },
            _react2.default.createElement(
              'label',
              null,
              'Last Name *'
            ),
            _react2.default.createElement('input', { type: 'text', ref: 'lastName', className: 'form-control', placeholder: 'Holmes', required: true })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group row' },
            _react2.default.createElement(
              'label',
              null,
              'Phone *'
            ),
            _react2.default.createElement('input', { type: 'text', ref: 'phone', className: 'form-control', placeholder: '+447712345678', required: true })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group row' },
            _react2.default.createElement(
              'label',
              null,
              'Address *'
            ),
            _react2.default.createElement('input', { type: 'text', ref: 'address', className: 'form-control', placeholder: '221B Baker Steet', required: true })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group row' },
            _react2.default.createElement(
              'label',
              null,
              'City *'
            ),
            _react2.default.createElement('input', { type: 'text', ref: 'city', className: 'form-control', placeholder: 'London', required: true })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group row' },
            _react2.default.createElement(
              'label',
              null,
              'Country *'
            ),
            _react2.default.createElement('input', { type: 'text', ref: 'country', className: 'form-control', placeholder: 'England', required: true })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group row' },
            _react2.default.createElement(
              'label',
              null,
              'Group *'
            ),
            _react2.default.createElement(
              'select',
              { ref: 'groups', className: 'form-control' },
              groupOptions
            )
          ),
          _react2.default.createElement('input', { type: 'submit', value: 'Submit', className: 'btn btn-default' })
        )
      );
    }
  }]);

  return AddPerson;
}(_react.Component);

/* Validation */


AddPerson.defaultProps = {
  group: ['Friends', 'Work', 'Family', 'Other']
};
AddPerson.propTypes = {
  group: _react2.default.PropTypes.array,
  addPerson: _react2.default.PropTypes.func
};

exports.default = AddPerson;
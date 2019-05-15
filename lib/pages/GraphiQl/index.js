"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _graphiQl = require("../../actions/graphiQl");

var _GraphiQl = _interopRequireDefault(require("../../components/GraphiQl"));

var _application = require("../../constants/application.properties");

var _CButton = _interopRequireDefault(require("../../components/Button/CButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GraphiQl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GraphiQl, _React$Component);

  _createClass(GraphiQl, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.graphiQl && props.graphiQl._id !== state._id) {
        var _props$graphiQl = props.graphiQl,
            _id = _props$graphiQl._id,
            name = _props$graphiQl.name,
            description = _props$graphiQl.description,
            queryString = _props$graphiQl.queryString;
        return {
          _id: _id,
          description: description,
          name: name,
          queryString: queryString
        };
      }

      return null;
    }
  }]);

  function GraphiQl(props) {
    var _this;

    _classCallCheck(this, GraphiQl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GraphiQl).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "parameters", {});

    _defineProperty(_assertThisInitialized(_this), "handleSaveOrUpdate", function () {
      var _this$state = _this.state,
          _id = _this$state._id,
          name = _this$state.name,
          description = _this$state.description;
      var data = {
        _id: _id,
        description: description,
        name: name,
        queryString: _this.parameters.query,
        type: 'graphiQL'
      };

      if (!_id) {
        delete data._id;
      }

      _this.props.createOrUpdateGraphiQl(data);
    });

    _defineProperty(_assertThisInitialized(_this), "onEditQuery", function (newQuery) {
      _this.parameters.query = newQuery;
    });

    _defineProperty(_assertThisInitialized(_this), "onEditVariables", function (newVariables) {
      _this.parameters.variables = newVariables;
    });

    _defineProperty(_assertThisInitialized(_this), "onEditOperationName", function (newOperationName) {
      _this.parameters.operationName = newOperationName;
    });

    _defineProperty(_assertThisInitialized(_this), "graphQLFetcher", function (graphQLParams) {
      return fetch("".concat(_application.AppProperties.BASE_URL, "/graphql"), {
        body: JSON.stringify(graphQLParams),
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post'
      }).then(function (response) {
        return response.text();
      }).then(function (responseBody) {
        try {
          return JSON.parse(responseBody);
        } catch (error) {
          return responseBody;
        }
      });
    });

    _this.state = {
      _id: '',
      description: '',
      name: '',
      queryError: false,
      queryString: ''
    };
    return _this;
  }

  _createClass(GraphiQl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var match = this.props.match;

      if (match && match.params.id) {
        this.props.fetchGraphiQlById(match.params.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var graphiQlLoading = this.props.graphiQlLoading;
      var _this$state2 = this.state,
          name = _this$state2.name,
          description = _this$state2.description,
          queryString = _this$state2.queryString,
          queryError = _this$state2.queryError;
      return React.createElement("div", {
        className: "shadow-container"
      }, React.createElement("div", null, React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        className: "control-label"
      }, "Name"), " ", React.createElement("span", {
        className: "error-text"
      }, "*"), React.createElement("input", {
        type: "text",
        className: "form-control",
        value: name,
        onChange: function onChange(evt) {
          _this2.setState({
            name: evt.target.value
          });
        },
        required: true
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        className: "control-label"
      }, "Description"), React.createElement("input", {
        type: "text",
        value: description,
        className: "form-control",
        onChange: function onChange(evt) {
          _this2.setState({
            description: evt.target.value
          });
        }
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        className: "control-label"
      }, "Query"), " ", React.createElement("span", {
        className: "error-text"
      }, "*"), !graphiQlLoading && React.createElement(_GraphiQl.default, {
        query: queryString,
        fetcher: this.graphQLFetcher,
        onEditQuery: this.onEditQuery,
        onEditVariables: this.onEditVariables,
        onEditOperationName: this.onEditOperationName
      }))), React.createElement("div", {
        className: "row d-flex justify-content-end"
      }, React.createElement(_CButton.default, {
        className: "btn btn-primary",
        disabled: name === '' || queryError,
        onClick: this.handleSaveOrUpdate,
        name: "submit"
      })));
    }
  }]);

  return GraphiQl;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    graphiQl: state.graphiQl.graphiQl,
    graphiQlLoading: state.graphiQl.loading
  };
};

var mapDispatchToProps = {
  createOrUpdateGraphiQl: _graphiQl.createOrUpdateGraphiQl,
  fetchGraphiQlById: _graphiQl.fetchGraphiQlById
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GraphiQl);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9HcmFwaGlRbC9pbmRleC50c3giXSwibmFtZXMiOlsiR3JhcGhpUWwiLCJwcm9wcyIsInN0YXRlIiwiZ3JhcGhpUWwiLCJfaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJxdWVyeVN0cmluZyIsImRhdGEiLCJwYXJhbWV0ZXJzIiwicXVlcnkiLCJ0eXBlIiwiY3JlYXRlT3JVcGRhdGVHcmFwaGlRbCIsIm5ld1F1ZXJ5IiwibmV3VmFyaWFibGVzIiwidmFyaWFibGVzIiwibmV3T3BlcmF0aW9uTmFtZSIsIm9wZXJhdGlvbk5hbWUiLCJncmFwaFFMUGFyYW1zIiwiZmV0Y2giLCJBcHBQcm9wZXJ0aWVzIiwiQkFTRV9VUkwiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJyZXNwb25zZUJvZHkiLCJwYXJzZSIsImVycm9yIiwicXVlcnlFcnJvciIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJmZXRjaEdyYXBoaVFsQnlJZCIsImdyYXBoaVFsTG9hZGluZyIsImV2dCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJncmFwaFFMRmV0Y2hlciIsIm9uRWRpdFF1ZXJ5Iiwib25FZGl0VmFyaWFibGVzIiwib25FZGl0T3BlcmF0aW9uTmFtZSIsImhhbmRsZVNhdmVPclVwZGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibG9hZGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdCTUEsUTs7Ozs7Ozs2Q0FDbUNDLEssRUFBdUJDLEssRUFBdUI7QUFDbkYsVUFBSUQsS0FBSyxDQUFDRSxRQUFOLElBQWtCRixLQUFLLENBQUNFLFFBQU4sQ0FBZUMsR0FB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QUFBLENBQXhCOztBQUtBLElBQU1DLGtCQUFrQixHQUFHO0FBQ3pCekMsRUFBQUEsc0JBQXNCLEVBQXRCQSxnQ0FEeUI7QUFFekIwQixFQUFBQSxpQkFBaUIsRUFBakJBO0FBRnlCLENBQTNCOztlQUtlLHlCQUNiYSxlQURhLEVBRWJFLGtCQUZhLEVBR2JyRCxRQUhhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVPclVwZGF0ZUdyYXBoaVFsLCBmZXRjaEdyYXBoaVFsQnlJZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ3JhcGhpUWwnO1xuaW1wb3J0IEN1c3RvbUdyYXBoaXFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR3JhcGhpUWwnO1xuaW1wb3J0IHsgQXBwUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hcHBsaWNhdGlvbi5wcm9wZXJ0aWVzJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzJztcbmltcG9ydCBDQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0NCdXR0b24nO1xuaW50ZXJmYWNlIElHcmFwaGlRbFByb3BzIHtcbiAgY3JlYXRlT3JVcGRhdGVHcmFwaGlRbDogKGRhdGE6IGFueSkgPT4gdm9pZDtcbiAgZmV0Y2hHcmFwaGlRbEJ5SWQ6IChpZDogYW55KSA9PiB2b2lkO1xuICBncmFwaGlRbDogYW55O1xuICBncmFwaGlRbExvYWRpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJR3JhcGhpUWxTdGF0ZSB7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIF9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHF1ZXJ5U3RyaW5nOiBzdHJpbmc7XG4gIHF1ZXJ5RXJyb3I6IGJvb2xlYW47XG59XG5cbmNsYXNzIEdyYXBoaVFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElHcmFwaGlRbFByb3BzICYgUm91dGVDb21wb25lbnRQcm9wczx7IGlkOiBzdHJpbmcgfT4sIElHcmFwaGlRbFN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBJR3JhcGhpUWxQcm9wcywgc3RhdGU6IElHcmFwaGlRbFN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmdyYXBoaVFsICYmIHByb3BzLmdyYXBoaVFsLl9pZCAhPT0gc3RhdGUuX2lkICkge1xuICAgICAgY29uc3QgeyBfaWQgLCBuYW1lLCBkZXNjcmlwdGlvbiwgcXVlcnlTdHJpbmcgfSA9IHByb3BzLmdyYXBoaVFsO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX2lkLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcXVlcnlTdHJpbmdcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHBhcmFtZXRlcnM6IGFueSA9IHt9O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSUdyYXBoaVFsUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHsgaWQ6IHN0cmluZyB9Pikge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgX2lkOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcXVlcnlFcnJvcjogZmFsc2UsXG4gICAgICBxdWVyeVN0cmluZzogJydcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5wcm9wcy5tYXRjaDtcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoR3JhcGhpUWxCeUlkKG1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNhdmVPclVwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IF9pZCwgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZGF0YSA9ICB7XG4gICAgICBfaWQsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWUsXG4gICAgICBxdWVyeVN0cmluZzogdGhpcy5wYXJhbWV0ZXJzLnF1ZXJ5LFxuICAgICAgdHlwZTogJ2dyYXBoaVFMJ1xuICAgIH07XG4gICAgaWYgKCFfaWQpIHtcbiAgICAgIGRlbGV0ZSBkYXRhLl9pZDtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5jcmVhdGVPclVwZGF0ZUdyYXBoaVFsKGRhdGEpO1xuXG4gIH1cblxuICBwdWJsaWMgb25FZGl0UXVlcnkgPSAobmV3UXVlcnk6IGFueSkgPT4ge1xuICAgIHRoaXMucGFyYW1ldGVycy5xdWVyeSA9IG5ld1F1ZXJ5O1xuICB9XG5cbiAgcHVibGljIG9uRWRpdFZhcmlhYmxlcyA9IChuZXdWYXJpYWJsZXM6IGFueSkgPT4ge1xuICAgIHRoaXMucGFyYW1ldGVycy52YXJpYWJsZXMgPSBuZXdWYXJpYWJsZXM7XG4gIH1cblxuICBwdWJsaWMgb25FZGl0T3BlcmF0aW9uTmFtZSA9IChuZXdPcGVyYXRpb25OYW1lOiBhbnkpID0+IHtcbiAgICB0aGlzLnBhcmFtZXRlcnMub3BlcmF0aW9uTmFtZSA9IG5ld09wZXJhdGlvbk5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ3JhcGhRTEZldGNoZXIgPSAoZ3JhcGhRTFBhcmFtczogYW55KSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGAke0FwcFByb3BlcnRpZXMuQkFTRV9VUkx9L2dyYXBocWxgLCB7XG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShncmFwaFFMUGFyYW1zKSxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdwb3N0J1xuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgIH0pLnRoZW4oKHJlc3BvbnNlQm9keSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzcG9uc2VCb2R5KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZUJvZHk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JhcGhpUWxMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIHF1ZXJ5U3RyaW5nLCBxdWVyeUVycm9yIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+TmFtZTwvbGFiZWw+IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0geyBldnQgPT4ge3RoaXMuc2V0U3RhdGUoeyBuYW1lOiBldnQudGFyZ2V0LnZhbHVlIH0pOyB9fVxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IGV2dCA9PiB7dGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldnQudGFyZ2V0LnZhbHVlIH0pOyB9fS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgezxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5RdWVyeTwvbGFiZWw+IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgeyFncmFwaGlRbExvYWRpbmcgJiYgPEN1c3RvbUdyYXBoaXFsXG4gICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeVN0cmluZ31cbiAgICAgICAgICAgICAgZmV0Y2hlcj17dGhpcy5ncmFwaFFMRmV0Y2hlcn1cbiAgICAgICAgICAgICAgb25FZGl0UXVlcnk9e3RoaXMub25FZGl0UXVlcnl9XG4gICAgICAgICAgICAgIG9uRWRpdFZhcmlhYmxlcz17dGhpcy5vbkVkaXRWYXJpYWJsZXN9XG4gICAgICAgICAgICAgIG9uRWRpdE9wZXJhdGlvbk5hbWU9e3RoaXMub25FZGl0T3BlcmF0aW9uTmFtZX1cbiAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICA8Q0J1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtuYW1lID09PSAnJyB8fCBxdWVyeUVycm9yfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlT3JVcGRhdGV9XG4gICAgICAgICAgICBuYW1lPVwic3VibWl0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElTdGF0ZSkgPT4gKHtcbiAgZ3JhcGhpUWw6IHN0YXRlLmdyYXBoaVFsLmdyYXBoaVFsLFxuICBncmFwaGlRbExvYWRpbmc6IHN0YXRlLmdyYXBoaVFsLmxvYWRpbmdcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGNyZWF0ZU9yVXBkYXRlR3JhcGhpUWwsXG4gIGZldGNoR3JhcGhpUWxCeUlkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShHcmFwaGlRbCk7XG4iXX0=
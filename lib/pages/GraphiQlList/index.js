"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _abilityContext = require("../../ability-context");

var _graphiQl = require("../../actions/graphiQl");

var _index = require("../../components/index");

var _Table = _interopRequireDefault(require("../../components/Table"));

var _Column = _interopRequireDefault(require("../../components/Table/Column"));

var _CButton = _interopRequireDefault(require("../../components/Button/CButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GraphiQlList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GraphiQlList, _React$Component);

  function GraphiQlList(props) {
    var _this;

    _classCallCheck(this, GraphiQlList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GraphiQlList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "columns", void 0);

    _defineProperty(_assertThisInitialized(_this), "createGraphiQl", function () {
      _this.props.history.push('/graphiQl');
    });

    _defineProperty(_assertThisInitialized(_this), "openGraphiQl", function (id) {
      _this.props.history.push("/graphiQl/".concat(id));
    });

    _defineProperty(_assertThisInitialized(_this), "fetchGraphiQlList", function (data) {
      _this.props.fetchGraphiQlList(data);
    });

    _this.columns = [new _Column.default().withKey('_id').withLabel('ID'), new _Column.default().withKey('name').withLabel('Name'), new _Column.default().withKey('action').withLabel('Actions').withCellFormatter(function (cell, row) {
      return React.createElement("div", null, React.createElement(_index.BaseIcon, {
        display: "inline",
        name: "Edit",
        onClick: function onClick() {
          _this.openGraphiQl(row._id);
        }
      }));
    })];
    return _this;
  }

  _createClass(GraphiQlList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = {
        currentPage: 1,
        limit: 10,
        sortField: 'id',
        sortOrder: 1
      };
      this.fetchGraphiQlList(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          loading = _this$props.loading,
          data = _this$props.data,
          total = _this$props.total,
          length = _this$props.length;
      return React.createElement("div", {
        className: "shadow-container"
      }, React.createElement(_abilityContext.Can, {
        I: "read",
        a: "admin"
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement(_CButton.default, {
        className: "btn btn-primary pull-right mb-2",
        onClick: function onClick() {
          return _this2.createGraphiQl();
        },
        name: "Create New Query"
      }))), React.createElement(_Table.default, {
        keyField: "_id",
        data: data || [],
        columns: this.columns,
        loading: loading || false,
        length: length || 10,
        total: total || 0,
        remote: true,
        onUpdate: function onUpdate(nextState) {
          var updatedData = {
            currentPage: nextState.currentPage,
            limit: nextState.length,
            sortField: nextState.sortField,
            sortOrder: nextState.sortOrder
          };

          _this2.fetchGraphiQlList(updatedData);
        }
      }));
    }
  }]);

  return GraphiQlList;
}(React.Component);

_defineProperty(GraphiQlList, "defaultProps", {
  length: 10
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.graphiQl.data,
    loading: state.graphiQl.loading,
    total: state.graphiQl.total
  };
};

var mapDispatchToProps = {
  fetchGraphiQlList: _graphiQl.fetchGraphiQlList
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GraphiQlList);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9HcmFwaGlRbExpc3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkdyYXBoaVFsTGlzdCIsInByb3BzIiwiaGlzdG9yeSIsInB1c2giLCJpZCIsImRhdGEiLCJmZXRjaEdyYXBoaVFsTGlzdCIsImNvbHVtbnMiLCJDb2x1bW4iLCJ3aXRoS2V5Iiwid2l0aExhYmVsIiwid2l0aENlbGxGb3JtYXR0ZXIiLCJjZWxsIiwicm93Iiwib3BlbkdyYXBoaVFsIiwiX2lkIiwiY3VycmVudFBhZ2UiLCJsaW1pdCIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsImxvYWRpbmciLCJ0b3RhbCIsImxlbmd0aCIsImNyZWF0ZUdyYXBoaVFsIiwibmV4dFN0YXRlIiwidXBkYXRlZERhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZ3JhcGhpUWwiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFVTUEsWTs7Ozs7QUFRSix3QkFBWUMsS0FBWixFQUF3RDtBQUFBOztBQUFBOztBQUN0RCxzRkFBTUEsS0FBTjs7QUFEc0Q7O0FBQUEscUVBZ0UvQixZQUFNO0FBQzdCLFlBQUtBLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsV0FBeEI7QUFDRCxLQWxFdUQ7O0FBQUEsbUVBb0VqQyxVQUFDQyxFQUFELEVBQWE7QUFDbEMsWUFBS0gsS0FBTCxDQUFXQyxPQUFYLENBQW1CQyxJQUFuQixxQkFBcUNDLEVBQXJDO0FBQ0QsS0F0RXVEOztBQUFBLHdFQXdFNUIsVUFBQ0MsSUFBRCxFQUFrQjtBQUM1QyxZQUFLSixLQUFMLENBQVdLLGlCQUFYLENBQTZCRCxJQUE3QjtBQUNELEtBMUV1RDs7QUFFdEQsVUFBS0UsT0FBTCxHQUFlLENBQ2IsSUFB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Q0FBQ0MsUUFBTixDQUFlVixPQUZrQjtBQUcxQ0MsSUFBQUEsS0FBSyxFQUFFUSxLQUFLLENBQUNDLFFBQU4sQ0FBZVQ7QUFIb0IsR0FBcEI7QUFBQSxDQUF4Qjs7QUFNQSxJQUFNVSxrQkFBa0IsR0FBRztBQUN6QnpCLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFEeUIsQ0FBM0I7O2VBSWUseUJBQ2JzQixlQURhLEVBRWJHLGtCQUZhLEVBR2IvQixZQUhhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBDYW4gfSBmcm9tICcuLi8uLi9hYmlsaXR5LWNvbnRleHQnO1xuaW1wb3J0IHsgZmV0Y2hHcmFwaGlRbExpc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dyYXBoaVFsJztcbmltcG9ydCB7IEJhc2VJY29uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgVGFibGUsIHsgSVRhYmxlVXBkYXRlUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZS9Db2x1bW4nO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMnO1xuaW1wb3J0IENCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQ0J1dHRvbic7XG5cbmludGVyZmFjZSBJR3JhcGhpUWxMaXN0IHtcbiAgZGF0YT86IGFueVtdO1xuICB0b3RhbD86IG51bWJlcjtcbiAgbGVuZ3RoPzogbnVtYmVyO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgZmV0Y2hHcmFwaGlRbExpc3Q/OiBhbnk7XG59XG5cbmNsYXNzIEdyYXBoaVFsTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgSUdyYXBoaVFsTGlzdCAmIFJvdXRlQ29tcG9uZW50UHJvcHMsXG4gIG9iamVjdFxuICA+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGxlbmd0aDogMTBcbiAgICB9O1xuICBwcml2YXRlIGNvbHVtbnM6IENvbHVtbltdO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSUdyYXBoaVFsTGlzdCAmIFJvdXRlQ29tcG9uZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgbmV3IENvbHVtbigpLndpdGhLZXkoJ19pZCcpLndpdGhMYWJlbCgnSUQnKSxcbiAgICAgIG5ldyBDb2x1bW4oKS53aXRoS2V5KCduYW1lJykud2l0aExhYmVsKCdOYW1lJyksXG4gICAgICBuZXcgQ29sdW1uKClcbiAgICAgICAgLndpdGhLZXkoJ2FjdGlvbicpXG4gICAgICAgIC53aXRoTGFiZWwoJ0FjdGlvbnMnKVxuICAgICAgICAud2l0aENlbGxGb3JtYXR0ZXIoKGNlbGw6IGFueSwgcm93OiBhbnkpID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJhc2VJY29uXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxuICAgICAgICAgICAgICBuYW1lPVwiRWRpdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5vcGVuR3JhcGhpUWwocm93Ll9pZCk7IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgIF07XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgbGltaXQ6IDEwLFxuICAgICAgc29ydEZpZWxkOiAnaWQnLFxuICAgICAgc29ydE9yZGVyOiAxXG4gICAgfTtcbiAgICB0aGlzLmZldGNoR3JhcGhpUWxMaXN0KGRhdGEpO1xuICB9XG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBkYXRhLCB0b3RhbCwgbGVuZ3RoIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgICAgPENhbiBJPVwicmVhZFwiIGE9XCJhZG1pblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPENCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHQgbWItMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3JlYXRlR3JhcGhpUWwoKX1cbiAgICAgICAgICAgICAgbmFtZT1cIkNyZWF0ZSBOZXcgUXVlcnlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYW4+XG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgIGtleUZpZWxkPVwiX2lkXCJcbiAgICAgICAgICBkYXRhPXtkYXRhIHx8IFtdfVxuICAgICAgICAgIGNvbHVtbnM9e3RoaXMuY29sdW1uc31cbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nIHx8IGZhbHNlfVxuICAgICAgICAgIGxlbmd0aD17bGVuZ3RoIHx8IDEwfVxuICAgICAgICAgIHRvdGFsPXt0b3RhbCB8fCAwfVxuICAgICAgICAgIHJlbW90ZT17dHJ1ZX1cbiAgICAgICAgICBvblVwZGF0ZT17KG5leHRTdGF0ZTogSVRhYmxlVXBkYXRlUHJvcHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0ge1xuICAgICAgICAgICAgICBjdXJyZW50UGFnZTogbmV4dFN0YXRlLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICBsaW1pdDogbmV4dFN0YXRlLmxlbmd0aCxcbiAgICAgICAgICAgICAgc29ydEZpZWxkOiBuZXh0U3RhdGUuc29ydEZpZWxkLFxuICAgICAgICAgICAgICBzb3J0T3JkZXI6IG5leHRTdGF0ZS5zb3J0T3JkZXJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmZldGNoR3JhcGhpUWxMaXN0KHVwZGF0ZWREYXRhKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlR3JhcGhpUWwgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9ncmFwaGlRbCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuR3JhcGhpUWwgPSAoaWQ6IGFueSkgPT4ge1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvZ3JhcGhpUWwvJHtpZH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hHcmFwaGlRbExpc3QgPSAoZGF0YTogb2JqZWN0KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEdyYXBoaVFsTGlzdChkYXRhKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElTdGF0ZSkgPT4gKHtcbiAgZGF0YTogc3RhdGUuZ3JhcGhpUWwuZGF0YSxcbiAgbG9hZGluZzogc3RhdGUuZ3JhcGhpUWwubG9hZGluZyxcbiAgdG90YWw6IHN0YXRlLmdyYXBoaVFsLnRvdGFsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBmZXRjaEdyYXBoaVFsTGlzdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoR3JhcGhpUWxMaXN0KTtcbiJdfQ==
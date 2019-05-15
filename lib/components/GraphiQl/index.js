"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphiql = _interopRequireDefault(require("graphiql"));

var React = _interopRequireWildcard(require("react"));

require("./index.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CustomGraphiql =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomGraphiql, _React$Component);

  function CustomGraphiql(props) {
    var _this;

    _classCallCheck(this, CustomGraphiql);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomGraphiql).call(this, props));
    _this.state = {
      // REQUIRED:
      // `fetcher` must be provided in order for GraphiQL to operate
      fetcher: _this.props.fetcher,
      // OPTIONAL PARAMETERS
      // GraphQL artifacts
      query: _this.props.query,
      variables: '',
      // tslint:disable-next-line:object-literal-sort-keys
      response: '',
      // GraphQL Schema
      // If `undefined` is provided, an introspection query is executed
      // using the fetcher.
      schema: undefined,
      // Useful to determine which operation to run
      // when there are multiple of them.
      operationName: null,
      storage: null,
      defaultQuery: null,
      // Custom Event Handlers
      onEditQuery: _this.props.onEditQuery,
      onEditVariables: _this.props.onEditVariables,
      onEditOperationName: _this.props.onEditOperationName,
      // GraphiQL automatically fills in leaf nodes when the query
      // does not provide them. Change this if your GraphQL Definitions
      // should behave differently than what's defined here:
      // (https://github.com/graphql/graphiql/blob/master/src/utility/fillLeafs.js#L75)
      getDefaultFieldNames: null
    };
    return _this;
  }

  _createClass(CustomGraphiql, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "graphiql"
      }, React.createElement(_graphiql.default, this.state, React.createElement(_graphiql.default.Logo, null, "iGraph Query")));
    }
  }]);

  return CustomGraphiql;
}(React.Component);

var _default = CustomGraphiql;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyYXBoaVFsL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJDdXN0b21HcmFwaGlxbCIsInByb3BzIiwic3RhdGUiLCJmZXRjaGVyIiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJyZXNwb25zZSIsInNjaGVtYSIsInVuZGVmaW5lZCIsIm9wZXJhdGlvbk5hbWUiLCJzdG9yYWdlIiwiZGVmYXVsdFF1ZXJ5Iiwib25FZGl0UXVlcnkiLCJvbkVkaXRWYXJpYWJsZXMiLCJvbkVkaXRPcGVyYXRpb25OYW1lIiwiZ2V0RGVmYXVsdEZpZWxkTmFtZXMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFVTUEsYzs7Ozs7QUFDSiwwQkFBWUMsS0FBWixFQUEyQjtBQUFBOztBQUFBOztBQUN6Qix3RkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYO0FBQ0E7QUFDQUMsTUFBQUEsT0FBTyxFQUFFLE1BQUtGLEtBQUwsQ0FBV0UsT0FIVDtBQUtYO0FBQ0E7QUFDQUMsTUFBQUEsS0FBSyxFQUFFLE1BQUtILEtBQUwsQ0FBV0csS0FQUDtBQVFYQyxNQUFBQSxTQUFTLEVBQUUsRUFSQTtBQVNYO0FBQ0FDLE1BQUFBLFFBQVEsRUFBRSxFQVZDO0FBWVg7QUFDQTtBQUNBO0FBQ0FDLE1BQUFBLE1BQU0sRUFBRUMsU0FmRztBQWlCWDtBQUNBO0FBQ0FDLE1BQUFBLGFBQWEsRUFBRSxJQW5CSjtBQW9CWEMsTUFBQUEsT0FBTyxFQUFFLElBcEJFO0FBcUJYQyxNQUFBQSxZQUFZLEVBQUUsSUFyQkg7QUF1Qlg7QUFDQUMsTUFBQUEsV0FBVyxFQUFFLE1BQUtYLEtBQUwsQ0FBV1csV0F4QmI7QUF5QlhDLE1BQUFBLGVBQWUsRUFBRSxNQUFLWixLQUFMLENBQVdZLGVBekJqQjtBQTBCWEMsTUFBQUEsbUJBQW1CLEVBQUUsTUFBS2IsS0FBTCxDQUFXYSxtQkExQnJCO0FBNEJYO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLE1BQUFBLG9CQUFvQixFQUFFO0FBaENYLEtBQWI7QUFGeUI7QUFvQzFCOzs7OzZCQUVlO0FBQ2QsYUFDRTtBQUFLLFFBQUEsRUFBRSxFQUFDO0FBQVIsU0FDRSxvQkFBQyxpQkFBRCxFQUFjLEtBQUtiLEtBQW5CLEVBQ0Usb0JBQUMsaUJBQUQsQ0FBVSxJQUFWLHVCQURGLENBREYsQ0FERjtBQVNEOzs7O0VBakQwQmMsS0FBSyxDQUFDQyxTOztlQW9EcEJqQixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyYXBoaVFMIGZyb20gJ2dyYXBoaXFsJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuUHJvcHM8Q3VzdG9tR3JhcGhpcWw+IHtcbiAgcXVlcnk6IHN0cmluZztcbiAgZmV0Y2hlcjogYW55O1xuICBvbkVkaXRRdWVyeTogKG5ld1F1ZXJ5OiBhbnkpID0+IHZvaWQ7XG4gIG9uRWRpdFZhcmlhYmxlczogKG5ld1ZhcmlhYmxlczogYW55KSA9PiB2b2lkO1xuICBvbkVkaXRPcGVyYXRpb25OYW1lOiAobmV3T3BlcmF0aW9uTmFtZTogYW55KSA9PiB2b2lkO1xufVxuXG5jbGFzcyBDdXN0b21HcmFwaGlxbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBSRVFVSVJFRDpcbiAgICAgIC8vIGBmZXRjaGVyYCBtdXN0IGJlIHByb3ZpZGVkIGluIG9yZGVyIGZvciBHcmFwaGlRTCB0byBvcGVyYXRlXG4gICAgICBmZXRjaGVyOiB0aGlzLnByb3BzLmZldGNoZXIsXG5cbiAgICAgIC8vIE9QVElPTkFMIFBBUkFNRVRFUlNcbiAgICAgIC8vIEdyYXBoUUwgYXJ0aWZhY3RzXG4gICAgICBxdWVyeTogdGhpcy5wcm9wcy5xdWVyeSxcbiAgICAgIHZhcmlhYmxlczogJycsXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICByZXNwb25zZTogJycsXG5cbiAgICAgIC8vIEdyYXBoUUwgU2NoZW1hXG4gICAgICAvLyBJZiBgdW5kZWZpbmVkYCBpcyBwcm92aWRlZCwgYW4gaW50cm9zcGVjdGlvbiBxdWVyeSBpcyBleGVjdXRlZFxuICAgICAgLy8gdXNpbmcgdGhlIGZldGNoZXIuXG4gICAgICBzY2hlbWE6IHVuZGVmaW5lZCxcblxuICAgICAgLy8gVXNlZnVsIHRvIGRldGVybWluZSB3aGljaCBvcGVyYXRpb24gdG8gcnVuXG4gICAgICAvLyB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBvZiB0aGVtLlxuICAgICAgb3BlcmF0aW9uTmFtZTogbnVsbCxcbiAgICAgIHN0b3JhZ2U6IG51bGwsXG4gICAgICBkZWZhdWx0UXVlcnk6IG51bGwsXG5cbiAgICAgIC8vIEN1c3RvbSBFdmVudCBIYW5kbGVyc1xuICAgICAgb25FZGl0UXVlcnk6IHRoaXMucHJvcHMub25FZGl0UXVlcnksXG4gICAgICBvbkVkaXRWYXJpYWJsZXM6IHRoaXMucHJvcHMub25FZGl0VmFyaWFibGVzLFxuICAgICAgb25FZGl0T3BlcmF0aW9uTmFtZTogdGhpcy5wcm9wcy5vbkVkaXRPcGVyYXRpb25OYW1lLFxuXG4gICAgICAvLyBHcmFwaGlRTCBhdXRvbWF0aWNhbGx5IGZpbGxzIGluIGxlYWYgbm9kZXMgd2hlbiB0aGUgcXVlcnlcbiAgICAgIC8vIGRvZXMgbm90IHByb3ZpZGUgdGhlbS4gQ2hhbmdlIHRoaXMgaWYgeW91ciBHcmFwaFFMIERlZmluaXRpb25zXG4gICAgICAvLyBzaG91bGQgYmVoYXZlIGRpZmZlcmVudGx5IHRoYW4gd2hhdCdzIGRlZmluZWQgaGVyZTpcbiAgICAgIC8vIChodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaGlxbC9ibG9iL21hc3Rlci9zcmMvdXRpbGl0eS9maWxsTGVhZnMuanMjTDc1KVxuICAgICAgZ2V0RGVmYXVsdEZpZWxkTmFtZXM6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImdyYXBoaXFsXCI+XG4gICAgICAgIDxHcmFwaGlRTCB7Li4udGhpcy5zdGF0ZX0gPlxuICAgICAgICAgIDxHcmFwaGlRTC5Mb2dvPlxuICAgICAgICAgICAgaUdyYXBoIFF1ZXJ5XG4gICAgICAgICAgPC9HcmFwaGlRTC5Mb2dvPlxuICAgICAgICA8L0dyYXBoaVFMPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21HcmFwaGlxbDtcbiJdfQ==
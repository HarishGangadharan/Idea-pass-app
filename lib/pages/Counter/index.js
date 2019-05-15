"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _counter = require("../../actions/counter");

var _CButton = _interopRequireDefault(require("../../components/Button/CButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Counter = function Counter(props) {
  return React.createElement("div", {
    className: "container justify-content-center align-items-center"
  }, React.createElement("div", {
    className: "row justify-content-around align-items-center"
  }, React.createElement("div", {
    className: "col-sm-4 col-lg-2 align-items-center justify-content-between"
  }, React.createElement(_CButton.default, {
    className: "btn btn-outline-primary mb-2",
    name: "Decrement",
    onClick: props.decrement,
    disabled: props.isLoading,
    aria_label: "Sub"
  }), React.createElement(_CButton.default, {
    className: "btn btn-outline-primary",
    name: "Decrement Async",
    onClick: props.decrementAsync,
    disabled: props.isLoading,
    aria_label: "Sub"
  })), React.createElement("div", {
    className: "col-sm-4 col-lg-2 align-items-center justify-content-between"
  }, React.createElement("div", null, "Counter: ", props.count)), React.createElement("div", {
    className: "col-sm-4 col-lg-2 align-items-center justify-content-between"
  }, React.createElement(_CButton.default, {
    className: "btn btn-outline-primary mb-2",
    name: "Increment",
    onClick: props.increment,
    disabled: props.isLoading,
    aria_label: "Add"
  }), React.createElement(_CButton.default, {
    className: "btn btn-outline-primary",
    name: "Increment Async",
    onClick: props.incrementAsync,
    disabled: props.isLoading,
    aria_label: "Add"
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    count: state.counter.count,
    isLoading: state.counter.isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    decrement: function decrement() {
      return dispatch((0, _counter.decrement)());
    },
    decrementAsync: function decrementAsync() {
      return dispatch((0, _counter.decrementAsync)());
    },
    increment: function increment() {
      return dispatch((0, _counter.increment)());
    },
    incrementAsync: function incrementAsync() {
      return dispatch((0, _counter.incrementAsync)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Db3VudGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJDb3VudGVyIiwicHJvcHMiLCJkZWNyZW1lbnQiLCJpc0xvYWRpbmciLCJkZWNyZW1lbnRBc3luYyIsImNvdW50IiwiaW5jcmVtZW50IiwiaW5jcmVtZW50QXN5bmMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvdW50ZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7QUFjQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFEO0FBQUEsU0FDZDtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSxvQkFBQyxnQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFDLDhCQURaO0FBRUUsSUFBQSxJQUFJLEVBQUMsV0FGUDtBQUdFLElBQUEsT0FBTyxFQUFFQSxLQUFLLENBQUNDLFNBSGpCO0FBSUUsSUFBQSxRQUFRLEVBQUVELEtBQUssQ0FBQ0UsU0FKbEI7QUFLRSxJQUFBLFVBQVUsRUFBQztBQUxiLElBREYsRUFRRSxvQkFBQyxnQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFDLHlCQURaO0FBRUUsSUFBQSxJQUFJLEVBQUMsaUJBRlA7QUFHRSxJQUFBLE9BQU8sRUFBRUYsS0FBSyxDQUFDRyxjQUhqQjtBQUlFLElBQUEsUUFBUSxFQUFFSCxLQUFLLENBQUNFLFNBSmxCO0FBS0UsSUFBQSxVQUFVLEVBQUM7QUFMYixJQVJGLENBREYsRUFpQkU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsOENBQWVGLEtBQUssQ0FBQ0ksS0FBckIsQ0FERixDQWpCRixFQW9CRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSxvQkFBQyxnQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFDLDhCQURaO0FBRUUsSUFBQSxJQUFJLEVBQUMsV0FGUDtBQUdFLElBQUEsT0FBTyxFQUFFSixLQUFLLENBQUNLLFNBSGpCO0FBSUUsSUFBQSxRQUFRLEVBQUVMLEtBQUssQ0FBQ0UsU0FKbEI7QUFLRSxJQUFBLFVBQVUsRUFBQztBQUxiLElBREYsRUFRRSxvQkFBQyxnQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFDLHlCQURaO0FBRUUsSUFBQSxJQUFJLEVBQUMsaUJBRlA7QUFHRSxJQUFBLE9BQU8sRUFBRUYsS0FBSyxDQUFDTSxjQUhqQjtBQUlFLElBQUEsUUFBUSxFQUFFTixLQUFLLENBQUNFLFNBSmxCO0FBS0UsSUFBQSxVQUFVLEVBQUM7QUFMYixJQVJGLENBcEJGLENBREYsQ0FEYztBQUFBLENBQWhCOztBQTBDQSxJQUFNSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFvQjtBQUMxQ0osSUFBQUEsS0FBSyxFQUFFSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FEcUI7QUFFMUNGLElBQUFBLFNBQVMsRUFBRU0sS0FBSyxDQUFDQyxPQUFOLENBQWNQO0FBRmlCLEdBQXBCO0FBQUEsQ0FBeEI7O0FBS0EsSUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBb0I7QUFDN0NWLElBQUFBLFNBQVMsRUFBRTtBQUFBLGFBQU1VLFFBQVEsQ0FBQyx5QkFBRCxDQUFkO0FBQUEsS0FEa0M7QUFFN0NSLElBQUFBLGNBQWMsRUFBRTtBQUFBLGFBQU1RLFFBQVEsQ0FBQyw4QkFBRCxDQUFkO0FBQUEsS0FGNkI7QUFHN0NOLElBQUFBLFNBQVMsRUFBRTtBQUFBLGFBQU1NLFFBQVEsQ0FBQyx5QkFBRCxDQUFkO0FBQUEsS0FIa0M7QUFJN0NMLElBQUFBLGNBQWMsRUFBRTtBQUFBLGFBQU1LLFFBQVEsQ0FBQyw4QkFBRCxDQUFkO0FBQUE7QUFKNkIsR0FBcEI7QUFBQSxDQUEzQjs7ZUFPZSx5QkFBdUVKLGVBQXZFLEVBQXdGRyxrQkFBeEYsRUFBNEdYLE9BQTVHLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgZGVjcmVtZW50LCBkZWNyZW1lbnRBc3luYywgaW5jcmVtZW50LCBpbmNyZW1lbnRBc3luYyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY291bnRlcic7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycyc7XG5pbXBvcnQgQ0J1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uJztcblxuaW50ZXJmYWNlIElTdGF0ZVByb3BzIHtcbiAgY291bnQ6IG51bWJlcixcbiAgaXNMb2FkaW5nOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJRGlzcGF0Y2hQcm9wcyB7XG4gIGRlY3JlbWVudDogKCkgPT4gdm9pZCxcbiAgZGVjcmVtZW50QXN5bmM6ICgpID0+IHZvaWQsXG4gIGluY3JlbWVudDogKCkgPT4gdm9pZCxcbiAgaW5jcmVtZW50QXN5bmM6ICgpID0+IHZvaWQsXG59XG5cbmNvbnN0IENvdW50ZXIgPSAocHJvcHM6IFJvdXRlQ29tcG9uZW50UHJvcHM8YW55PiAmIElTdGF0ZVByb3BzICYgSURpc3BhdGNoUHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wtbGctMiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPENCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtYi0yXCJcbiAgICAgICAgICBuYW1lPVwiRGVjcmVtZW50XCJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5kZWNyZW1lbnR9XG4gICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmlzTG9hZGluZ31cbiAgICAgICAgICBhcmlhX2xhYmVsPVwiU3ViXCJcbiAgICAgICAgLz5cbiAgICAgICAgPENCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgbmFtZT1cIkRlY3JlbWVudCBBc3luY1wiXG4gICAgICAgICAgb25DbGljaz17cHJvcHMuZGVjcmVtZW50QXN5bmN9XG4gICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmlzTG9hZGluZ31cbiAgICAgICAgICBhcmlhX2xhYmVsPVwiU3ViXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wtbGctMiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdj5Db3VudGVyOiB7cHJvcHMuY291bnR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLWxnLTIgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxDQnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbWItMlwiXG4gICAgICAgICAgbmFtZT1cIkluY3JlbWVudFwiXG4gICAgICAgICAgb25DbGljaz17cHJvcHMuaW5jcmVtZW50fVxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5pc0xvYWRpbmd9XG4gICAgICAgICAgYXJpYV9sYWJlbD1cIkFkZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxDQnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgIG5hbWU9XCJJbmNyZW1lbnQgQXN5bmNcIlxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmluY3JlbWVudEFzeW5jfVxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5pc0xvYWRpbmd9XG4gICAgICAgICAgYXJpYV9sYWJlbD1cIkFkZFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElTdGF0ZSkgPT4gKHtcbiAgY291bnQ6IHN0YXRlLmNvdW50ZXIuY291bnQsXG4gIGlzTG9hZGluZzogc3RhdGUuY291bnRlci5pc0xvYWRpbmdcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IGFueSkgPT4gKHtcbiAgZGVjcmVtZW50OiAoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnQoKSksXG4gIGRlY3JlbWVudEFzeW5jOiAoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnRBc3luYygpKSxcbiAgaW5jcmVtZW50OiAoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnQoKSksXG4gIGluY3JlbWVudEFzeW5jOiAoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnRBc3luYygpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8SVN0YXRlUHJvcHMsIElEaXNwYXRjaFByb3BzLCBSb3V0ZUNvbXBvbmVudFByb3BzPGFueT4sIElTdGF0ZT4obWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvdW50ZXIpO1xuIl19
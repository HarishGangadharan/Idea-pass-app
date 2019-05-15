"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDecrement = onDecrement;
exports.onDecrementAsync = onDecrementAsync;
exports.onIncrement = onIncrement;
exports.onIncrementAsync = onIncrementAsync;

var _reduxSaga = require("redux-saga");

var _effects = require("redux-saga/effects");

var _counter = require("../actions/counter");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(onIncrement),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(onIncrementAsync),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(onDecrement),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(onDecrementAsync);

// import { fetchData } from "./api";
// worker Saga: will be fired on INCREMENT actions
function onIncrement() {
  return regeneratorRuntime.wrap(function onIncrement$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)((0, _counter.incrementSuccess)());

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          // tslint:disable-next-line:no-console
          console.log(_context.t0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 5]]);
} // worker Saga: will be fired on ASYNC INCREMENT actions


function onIncrementAsync() {
  return regeneratorRuntime.wrap(function onIncrementAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _reduxSaga.delay)(3000);

        case 3:
          _context2.next = 5;
          return (0, _effects.put)((0, _counter.incrementAsyncSuccess)());

        case 5:
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          // tslint:disable-next-line:no-console
          console.log(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
} // worker Saga: will be fired on DECREMENT actions


function onDecrement() {
  return regeneratorRuntime.wrap(function onDecrement$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.put)((0, _counter.decrementSuccess)());

        case 3:
          _context3.next = 8;
          break;

        case 5:
          _context3.prev = 5;
          _context3.t0 = _context3["catch"](0);
          // tslint:disable-next-line:no-console
          console.log(_context3.t0);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 5]]);
} // worker Saga: will be fired on ASYNC DECREMENT actions


function onDecrementAsync() {
  return regeneratorRuntime.wrap(function onDecrementAsync$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _reduxSaga.delay)(3000);

        case 3:
          _context4.next = 5;
          return (0, _effects.put)((0, _counter.decrementAsyncSuccess)());

        case 5:
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          // tslint:disable-next-line:no-console
          console.log(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9jb3VudGVyLnRzIl0sIm5hbWVzIjpbIm9uSW5jcmVtZW50Iiwib25JbmNyZW1lbnRBc3luYyIsIm9uRGVjcmVtZW50Iiwib25EZWNyZW1lbnRBc3luYyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozt3QkFJVUEsVzs7O3dCQVlBQyxnQjs7O3dCQVdBQyxXOzs7d0JBVUFDLGdCOztBQXBDVjtBQUVBO0FBQ0EsU0FBVUgsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlJLGlCQUFNLGtCQUFJLGdDQUFKLENBQU47O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1JO0FBQ0FJLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBV0E7OztBQUNBLFNBQVVKLGdCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUksaUJBQU0sc0JBQU0sSUFBTixDQUFOOztBQUZKO0FBQUE7QUFHSSxpQkFBTSxrQkFBSSxxQ0FBSixDQUFOOztBQUhKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLSTtBQUNBRyxVQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQVVBOzs7QUFDQSxTQUFVSCxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUksaUJBQU0sa0JBQUksZ0NBQUosQ0FBTjs7QUFGSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBSUk7QUFDQUUsVUFBQUEsT0FBTyxDQUFDQyxHQUFSOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FTQTs7O0FBQ0EsU0FBVUYsZ0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSSxpQkFBTSxzQkFBTSxJQUFOLENBQU47O0FBRko7QUFBQTtBQUdJLGlCQUFNLGtCQUFJLHFDQUFKLENBQU47O0FBSEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtJO0FBQ0FDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlbGF5IH0gZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBkZWNyZW1lbnRBc3luY1N1Y2Nlc3MsIGRlY3JlbWVudFN1Y2Nlc3MsIGluY3JlbWVudEFzeW5jU3VjY2VzcywgaW5jcmVtZW50U3VjY2VzcyB9IGZyb20gJy4uL2FjdGlvbnMvY291bnRlcic7XG4vLyBpbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi9hcGlcIjtcblxuLy8gd29ya2VyIFNhZ2E6IHdpbGwgYmUgZmlyZWQgb24gSU5DUkVNRU5UIGFjdGlvbnNcbmZ1bmN0aW9uKiBvbkluY3JlbWVudCgpIHtcbiAgdHJ5IHtcbiAgICAvLyBkbyBhcGkgY2FsbFxuICAgIC8vIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKGZldGNoRGF0YSk7XG4gICAgeWllbGQgcHV0KGluY3JlbWVudFN1Y2Nlc3MoKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG5cbi8vIHdvcmtlciBTYWdhOiB3aWxsIGJlIGZpcmVkIG9uIEFTWU5DIElOQ1JFTUVOVCBhY3Rpb25zXG5mdW5jdGlvbiogb25JbmNyZW1lbnRBc3luYygpIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBkZWxheSgzMDAwKTtcbiAgICB5aWVsZCBwdXQoaW5jcmVtZW50QXN5bmNTdWNjZXNzKCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG4vLyB3b3JrZXIgU2FnYTogd2lsbCBiZSBmaXJlZCBvbiBERUNSRU1FTlQgYWN0aW9uc1xuZnVuY3Rpb24qIG9uRGVjcmVtZW50KCkge1xuICB0cnkge1xuICAgIHlpZWxkIHB1dChkZWNyZW1lbnRTdWNjZXNzKCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG4vLyB3b3JrZXIgU2FnYTogd2lsbCBiZSBmaXJlZCBvbiBBU1lOQyBERUNSRU1FTlQgYWN0aW9uc1xuZnVuY3Rpb24qIG9uRGVjcmVtZW50QXN5bmMoKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgZGVsYXkoMzAwMCk7XG4gICAgeWllbGQgcHV0KGRlY3JlbWVudEFzeW5jU3VjY2VzcygpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgb25EZWNyZW1lbnQsXG4gIG9uRGVjcmVtZW50QXN5bmMsXG4gIG9uSW5jcmVtZW50LFxuICBvbkluY3JlbWVudEFzeW5jXG59O1xuIl19
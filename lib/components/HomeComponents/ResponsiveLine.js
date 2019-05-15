"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _line = require("@nivo/line");

var React = _interopRequireWildcard(require("react"));

var _CButton = _interopRequireDefault(require("../Button/CButton"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Defauilt Error Handler component in application level
 * to show fallback UI.
 */
var ResponsiveLineChart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResponsiveLineChart, _React$Component);

  function ResponsiveLineChart(props) {
    var _this;

    _classCallCheck(this, ResponsiveLineChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveLineChart).call(this, props));
    _this.state = {
      data: [{
        color: 'hsl(211, 70%, 50%)',
        data: [{
          x: 'plane',
          y: 3
        }, {
          x: 'helicopter',
          y: 5
        }, {
          x: 'boat',
          y: 8
        }],
        id: 'japan'
      }, {
        color: 'hsl(235, 70%, 50%)',
        data: [{
          x: 'plane',
          y: 1
        }, {
          x: 'helicopter',
          y: 2
        }, {
          x: 'boat',
          y: 3
        }],
        id: 'france'
      }]
    };
    return _this;
  }

  _createClass(ResponsiveLineChart, [{
    key: "render",
    value: function render() {
      // tslint:disable:object-literal-sort-keys
      return React.createElement("div", null, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-md-6 p-0"
      }, React.createElement("h4", {
        className: "chartHead"
      }, "Ticket Trends")), React.createElement("div", {
        className: "col-md-6 text-right p-0"
      }, React.createElement(_CButton.default, {
        className: "btn btn-primary",
        name: "View full status"
      }))), React.createElement("div", {
        className: "lineChart",
        key: "1"
      }, React.createElement(_line.ResponsiveLine, {
        data: this.state.data,
        margin: {
          'top': 50,
          'right': 110,
          'bottom': 50,
          'left': 60
        },
        xScale: {
          'type': 'point'
        },
        yScale: {
          'type': 'linear',
          'min': 'auto',
          'max': 'auto',
          'stacked': true
        },
        minY: "auto",
        maxY: "auto",
        stacked: true,
        axisTop: null,
        axisRight: null,
        axisBottom: {
          'orient': 'bottom',
          'tickSize': 5,
          'tickPadding': 5,
          'tickRotation': 0,
          'legend': 'transportation',
          'legendOffset': 36,
          'legendPosition': 'middle'
        },
        axisLeft: {
          'orient': 'left',
          'tickSize': 5,
          'tickPadding': 5,
          'tickRotation': 0,
          'legend': 'count',
          'legendOffset': -40,
          'legendPosition': 'middle'
        },
        dotSize: 10,
        dotColor: "inherit:darker(0.3)",
        dotBorderWidth: 2,
        dotBorderColor: "#ffffff",
        enableDotLabel: true,
        dotLabel: "y",
        dotLabelYOffset: -12,
        animate: true,
        motionStiffness: 90,
        motionDamping: 15,
        legends: [{
          'anchor': 'top',
          'direction': 'row',
          'justify': false,
          'translateX': 100,
          'translateY': 0,
          'itemsSpacing': 0,
          'itemDirection': 'left-to-right',
          'itemWidth': 80,
          'itemHeight': 20,
          'itemOpacity': 0.75,
          'symbolSize': 12,
          'symbolShape': 'circle',
          'symbolBorderColor': 'rgba(0, 0, 0, .5)',
          'effects': [{
            'on': 'hover',
            'style': {
              'itemBackground': 'rgba(0, 0, 0, .03)',
              'itemOpacity': 1
            }
          }]
        }]
      })));
    }
  }]);

  return ResponsiveLineChart;
}(React.Component);

var _default = ResponsiveLineChart;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hvbWVDb21wb25lbnRzL1Jlc3BvbnNpdmVMaW5lLnRzeCJdLCJuYW1lcyI6WyJSZXNwb25zaXZlTGluZUNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb2xvciIsIngiLCJ5IiwiaWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlNQSxtQjs7Ozs7QUFDSiwrQkFBWUMsS0FBWixFQUF3QjtBQUFBOztBQUFBOztBQUN0Qiw2RkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsQ0FDSjtBQUNFQyxRQUFBQSxLQUFLLEVBQUUsb0JBRFQ7QUFFRUQsUUFBQUEsSUFBSSxFQUFFLENBQ0o7QUFDRUUsVUFBQUEsQ0FBQyxFQUFFLE9BREw7QUFFRUMsVUFBQUEsQ0FBQyxFQUFFO0FBRkwsU0FESSxFQUtKO0FBQ0VELFVBQUFBLENBQUMsRUFBRSxZQURMO0FBRUVDLFVBQUFBLENBQUMsRUFBRTtBQUZMLFNBTEksRUFTSjtBQUNFRCxVQUFBQSxDQUFDLEVBQUUsTUFETDtBQUVFQyxVQUFBQSxDQUFDLEVBQUU7QUFGTCxTQVRJLENBRlI7QUFnQkVDLFFBQUFBLEVBQUUsRUFBRTtBQWhCTixPQURJLEVBbUJKO0FBQ0VILFFBQUFBLEtBQUssRUFBRSxvQkFEVDtBQUVFRCxRQUFBQSxJQUFJLEVBQUUsQ0FDSjtBQUNFRSxVQUFBQSxDQUFDLEVBQUUsT0FETDtBQUVFQyxVQUFBQSxDQUFDLEVBQUU7QUFGTCxTQURJLEVBS0o7QUFDRUQsVUFBQUEsQ0FBQyxFQUFFLFlBREw7QUFFRUMsVUFBQUEsQ0FBQyxFQUFFO0FBRkwsU0FMSSxFQVNKO0FBQ0VELFVBQUFBLENBQUMsRUFBRSxNQURMO0FBRUVDLFVBQUFBLENBQUMsRUFBRTtBQUZMLFNBVEksQ0FG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XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9DQnV0dG9uJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vKipcbiAqIERlZmF1aWx0IEVycm9yIEhhbmRsZXIgY29tcG9uZW50IGluIGFwcGxpY2F0aW9uIGxldmVsXG4gKiB0byBzaG93IGZhbGxiYWNrIFVJLlxuICovXG5jbGFzcyBSZXNwb25zaXZlTGluZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgY29sb3I6ICdoc2woMjExLCA3MCUsIDUwJSknLFxuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogJ3BsYW5lJyxcbiAgICAgICAgICAgICAgeTogM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgeDogJ2hlbGljb3B0ZXInLFxuICAgICAgICAgICAgICB5OiA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAnYm9hdCcsXG4gICAgICAgICAgICAgIHk6IDhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGlkOiAnamFwYW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogJ2hzbCgyMzUsIDcwJSwgNTAlKScsXG4gICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAncGxhbmUnLFxuICAgICAgICAgICAgICB5OiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiAnaGVsaWNvcHRlcicsXG4gICAgICAgICAgICAgIHk6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6ICdib2F0JyxcbiAgICAgICAgICAgICAgeTogM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgaWQ6ICdmcmFuY2UnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IHAtMFwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNoYXJ0SGVhZFwiPlRpY2tldCBUcmVuZHM8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgdGV4dC1yaWdodCBwLTBcIj5cbiAgICAgICAgICAgIDxDQnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJWaWV3IGZ1bGwgc3RhdHVzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVDaGFydFwiIGtleT1cIjFcIj5cbiAgICAgICAgPFJlc3BvbnNpdmVMaW5lXG4gICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgIG1hcmdpbj17eyAndG9wJzogNTAsICdyaWdodCc6IDExMCwgJ2JvdHRvbSc6IDUwLCAnbGVmdCc6IDYwIH19XG4gICAgICAgICAgeFNjYWxlPXt7ICd0eXBlJzogJ3BvaW50JyB9fVxuICAgICAgICAgIHlTY2FsZT17e1xuICAgICAgICAgICAgJ3R5cGUnOiAnbGluZWFyJyxcbiAgICAgICAgICAgICdtaW4nOiAnYXV0bycsXG4gICAgICAgICAgICAnbWF4JzogJ2F1dG8nLFxuICAgICAgICAgICAgJ3N0YWNrZWQnOiB0cnVlXG4gICAgICAgICB9fVxuICAgICAgICAgIG1pblk9XCJhdXRvXCJcbiAgICAgICAgICBtYXhZPVwiYXV0b1wiXG4gICAgICAgICAgc3RhY2tlZD17dHJ1ZX1cbiAgICAgICAgICBheGlzVG9wPXtudWxsfVxuICAgICAgICAgIGF4aXNSaWdodD17bnVsbH1cbiAgICAgICAgICBheGlzQm90dG9tPXt7XG4gICAgICAgICAgICAnb3JpZW50JzogJ2JvdHRvbScsXG4gICAgICAgICAgICAndGlja1NpemUnOiA1LFxuICAgICAgICAgICAgJ3RpY2tQYWRkaW5nJzogNSxcbiAgICAgICAgICAgICd0aWNrUm90YXRpb24nOiAwLFxuICAgICAgICAgICAgJ2xlZ2VuZCc6ICd0cmFuc3BvcnRhdGlvbicsXG4gICAgICAgICAgICAnbGVnZW5kT2Zmc2V0JzogMzYsXG4gICAgICAgICAgICAnbGVnZW5kUG9zaXRpb24nOiAnbWlkZGxlJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgYXhpc0xlZnQ9e3tcbiAgICAgICAgICAgICdvcmllbnQnOiAnbGVmdCcsXG4gICAgICAgICAgICAndGlja1NpemUnOiA1LFxuICAgICAgICAgICAgJ3RpY2tQYWRkaW5nJzogNSxcbiAgICAgICAgICAgICd0aWNrUm90YXRpb24nOiAwLFxuICAgICAgICAgICAgJ2xlZ2VuZCc6ICdjb3VudCcsXG4gICAgICAgICAgICAnbGVnZW5kT2Zmc2V0JzogLTQwLFxuICAgICAgICAgICAgJ2xlZ2VuZFBvc2l0aW9uJzogJ21pZGRsZSdcbiAgICAgICAgICB9fVxuICAgICAgICAgIGRvdFNpemU9ezEwfVxuICAgICAgICAgIGRvdENvbG9yPVwiaW5oZXJpdDpkYXJrZXIoMC4zKVwiXG4gICAgICAgICAgZG90Qm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgICAgZG90Qm9yZGVyQ29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICBlbmFibGVEb3RMYWJlbD17dHJ1ZX1cbiAgICAgICAgICBkb3RMYWJlbD1cInlcIlxuICAgICAgICAgIGRvdExhYmVsWU9mZnNldD17LTEyfVxuICAgICAgICAgIGFuaW1hdGU9e3RydWV9XG4gICAgICAgICAgbW90aW9uU3RpZmZuZXNzPXs5MH1cbiAgICAgICAgICBtb3Rpb25EYW1waW5nPXsxNX1cbiAgICAgICAgICBsZWdlbmRzPXtbIHtcbiAgICAgICAgICAgJ2FuY2hvcic6ICd0b3AnLFxuICAgICAgICAgICAnZGlyZWN0aW9uJzogJ3JvdycsXG4gICAgICAgICAgICdqdXN0aWZ5JzogZmFsc2UsXG4gICAgICAgICAgICd0cmFuc2xhdGVYJzogMTAwLFxuICAgICAgICAgICAndHJhbnNsYXRlWSc6IDAsXG4gICAgICAgICAgICdpdGVtc1NwYWNpbmcnOiAwLFxuICAgICAgICAgICAnaXRlbURpcmVjdGlvbic6ICdsZWZ0LXRvLXJpZ2h0JyxcbiAgICAgICAgICAgJ2l0ZW1XaWR0aCc6IDgwLFxuICAgICAgICAgICAnaXRlbUhlaWdodCc6IDIwLFxuICAgICAgICAgICAnaXRlbU9wYWNpdHknOiAwLjc1LFxuICAgICAgICAgICAnc3ltYm9sU2l6ZSc6IDEyLFxuICAgICAgICAgICAnc3ltYm9sU2hhcGUnOiAnY2lyY2xlJyxcbiAgICAgICAgICAgJ3N5bWJvbEJvcmRlckNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgLjUpJyxcbiAgICAgICAgICAgJ2VmZmVjdHMnOiBbIHtcbiAgICAgICAgICAgICAnb24nOiAnaG92ZXInLFxuICAgICAgICAgICAgICdzdHlsZSc6IHsgJ2l0ZW1CYWNrZ3JvdW5kJzogJ3JnYmEoMCwgMCwgMCwgLjAzKScsICdpdGVtT3BhY2l0eSc6IDEgfVxuICAgICAgICAgICAgfV19XG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVMaW5lQ2hhcnQ7XG4iXX0=
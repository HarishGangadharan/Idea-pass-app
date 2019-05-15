"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Util Class to handle storage services
 * Localstorage, SessionStorage can be handled
 */
var StorageService =
/*#__PURE__*/
function () {
  function StorageService() {
    _classCallCheck(this, StorageService);
  }

  _createClass(StorageService, [{
    key: "setItem",
    value: function setItem(key, value) {
      localStorage.setItem(key, value);
    }
  }, {
    key: "setObject",
    value: function setObject(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, {
    key: "getObject",
    value: function getObject(key) {
      return JSON.parse(this.getItem(key));
    }
  }, {
    key: "setItems",
    value: function setItems(storageObjects) {
      var _this = this;

      storageObjects.forEach(function (storageObject) {
        _this.setItem(storageObject.key, storageObject.value);
      });
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return localStorage.getItem(key);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(key) {
      localStorage.removeItem(key);
    }
  }]);

  return StorageService;
}();

var _default = new StorageService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zdG9yYWdlLnRzIl0sIm5hbWVzIjpbIlN0b3JhZ2VTZXJ2aWNlIiwia2V5IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiZ2V0SXRlbSIsInN0b3JhZ2VPYmplY3RzIiwiZm9yRWFjaCIsInN0b3JhZ2VPYmplY3QiLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUE7Ozs7SUFJTUEsYzs7Ozs7Ozs7OzRCQUNXQyxHLEVBQWFDLEssRUFBa0I7QUFDNUNDLE1BQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJDLEtBQTFCO0FBQ0Q7Ozs4QkFDZ0JELEcsRUFBYUMsSyxFQUFxQjtBQUNqREMsTUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCSCxHQUFyQixFQUEwQkksSUFBSSxDQUFDQyxTQUFMLENBQWVKLEtBQWYsQ0FBMUI7QUFDRDs7OzhCQUNnQkQsRyxFQUFxQjtBQUNwQyxhQUFPSSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxLQUFLQyxPQUFMLENBQWFQLEdBQWIsQ0FBWCxDQUFQO0FBQ0Q7Ozs2QkFFZVEsYyxFQUF5QztBQUFBOztBQUN2REEsTUFBQUEsY0FBYyxDQUFDQyxPQUFmLENBQXVCLFVBQUNDLGFBQUQsRUFBbUM7QUFDeEQsUUFBQSxLQUFJLENBQUNQLE9BQUwsQ0FBYU8sYUFBYSxDQUFDVixHQUEzQixFQUFnQ1UsYUFBYSxDQUFDVCxLQUE5QztBQUNELE9BRkQ7QUFHRDs7OzRCQUNjRCxHLEVBQW1CO0FBQUUsYUFBT0UsWUFBWSxDQUFDSyxPQUFiLENBQXFCUCxHQUFyQixDQUFQO0FBQW1DOzs7K0JBQ3JEQSxHLEVBQW9CO0FBQUVFLE1BQUFBLFlBQVksQ0FBQ1MsVUFBYixDQUF3QlgsR0FBeEI7QUFBK0I7Ozs7OztlQUcxRCxJQUFJRCxjQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElTdG9yYWdlT2JqZWN0IHtcbiAga2V5OiBzdHJpbmcsXG4gIHZhbHVlOiBhbnlcbn1cblxuaW50ZXJmYWNlIElTdG9yYWdlU2VydmljZSB7XG4gIHNldEl0ZW0gOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWQgLFxuICBzZXRJdGVtcyA6IChzdG9yYWdlT2JqZWN0czogSVN0b3JhZ2VPYmplY3RbXSkgPT4gdm9pZFxufVxuXG4vKipcbiAqIFV0aWwgQ2xhc3MgdG8gaGFuZGxlIHN0b3JhZ2Ugc2VydmljZXNcbiAqIExvY2Fsc3RvcmFnZSwgU2Vzc2lvblN0b3JhZ2UgY2FuIGJlIGhhbmRsZWRcbiAqL1xuY2xhc3MgU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBJU3RvcmFnZVNlcnZpY2Uge1xuICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICB9XG4gIHB1YmxpYyBzZXRPYmplY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBvYmplY3QpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cbiAgcHVibGljIGdldE9iamVjdChrZXk6IHN0cmluZyk6IG9iamVjdCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRJdGVtKGtleSkpO1xuICB9XG5cbiAgcHVibGljIHNldEl0ZW1zKHN0b3JhZ2VPYmplY3RzOiBJU3RvcmFnZU9iamVjdFtdKSA6IHZvaWQge1xuICAgIHN0b3JhZ2VPYmplY3RzLmZvckVhY2goKHN0b3JhZ2VPYmplY3Q6IElTdG9yYWdlT2JqZWN0KSA9PiB7XG4gICAgICB0aGlzLnNldEl0ZW0oc3RvcmFnZU9iamVjdC5rZXksIHN0b3JhZ2VPYmplY3QudmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKSA6IGFueSB7IHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpOyB9XG4gIHB1YmxpYyBkZWxldGVJdGVtKGtleTogc3RyaW5nKSA6IHZvaWQgeyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTdG9yYWdlU2VydmljZSgpO1xuIl19
// Generated by CoffeeScript 1.7.1
(function() {
  (function() {
    return Mock.mockjax = function(module) {
      var error, item;
      item = {
        find: function(url) {
          var k, v, _ref;
          this.template = {};
          _ref = Mock._mocked;
          for (k in _ref) {
            v = _ref[k];
            if (k === url) {
              return this.template = Mock.mock(v.template);
            }
          }
        },
        template: {}
      };
      try {
        return module.config(function($httpProvider) {
          return $httpProvider.interceptors.push(function() {
            return {
              request: function(config) {
                item.find(config.url);
                config.url = "?mockUrl=" + config.url;
                return config;
              },
              response: function(response) {
                response.data = item.template;
                return response;
              }
            };
          });
        });
      } catch (_error) {
        error = _error;
        return console.error('生成mock.angular失败，例：var app = angular.module("app", []); Mock.mockjax(app);');
      }
    };
  })();

}).call(this);

//# sourceMappingURL=mock.angular.map

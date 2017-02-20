(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("common/app-header/app-header.component.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.headerComponent = undefined;

require('./app-header.html');

var headerComponent = exports.headerComponent = {
    bindings: {
        user: '<'
        // onLogout: '&',
    },
    templateUrl: 'app/common/app-header/app-header.html'
};

});

require.register("common/app-header/app-header.module.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.appHeader = undefined;

var _appHeader = require('./app-header.component');

//import './app-header.scss';

var appHeader = exports.appHeader = angular.module('common.app-header', []).component('appHeader', _appHeader.headerComponent).name;

});

require.register("common/app.component.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.appComponent = undefined;

require('./app.html');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppController = function AppController($state) {
    'ngInject';

    _classCallCheck(this, AppController);

    this.$state = $state;
    this.user = "Mathieu DECROOCQ";
}
//logout() {
//    return this.authService
//        .logout()
//        .then(() => this.$state.go('auth.login'));
//}
;

;

var appComponent = exports.appComponent = {
    templateUrl: 'app/common/app.html',
    controller: AppController
};

});

require.register("common/app.module.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _app = require('./app.component');

var _appHeader = require('./app-header/app-header.module');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { appSidebar } from './app-sidebar-menu/app-sidebar-menu.module';
//import { appFooter } from './app-footer/app-footer.module';

//import './app.scss';

var app = exports.app = angular.module('common.app', [_angularUiRouter2.default, _appHeader.appHeader
//appSidebar,
//appFooter
]).component('app', _app.appComponent).config(function ($stateProvider) {
    'ngInject';

    $stateProvider.state('app', {
        // redirectTo: 'dashboard',
        url: '/',
        //data: {
        //    requiredAuth: true,
        //},
        component: 'app'

    });
}).name;

});

require.register("components/components.module.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
//import { auth } from './auth/auth.module';
//import { dashboard } from './dashboard/dashboard.module';

var components = exports.components = angular.module('components', [
   // auth,
   // dashboard,
]).name;

});

require.register("index.js", function(exports, require, module) {
'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

require('./root.module');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import 'templates';

_angular2.default.element(document).ready(function () {
    _angular2.default.bootstrap(document, ['root'], {
        strictDi: true
    });
});

});

require.register("initialize.js", function(exports, require, module) {
'use strict';

require('index');

document.addEventListener('DOMContentLoaded', function () {
    // do your setup here

});

});

require.register("root.component.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rootComponent = undefined;

require('./root.html');

//force load html templates cache module

var rootComponent = exports.rootComponent = {
    templateUrl: 'app/root.html' //put the path of html file (see templates.js file)
};

});

require.register("root.module.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.root = undefined;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _root = require('./root.component');

var _app = require('./common/app.module');

var _components = require('./components/components.module');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//note css du module prinicipal
//import './root.scss';

//import { common } from './common/common.module';
var root = exports.root = _angular2.default.module('root', [

//npm modules
'templates',
//add module template for use html view compiled into one module by brunch (see $templateCache in angularjs doc)
_angularUiRouter2.default,

//apps modules
_app.app, _components.components]).component('root', _root.rootComponent).config(function ($urlRouterProvider, $locationProvider) {
        'ngInject';

        $urlRouterProvider.otherwise("/"); //force ui-router to load state app and inject html in app component in ui-view div
        $locationProvider.html5Mode(true);
});

});

require.register("___globals___", function(exports, require, module) {
  

// Auto-loaded modules from config.npm.globals.
window.bootstrap = require("bootstrap");


});})();require('___globals___');


//# sourceMappingURL=app.js.map
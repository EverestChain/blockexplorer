(() => {
var exports = {};
exports.id = 4820;
exports.ids = [4820,1371];
exports.modules = {

/***/ 91371:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  // locales: ['en', 'zht'],
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home', 'blocks', 'transactions'],
    'rgx:^/@*': ['profiles', 'accounts'],
    'rgx:^/blocks': ['blocks', 'transactions', 'message_labels', 'message_contents'],
    'rgx:^/transactions': ['transactions', 'message_labels', 'message_contents'],
    'rgx:^/proposals': ['proposals'],
    'rgx:^/validators': ['validators', 'transactions', 'accounts', 'message_labels', 'message_contents'],
    'rgx:^/accounts': ['accounts', 'transactions', 'validators', 'message_labels', 'message_contents'],
    'rgx:^/params': ['params']
  },
  loadLocaleFrom: (lang, ns) => __webpack_require__(1014)(`./${lang}/${ns}.json`).then(m => m.default)
};

/***/ }),

/***/ 7509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error)
});

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(91371);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
// EXTERNAL MODULE: external "next-translate/appWithI18n"
var appWithI18n_ = __webpack_require__(75668);
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(75657);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "next-translate/Trans"
var Trans_ = __webpack_require__(74137);
var Trans_default = /*#__PURE__*/__webpack_require__.n(Trans_);
// EXTERNAL MODULE: ./src/utils/go_to_page.ts
var go_to_page = __webpack_require__(48625);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/configs/index.ts + 3 modules
var configs = __webpack_require__(41215);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/error/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: theme.spacing(6),
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2)
        },
        '& .details': {
          marginBottom: theme.spacing(5)
        },
        '& .container': {
          maxWidth: '600px'
        }
      }
    };
  })();
  return styles;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/error/index.tsx
// /* eslint-disable */











const Error = () => {
  const classes = useStyles();
  const {
    t
  } = useTranslation_default()();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "h2",
        children: t('common:errorTitle')
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        className: "details",
        children: /*#__PURE__*/jsx_runtime_.jsx((Trans_default()), {
          i18nKey: "common:errorDetails",
          components: [
          /*#__PURE__*/
          // eslint-disable-next-line
          jsx_runtime_.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: configs/* generalConfig.github.reportIssue */.C.github.reportIssue
          })],
          values: {
            issue: configs/* generalConfig.github.reportIssue */.C.github.reportIssue
          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: go_to_page/* HOME */.Sd,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          component: "a",
          children: t('common:errorHome')
        })
      })]
    })
  });
};

/* harmony default export */ const error = (Error);
;// CONCATENATED MODULE: ./src/pages/_error.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore

/* eslint-disable */




const ErrorPage = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(error, {});
};

ErrorPage.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

const __Page_Next_Translate__ = ErrorPage; // @ts-ignore

/* harmony default export */ const _error = (appWithI18n_default()(__Page_Next_Translate__, _objectSpread(_objectSpread({}, (i18n_default())), {}, {
  // @ts-ignore
  isLoader: true,
  // @ts-ignore
  skipInitialProps: false // @ts-ignore
  // @ts-ignore

}))); // @ts-ignore

/***/ }),

/***/ 1014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/accounts.json": [
		95547,
		5547
	],
	"./en/blocks.json": [
		42377,
		2377
	],
	"./en/common.json": [
		23172,
		3172
	],
	"./en/home.json": [
		74243,
		4243
	],
	"./en/message_contents.json": [
		62338,
		2338
	],
	"./en/message_labels.json": [
		40996,
		996
	],
	"./en/params.json": [
		78521,
		8521
	],
	"./en/profiles.json": [
		35901,
		5901
	],
	"./en/proposals.json": [
		84851,
		4851
	],
	"./en/transactions.json": [
		62482,
		2482
	],
	"./en/validators.json": [
		78000,
		8000
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 1014;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 48308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 74137:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/Trans");

/***/ }),

/***/ 75668:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/appWithI18n");

/***/ }),

/***/ 60866:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 60562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 64365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4289,5657,8625], () => (__webpack_exec__(7509)));
module.exports = __webpack_exports__;

})();
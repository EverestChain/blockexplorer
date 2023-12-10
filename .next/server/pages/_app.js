(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 20539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ useApollo)
});

// UNUSED EXPORTS: initializeApollo

// EXTERNAL MODULE: external "isomorphic-ws"
var external_isomorphic_ws_ = __webpack_require__(29417);
var external_isomorphic_ws_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_ws_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(29114);
;// CONCATENATED MODULE: external "@apollo/client/utilities"
const utilities_namespaceObject = require("@apollo/client/utilities");
;// CONCATENATED MODULE: external "@apollo/client/link/ws"
const ws_namespaceObject = require("@apollo/client/link/ws");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/graphql/client.ts
var _process$env$NEXT_PUB;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
};
let apolloClient;
const httpLink = new client_.HttpLink({
  uri: "https://cosmos.evtscan.com/v1/graphql"
});
const wsLink = new ws_namespaceObject.WebSocketLink({
  uri: (_process$env$NEXT_PUB = "wss://cosmos.evtscan.com/v1/graphql") !== null && _process$env$NEXT_PUB !== void 0 ? _process$env$NEXT_PUB : 'wss://localhost:3000',
  options: {
    reconnect: true
  },
  webSocketImpl: (external_isomorphic_ws_default())
});
const client_link =  false ? 0 : httpLink;
const authMiddleware = new client_.ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {}
  });
  return forward(operation);
});

function createApolloClient() {
  const client = new client_.ApolloClient({
    ssrMode: true,
    link: (0,client_.concat)(authMiddleware, client_link),
    cache: new client_.InMemoryCache({})
  });
  client.defaultOptions = defaultOptions;
  return client;
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  // eslint-disable-next-line
  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = (0,external_react_.useMemo)(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ 73757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91371);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75668);
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _screens_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6592);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_screens_app__WEBPACK_IMPORTED_MODULE_3__]);
_screens_app__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore




const __Page_Next_Translate__ = _screens_app__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z; // @ts-ignore

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_1___default()(__Page_Next_Translate__, _objectSpread(_objectSpread({}, (_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default())), {}, {
  // @ts-ignore
  isLoader: true,
  // @ts-ignore
  skipInitialProps: true // @ts-ignore
  // @ts-ignore

}))); // @ts-ignore
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport safe */ _inner_app__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "o": () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _inner_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53605);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_main__WEBPACK_IMPORTED_MODULE_1__]);
_main__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ inner_app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: ./src/utils/dayjs.ts
var dayjs = __webpack_require__(93620);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(99634);
// EXTERNAL MODULE: ./src/graphql/types/general_types.tsx
var general_types = __webpack_require__(91619);
;// CONCATENATED MODULE: ./src/screens/app/components/inner_app/hooks.ts






const useChainHealthCheck = () => {
  const {
    t
  } = useTranslation_default()('common');
  const {
    0: chainActive,
    1: setChainActive
  } = (0,external_react_.useState)(true);
  const isClient = false;
  const [useLatestBlockTimestamp] = (0,general_types/* useLatestBlockTimestampLazyQuery */.FP)({
    onCompleted: data => {
      const timestamp = dayjs/* default.utc */.Z.utc(external_ramda_.pathOr('', ['block', 0, 'timestamp'], data));
      const timeNow = dayjs/* default.utc */.Z.utc();
      const timeDifference = timeNow.diff(timestamp, 's'); // if latest block has been over a minute ago

      if (timeDifference > 60 && chainActive) {
        external_react_toastify_.toast.error(t('blockTimeAgo', {
          time: dayjs/* default.utc */.Z.utc(timestamp).fromNow()
        }), {
          autoClose: false
        });
        setChainActive(false);
      }
    }
  });
  (0,external_react_.useEffect)(() => {
    if (!isClient) {
      return false;
    }

    useLatestBlockTimestamp();
  }, []);
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/app/components/inner_app/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function InnerApp({
  Component,
  pageProps
}) {
  useChainHealthCheck();
  return /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps));
}

/* harmony default export */ const inner_app = (InnerApp);

/***/ }),

/***/ 96779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme),
/* harmony export */   "f": () => (/* binding */ useGenesis)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80201);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41215);
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93620);






const useTheme = () => {
  const theme = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_3__/* .readTheme */ .jp);
  return {
    muiTheme: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.createMuiTheme)((0,_recoil_settings__WEBPACK_IMPORTED_MODULE_3__/* .getThemeTemplate */ .zy)(theme))
  };
};
const useGenesis = () => {
  const utcTimeNow = _utils_dayjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"].utc */ .Z.utc().format('YYYY-MM-DDTHH:mm:ss');
  const {
    0: genesisStarted,
    1: setGenesis
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_configs__WEBPACK_IMPORTED_MODULE_4__/* .chainConfig.genesis.time */ .i.genesis.time < utcTimeNow);

  const startGenesis = () => {
    setTimeout(() => {
      setGenesis(true);
    }, 10000);
  };

  return {
    genesisStarted,
    startGenesis
  };
};

/***/ }),

/***/ 57352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13033);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _screens_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81037);
/* harmony import */ var _screens_initial_load__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19193);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80201);
/* harmony import */ var _recoil_big_dipper_networks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17753);
/* harmony import */ var _recoil_market__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6154);
/* harmony import */ var _recoil_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1755);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47288);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96779);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_screens_countdown__WEBPACK_IMPORTED_MODULE_4__, ___WEBPACK_IMPORTED_MODULE_10__]);
([_screens_countdown__WEBPACK_IMPORTED_MODULE_4__, ___WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const Main = props => {
  // =====================================
  // init recoil values
  // =====================================
  (0,_recoil_settings__WEBPACK_IMPORTED_MODULE_6__/* .useSettingsRecoil */ .z5)();
  (0,_recoil_big_dipper_networks__WEBPACK_IMPORTED_MODULE_7__/* .useBigDipperNetworksRecoil */ .ZD)();
  (0,_recoil_market__WEBPACK_IMPORTED_MODULE_8__/* .useMarketRecoil */ .ay)();
  const {
    loading
  } = (0,_recoil_validators__WEBPACK_IMPORTED_MODULE_9__/* .useValidatorRecoil */ .XL)(); // =====================================
  // general setup
  // =====================================

  const {
    muiTheme
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useTheme */ .F)();
  const {
    genesisStarted,
    startGenesis
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useGenesis */ .f)();
  let Component = null;

  if (!genesisStarted) {
    Component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_screens_countdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      startGenesis: startGenesis
    });
  } else if (loading) {
    Component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_screens_initial_load__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread({}, props.pageProps));
  } else {
    Component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(___WEBPACK_IMPORTED_MODULE_10__/* .InnerApp */ .i, _objectSpread({}, props));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
    theme: muiTheme,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
      position: "top-center",
      autoClose: 5000,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      hideProgressBar: true,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true
    }), Component]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ useApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63215);
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jdenticon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84562);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jdenticon__WEBPACK_IMPORTED_MODULE_2__]);
jdenticon__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useApp = () => {
  // ==========================
  // language
  // ==========================
  const {
    lang
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
    const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

    if (MATOMO_URL && MATOMO_SITE_ID) {
      (0,_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_1__.init)({
        url: MATOMO_URL,
        siteId: MATOMO_SITE_ID
      });
    } // jdenticon theme


    jdenticon__WEBPACK_IMPORTED_MODULE_2__.configure({
      hues: [207],
      lightness: {
        color: [0.84, 0.84],
        grayscale: [0.84, 0.84]
      },
      saturation: {
        color: 0.48,
        grayscale: 0.48
      },
      backColor: '#2a4766'
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.cookie = `NEXT_LOCALE=${lang}`;
  }, [lang]); // ==========================
  // css
  // ==========================

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_graphql_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20539);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41215);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34871);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47288);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68179);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73411);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_8__, _hooks__WEBPACK_IMPORTED_MODULE_9__]);
([_components__WEBPACK_IMPORTED_MODULE_8__, _hooks__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function App(props) {
  (0,_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useApp */ .q)();
  const {
    pageProps
  } = props;
  const apolloClient = (0,_src_graphql_client__WEBPACK_IMPORTED_MODULE_5__/* .useApollo */ .U)(pageProps.initialApolloState);
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()();
  const {
    location
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useWindowOrigin */ .t8)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {
      titleTemplate: `%s | ${_configs__WEBPACK_IMPORTED_MODULE_6__/* .chainConfig.title */ .i.title}`,
      title: t('common:bigDipper'),
      description: t('common:description'),
      openGraph: _objectSpread({
        title: `${t('common:bigDipper')} | ${_configs__WEBPACK_IMPORTED_MODULE_6__/* .chainConfig.title */ .i.title}`,
        description: t('common:description'),
        url: location
      }, _utils__WEBPACK_IMPORTED_MODULE_10__/* .OPEN_GRAPH_SEO */ .MM),
      twitter: _utils__WEBPACK_IMPORTED_MODULE_10__/* .TWITTER_SEO */ .u7,
      additionalLinkTags: _utils__WEBPACK_IMPORTED_MODULE_10__/* .ADDITIONAL_LINK_TAGS_SEO */ .uz,
      additionalMetaTags: _utils__WEBPACK_IMPORTED_MODULE_10__/* .ADDITIONAL_META_TAGS */ .el
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {
      client: apolloClient,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(recoil__WEBPACK_IMPORTED_MODULE_1__.RecoilRoot, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .Main */ .o, _objectSpread({}, props))
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MM": () => (/* binding */ OPEN_GRAPH_SEO),
/* harmony export */   "u7": () => (/* binding */ TWITTER_SEO),
/* harmony export */   "uz": () => (/* binding */ ADDITIONAL_LINK_TAGS_SEO),
/* harmony export */   "el": () => (/* binding */ ADDITIONAL_META_TAGS)
/* harmony export */ });
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41215);

const OPEN_GRAPH_SEO = {
  type: 'website',
  site_name: 'Big Dipper',
  images: [{
    url: _configs__WEBPACK_IMPORTED_MODULE_0__/* .generalConfig.previewImage */ .C.previewImage,
    width: 800,
    height: 600,
    alt: 'Preview Photo'
  }]
};
const TWITTER_SEO = {
  cardType: 'summary_large_image'
};
const ADDITIONAL_LINK_TAGS_SEO = [{
  rel: 'apple-touch-icon',
  href: '/icons/apple-touch-icon.png',
  sizes: '180x180'
}, {
  rel: 'icon',
  type: 'image/png',
  href: '/icons/favicon-32x32.png',
  sizes: '32x32'
}, {
  rel: 'icon',
  type: 'image/png',
  href: '/icons/favicon-16x16.png',
  sizes: '16x16'
}, {
  rel: 'manifest',
  href: '/icons/site.webmanifest'
}, {
  rel: 'mask-icon',
  href: '/icons/safari-pinned-tab.svg',
  color: '#5bbad5'
}, {
  rel: 'shortcut icon',
  href: '/icons/favicon.ico'
}];
const ADDITIONAL_META_TAGS = [{
  property: 'viewport',
  content: 'minimum-scale=1, initial-scale=1, width=device-width'
}, {
  property: 'msapplication-TileColor',
  content: '#da532c'
}, {
  name: 'msapplication-config',
  content: '/icons/browserconfig.xml'
}, {
  name: 'theme-color',
  content: '#ffffff'
}];

/***/ }),

/***/ 81037:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34871);
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93620);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41215);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80201);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77752);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29744);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_9__]);
_components__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */













const Countdown = ({
  startGenesis
}) => {
  const theme = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_7__/* .readTheme */ .jp);
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_8__/* .useStyles */ .y)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    interval: 1000,
    loading: false
  });
  const genesisTime = _utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utc */ .Z.utc(_configs__WEBPACK_IMPORTED_MODULE_6__/* .chainConfig.genesis.time */ .i.genesis.time);
  const logoUrl = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(_configs__WEBPACK_IMPORTED_MODULE_6__/* .chainConfig.logo["default"] */ .i.logo["default"], ['logo', theme], _configs__WEBPACK_IMPORTED_MODULE_6__/* .chainConfig */ .i);

  const intervalCallback = () => {
    const timeNow = _utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utc */ .Z.utc();
    const difference = genesisTime.diff(timeNow);

    if (difference > 0) {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor(difference / (1000 * 60 * 60) % 24),
        minute: Math.floor(difference / 1000 / 60 % 60),
        second: Math.floor(difference / 1000 % 60)
      }));
    } else {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        interval: null,
        loading: true
      }));
      startGenesis();
    }
  };

  (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useInterval */ .Yz)(intervalCallback, state.interval);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("img", {
      src: logoUrl,
      className: classes.logo,
      alt: "logo"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: classes.timeContainer,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h1",
          children: state.day
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h3",
          children: "Day"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h1",
          children: state.hour
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h3",
          children: "Hour"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h1",
          children: state.minute
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h3",
          children: "Min"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h1",
          children: state.second
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h3",
          children: "Sec"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "h2",
      className: classes.chain,
      children: _configs__WEBPACK_IMPORTED_MODULE_6__/* .chainConfig.network */ .i.network
    }), state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components__WEBPACK_IMPORTED_MODULE_9__/* .Loading */ .gb, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        background: theme.palette.background.default,
        '& a': {
          color: theme.palette.custom.fonts.highlight
        }
      },
      chain: {
        color: theme.palette.primary.main
      },
      logo: {
        width: '275px'
      },
      timeContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 65px)',
        gridGap: '8px',
        margin: theme.spacing(3, 0)
      },
      item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& .MuiTypography-h1': {
          width: '100%',
          textAlign: 'center',
          background: theme.palette.background.paper,
          padding: theme.spacing(2),
          marginBottom: theme.spacing(2)
        }
      }
    };
  }, {
    index: 1
  })();
  return styles;
};

/***/ }),

/***/ 19193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ initial_load)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(99634);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(29755);
// EXTERNAL MODULE: ./src/assets/big-dipper-white.svg
var big_dipper_white = __webpack_require__(60962);
// EXTERNAL MODULE: ./src/assets/big-dipper-red.svg
var big_dipper_red = __webpack_require__(9379);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/configs/index.ts + 3 modules
var configs = __webpack_require__(41215);
// EXTERNAL MODULE: ./src/recoil/settings/index.ts + 8 modules
var settings = __webpack_require__(80201);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/initial_load/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: theme.spacing(6),
        '& svg': {
          width: '100%'
        },
        [theme.breakpoints.up('sm')]: {
          '& svg': {
            width: '300px'
          }
        }
      },
      logo: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '300px'
        }
      },
      divider: {
        margin: theme.spacing(2, 0)
      }
    };
  })();
  return styles;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/initial_load/index.tsx












const InitialLoad = () => {
  const theme = (0,external_recoil_.useRecoilValue)(settings/* readTheme */.jp);
  const classes = useStyles();
  const logoUrl = external_ramda_.pathOr(configs/* chainConfig.logo.default */.i.logo["default"], ['logo', theme], configs/* chainConfig */.i);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: logoUrl,
        className: classes.logo,
        alt: "logo"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.LinearProgress, {
        className: classes.divider
      }), theme === 'light' ? /*#__PURE__*/jsx_runtime_.jsx(big_dipper_red/* default */.Z, {}) : /*#__PURE__*/jsx_runtime_.jsx(big_dipper_white/* default */.Z, {})]
    })
  });
};

/* harmony default export */ const initial_load = (InitialLoad);

/***/ }),

/***/ 88819:
/***/ (() => {



/***/ }),

/***/ 29114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 13033:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ 48308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 72105:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons");

/***/ }),

/***/ 27806:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 43349:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ 63215:
/***/ ((module) => {

"use strict";
module.exports = require("@socialgouv/matomo-next");

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9848:
/***/ ((module) => {

"use strict";
module.exports = require("bech32");

/***/ }),

/***/ 22575:
/***/ ((module) => {

"use strict";
module.exports = require("big.js");

/***/ }),

/***/ 59003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 39105:
/***/ ((module) => {

"use strict";
module.exports = require("color");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 45334:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/advancedFormat");

/***/ }),

/***/ 14195:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 53291:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 60811:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/updateLocale");

/***/ }),

/***/ 36619:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 81320:
/***/ ((module) => {

"use strict";
module.exports = require("dompurify");

/***/ }),

/***/ 29417:
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-ws");

/***/ }),

/***/ 11904:
/***/ ((module) => {

"use strict";
module.exports = require("markdown-to-jsx");

/***/ }),

/***/ 16641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

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

/***/ 5508:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/setLanguage");

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

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 88032:
/***/ ((module) => {

"use strict";
module.exports = require("numeral");

/***/ }),

/***/ 99634:
/***/ ((module) => {

"use strict";
module.exports = require("ramda");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 88041:
/***/ ((module) => {

"use strict";
module.exports = require("react-virtualized-auto-sizer");

/***/ }),

/***/ 80551:
/***/ ((module) => {

"use strict";
module.exports = require("react-window");

/***/ }),

/***/ 30353:
/***/ ((module) => {

"use strict";
module.exports = require("react-window-infinite-loader");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 29755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ 84562:
/***/ ((module) => {

"use strict";
module.exports = import("jdenticon");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4289,5657,5117,1371,8625,9744], () => (__webpack_exec__(73757)));
module.exports = __webpack_exports__;

})();
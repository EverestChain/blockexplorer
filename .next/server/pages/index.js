"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 46619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91371);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _screens_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_screens_home__WEBPACK_IMPORTED_MODULE_2__]);
_screens_home__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore




const HomePage = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_screens_home__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage); // @ts-ignore

async function getStaticProps(ctx) {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return {
    // @ts-ignore
    // @ts-ignore
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread({}, ctx), {}, {
      // @ts-ignore
      pathname: '/index',
      // @ts-ignore
      loaderName: 'getStaticProps'
    }, (_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default())))) // @ts-ignore

  }; // @ts-ignore
} // @ts-ignore
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useBlocks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91619);



const useBlocks = () => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    items: []
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_1__.mergeDeepLeft(stateChange, prevState));
  }; // ================================
  // block subscription
  // ================================


  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_2__/* .useBlocksListenerSubscription */ .Wx)({
    onSubscriptionData: data => {
      handleSetState({
        items: formatBlocks(data.subscriptionData.data)
      });
    }
  });

  const formatBlocks = data => {
    return data.blocks.map(x => {
      const proposerAddress = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['validator', 'validatorInfo', 'operatorAddress'], x);
      return {
        height: x.height,
        txs: x.txs,
        hash: x.hash,
        timestamp: x.timestamp,
        proposer: proposerAddress
      };
    });
  };

  return {
    state
  };
};

/***/ }),

/***/ 49925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75657);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65117);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_go_to_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48625);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29744);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34871);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4132);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47951);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_7__]);
_components__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 9667).then(__webpack_require__.bind(__webpack_require__, 49667)), {
  loadableGenerated: {
    modules: ["../screens/home/components/blocks/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 9965).then(__webpack_require__.bind(__webpack_require__, 9965)), {
  loadableGenerated: {
    modules: ["../screens/home/components/blocks/index.tsx -> " + './components/mobile']
  }
});

const Blocks = ({
  className
}) => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useScreenSize */ .eI)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()('home');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_10__/* .useStyles */ .y)();
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useBlocks */ .V)();
  const proposerProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_9__/* .useProfilesRecoil */ .Gs)(state.items.map(x => x.proposer));
  const mergedDataWithProfiles = state.items.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      proposer: proposerProfiles[i]
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, classes.root),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: classes.label,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "h2",
        children: t('latestBlocks')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: _utils_go_to_page__WEBPACK_IMPORTED_MODULE_6__/* .BLOCKS */ .RG,
        passHref: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "h4",
          className: "button",
          component: "a",
          children: t('seeMore')
        })
      })]
    }), !state.items.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .NoData */ .Jd, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
      children: [isDesktop ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Desktop, {
        className: classes.desktop,
        items: mergedDataWithProfiles
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Mobile, {
        className: classes.mobile,
        items: mergedDataWithProfiles
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, {
        className: classes.mobile
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: _utils_go_to_page__WEBPACK_IMPORTED_MODULE_6__/* .BLOCKS */ .RG,
        passHref: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "h4",
          component: "a",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.seeMoreFooter, classes.mobile, 'button'),
          children: t('seeMore')
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blocks);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        flexDirection: 'column',
        '& .button': {
          color: theme.palette.custom.fonts.fontTwo,
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },
      label: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      seeMoreFooter: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      mobile: {
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        }
      },
      desktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'block'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 53391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ useConsensus)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "numeral"
var external_numeral_ = __webpack_require__(88032);
var external_numeral_default = /*#__PURE__*/__webpack_require__.n(external_numeral_);
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(99634);
// EXTERNAL MODULE: external "bech32"
var external_bech32_ = __webpack_require__(9848);
;// CONCATENATED MODULE: ./src/utils/hex_to_bech32.ts

/**
 * Util that converts a hex in to bech32
 * @param address address
 * @param prefix chain address prefix
 * @returns bech32
 */

const hexToBech32 = (address, prefix) => {
  const addressBuffer = Buffer.from(address, 'hex');
  return external_bech32_.bech32.encode(prefix, external_bech32_.bech32.toWords(addressBuffer));
};
// EXTERNAL MODULE: ./src/configs/index.ts + 3 modules
var configs = __webpack_require__(41215);
// EXTERNAL MODULE: external "isomorphic-ws"
var external_isomorphic_ws_ = __webpack_require__(29417);
var external_isomorphic_ws_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_ws_);
;// CONCATENATED MODULE: ./src/screens/home/components/consensus/hooks.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const useConsensus = () => {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    height: 0,
    round: 0,
    step: 0,
    totalSteps: 5,
    roundCompletion: 0,
    proposer: ''
  });
  const websocketUrl = "wss://cosmos.everestchain.net/websocket" || 0;
  (0,external_react_.useEffect)(() => {
    console.log("WebSocketURL: ", websocketUrl);
    const client = new (external_isomorphic_ws_default())(websocketUrl);
    const stepHeader = {
      jsonrpc: '2.0',
      method: 'subscribe',
      id: 0,
      params: {
        query: 'tm.event=\'NewRoundStep\''
      }
    };
    const roundHeader = {
      jsonrpc: '2.0',
      method: 'subscribe',
      id: 0,
      params: {
        query: 'tm.event=\'NewRound\''
      }
    };

    client.onopen = () => {
      client.send(JSON.stringify(stepHeader));
      client.send(JSON.stringify(roundHeader));
    };

    client.onmessage = e => {
      const data = JSON.parse(e.data);
      const event = external_ramda_.pathOr('', ['result', 'data', 'type'], data);

      if (event === 'tendermint/event/NewRound') {
        formatNewRound(data);
      }

      if (event === 'tendermint/event/RoundState') {
        formatNewStep(data);
      }
    };

    client.onclose = () => {
      console.log('closing socket');
    };

    return () => {
      client.close();
    };
  }, []);

  const formatNewRound = data => {
    const height = external_numeral_default()(external_ramda_.pathOr('', ['result', 'data', 'value', 'height'], data)).value();
    const proposerHex = external_ramda_.pathOr('', ['result', 'data', 'value', 'proposer', 'address'], data);
    const consensusAddress = hexToBech32(proposerHex, configs/* chainConfig.prefix.consensus */.i.prefix.consensus);
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      height,
      proposer: consensusAddress
    }));
  };

  const formatNewStep = data => {
    const stepReference = {
      0: 0,
      RoundStepNewHeight: 1,
      RoundStepPropose: 2,
      RoundStepPrevote: 3,
      RoundStepPrecommit: 4,
      RoundStepCommit: 5
    };
    const round = external_ramda_.pathOr(0, ['result', 'data', 'value', 'round'], data);
    const step = stepReference[external_ramda_.pathOr(0, ['result', 'data', 'value', 'step'], data)];
    const roundCompletion = step / state.totalSteps * 100;
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      round,
      step,
      roundCompletion
    }));
  };

  return {
    state
  };
};

/***/ }),

/***/ 24180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9873);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53391);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Consensus = ({
  className
}) => {
  const {
    classes,
    theme
  } = (0,_styles__WEBPACK_IMPORTED_MODULE_8__/* .useStyles */ .y)();
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useConsensus */ .O)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()('home');
  const data = [{
    value: state.roundCompletion,
    fill: theme.palette.primary.main
  }];
  const circleSize = 200;
  const proposerProfile = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_7__/* .useProfileRecoil */ .Pl)(state.proposer);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
      variant: "h2",
      className: classes.label,
      children: t('consensus')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: classes.info,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: "caption",
          className: "label",
          component: "div",
          children: t('height')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: "caption",
          className: "label",
          component: "div",
          children: t('proposer')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: "h4",
          children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.height).format('0,0')
        }), state.proposer ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .AvatarName */ .gj, {
          address: proposerProfile.address,
          imageUrl: proposerProfile.imageUrl,
          name: proposerProfile.name
        }) : '-']
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: classes.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_6__.RadialBarChart, {
        className: classes.chart,
        width: circleSize,
        height: circleSize,
        cx: circleSize / 2,
        cy: circleSize / 2,
        innerRadius: 90,
        outerRadius: 90,
        barSize: 10,
        data: data,
        startAngle: 90,
        endAngle: -270,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.PolarAngleAxis, {
          type: "number",
          domain: [0, 100],
          angleAxisId: 0,
          tick: false
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.RadialBar, {
          background: true,
          dataKey: "value",
          cornerRadius: circleSize / 2
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("text", {
          x: circleSize / 2,
          y: circleSize / 2,
          textAnchor: "middle",
          dominantBaseline: "middle",
          className: "progress-label",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("tspan", {
            className: classes.chartPercentLabel,
            children: t('step', {
              step: numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.step).format('0,0')
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("text", {
          x: circleSize / 2 - 32,
          y: circleSize / 2 + 35,
          className: classes.chartExtraLabel,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("tspan", {
            className: classes.chartLabel,
            children: t('round', {
              round: numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.round).format('0,0')
            })
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Consensus);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39105);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'auto'
      },
      content: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
      },
      label: {
        marginBottom: theme.spacing(2)
      },
      chart: {
        '& .recharts-radial-bar-background-sector': {
          fill: color__WEBPACK_IMPORTED_MODULE_1___default()(theme.palette.primary.main).alpha(0.4).toString()
        }
      },
      chartPercentLabel: {
        fontSize: '2rem',
        fill: theme.palette.custom.fonts.fontOne
      },
      chartExtraLabel: {
        fill: theme.palette.custom.fonts.fontTwo
      },
      chartLabel: {
        fontSize: '1rem',
        color: theme.palette.custom.fonts.fontOne
      },
      info: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        color: theme.palette.custom.fonts.fontTwo,
        '& > *': {
          display: 'flex',
          alignItems: 'center',
          '& > *': {
            width: '50%'
          }
        },
        '& .label': {
          color: theme.palette.custom.fonts.fontThree,
          marginBottom: theme.spacing(0.5)
        },
        [theme.breakpoints.up('lg')]: {
          marginBottom: 0
        }
      }
    };
  })();
  return {
    classes: styles,
    theme: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)()
  };
};

/***/ }),

/***/ 2060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ data_blocks)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "numeral"
var external_numeral_ = __webpack_require__(88032);
var external_numeral_default = /*#__PURE__*/__webpack_require__.n(external_numeral_);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/home/components/data_blocks/components/single_block/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        padding: theme.spacing(2),
        background: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        height: '110px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        color: theme.palette.custom.fonts.fontFive,
        '& .label': {
          marginBottom: theme.spacing(2)
        },
        '& .content': {
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        },
        '& .description': {
          display: 'none',
          [theme.breakpoints.up('md')]: {
            display: 'block'
          }
        }
      }
    };
  })();
  return styles;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/home/components/data_blocks/components/single_block/index.tsx







const SingleBlock = ({
  className,
  label,
  value,
  description
}) => {
  const classes = useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()(className, classes.root),
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "body2",
      className: "label",
      children: label
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "content",
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "h1",
        children: value
      }), !!description && /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "caption",
        className: "description",
        children: description
      })]
    })]
  });
};

/* harmony default export */ const single_block = (SingleBlock);
;// CONCATENATED MODULE: ./src/screens/home/components/data_blocks/components/index.ts


;// CONCATENATED MODULE: ./src/screens/home/components/data_blocks/styles.ts

const styles_useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        display: 'grid',
        gridGap: theme.spacing(1),
        gridTemplateRows: 'auto',
        [theme.breakpoints.up('sm')]: {
          gridTemplateColumns: 'repeat(2, 1fr)'
        },
        [theme.breakpoints.up('lg')]: {
          gridGap: theme.spacing(2),
          gridTemplateColumns: 'repeat(4, 1fr)'
        }
      },
      blockHeight: {
        background: theme.palette.custom.primaryData.one
      },
      blockTime: {
        background: theme.palette.custom.primaryData.two
      },
      price: {
        background: theme.palette.custom.primaryData.three
      },
      validators: {
        background: theme.palette.custom.primaryData.four
      }
    };
  }, {
    index: 1
  })();
  return styles;
};
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(99634);
// EXTERNAL MODULE: ./src/graphql/types/general_types.tsx
var general_types = __webpack_require__(91619);
// EXTERNAL MODULE: ./src/configs/index.ts + 3 modules
var configs = __webpack_require__(41215);
;// CONCATENATED MODULE: ./src/screens/home/components/data_blocks/hooks.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const useDataBlocks = () => {
  var _chainConfig$tokenUni;

  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    blockHeight: 0,
    blockTime: 0,
    price: null,
    validators: {
      active: 0,
      total: 0
    }
  }); // ====================================
  // block height
  // ====================================

  (0,general_types/* useLatestBlockHeightListenerSubscription */.P7)({
    onSubscriptionData: data => {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        blockHeight: external_ramda_.pathOr(0, ['height', 0, 'height'], data.subscriptionData.data)
      }));
    }
  }); // ====================================
  // block time
  // ====================================

  (0,general_types/* useAverageBlockTimeQuery */.IV)({
    onCompleted: data => {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        blockTime: formatAverageBlockTime(data)
      }));
    }
  });

  const formatAverageBlockTime = data => {
    var _data$averageBlockTim, _data$averageBlockTim2;

    return (_data$averageBlockTim = (_data$averageBlockTim2 = data.averageBlockTime[0]) === null || _data$averageBlockTim2 === void 0 ? void 0 : _data$averageBlockTim2.averageTime) !== null && _data$averageBlockTim !== void 0 ? _data$averageBlockTim : state.blockTime;
  }; // ====================================
  // token price
  // ====================================


  (0,general_types/* useTokenPriceListenerSubscription */.qh)({
    variables: {
      denom: configs/* chainConfig */.i === null || configs/* chainConfig */.i === void 0 ? void 0 : (_chainConfig$tokenUni = configs/* chainConfig.tokenUnits */.i.tokenUnits[configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit]) === null || _chainConfig$tokenUni === void 0 ? void 0 : _chainConfig$tokenUni.display
    },
    onSubscriptionData: data => {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        price: formatTokenPrice(data.subscriptionData.data)
      }));
    }
  });

  const formatTokenPrice = data => {
    var _data$tokenPrice$;

    if (data !== null && data !== void 0 && (_data$tokenPrice$ = data.tokenPrice[0]) !== null && _data$tokenPrice$ !== void 0 && _data$tokenPrice$.price) {
      var _data$tokenPrice$2;

      return external_numeral_default()(external_numeral_default()(data === null || data === void 0 ? void 0 : (_data$tokenPrice$2 = data.tokenPrice[0]) === null || _data$tokenPrice$2 === void 0 ? void 0 : _data$tokenPrice$2.price).format('0.[00]', Math.floor)).value();
    }

    return state.price;
  }; // ====================================
  // validators
  // ====================================


  (0,general_types/* useActiveValidatorCountQuery */.NQ)({
    onCompleted: data => {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        validators: formatActiveValidatorsCount(data)
      }));
    }
  });

  const formatActiveValidatorsCount = data => {
    return {
      active: data.activeTotal.aggregate.count,
      total: data.total.aggregate.count
    };
  };

  return {
    state
  };
};
;// CONCATENATED MODULE: ./src/screens/home/components/data_blocks/index.tsx









const DataBlocks = ({
  className
}) => {
  const {
    t
  } = useTranslation_default()('home');
  const classes = styles_useStyles();
  const {
    state
  } = useDataBlocks();
  const data = [{
    key: t('latestBlock'),
    value: external_numeral_default()(state.blockHeight).format('0,0'),
    className: classes.blockHeight
  }, {
    key: t('averageBlockTime'),
    value: `${external_numeral_default()(state.blockTime).format('0.00')} s`,
    className: classes.blockTime
  }, {
    key: t('price'),
    value: state.price !== null ? `$${external_numeral_default()(state.price).format('0.00')}` : 'N/A',
    className: classes.price
  }, {
    key: t('activeValidators'),
    value: external_numeral_default()(state.validators.active).format('0,0'),
    description: t('outOfValidators', {
      count: external_numeral_default()(state.validators.total).format('0,0')
    }),
    className: classes.validators
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()(classes.root, className),
    children: data.map(x => /*#__PURE__*/jsx_runtime_.jsx(single_block, {
      label: x.key,
      value: x.value,
      description: x.description,
      className: x.className
    }, x.key))
  });
};

/* harmony default export */ const data_blocks = (DataBlocks);

/***/ }),

/***/ 31171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _online_voting_power__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "G": () => (/* reexport safe */ _token_price__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _online_voting_power__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20460);
/* harmony import */ var _token_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36765);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_token_price__WEBPACK_IMPORTED_MODULE_1__]);
_token_price__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ online_voting_power)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "numeral"
var external_numeral_ = __webpack_require__(88032);
var external_numeral_default = /*#__PURE__*/__webpack_require__.n(external_numeral_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
// EXTERNAL MODULE: external "color"
var external_color_ = __webpack_require__(39105);
var external_color_default = /*#__PURE__*/__webpack_require__.n(external_color_);
;// CONCATENATED MODULE: ./src/screens/home/components/hero/components/online_voting_power/styles.ts


const useStyles = percentage => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2)
        }
      },
      data: {
        display: 'flex',
        alignItems: 'flex-end',
        '& .primary__data': {
          color: theme.palette.primary.main,
          marginRight: theme.spacing(2),
          fontSize: '2.5rem'
        }
      },
      chart: {
        display: 'flex',
        height: '11px',
        borderRadius: theme.shape.borderRadius,
        background: external_color_default()(theme.palette.primary.main).alpha(0.2).string(),
        overflow: 'hidden',
        margin: theme.spacing(2, 0)
      },
      active: {
        width: `${percentage}%`,
        background: theme.palette.primary.main,
        transition: '0.3s'
      },
      itemsContainer: {
        [theme.breakpoints.up('lg')]: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }
      },
      item: {
        '&:not(:last-child)': {
          marginBottom: theme.spacing(2)
        },
        '& .label': {
          marginBottom: theme.spacing(1),
          color: theme.palette.custom.fonts.fontThree
        },
        '& p.value': {
          color: theme.palette.custom.fonts.fontTwo,
          '& .positive': {
            color: theme.palette.custom.tags.one
          },
          '& .negative': {
            color: theme.palette.custom.tags.three
          }
        },
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }
    };
  }, {
    index: 1
  })();
  return styles;
};
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(99634);
// EXTERNAL MODULE: ./src/graphql/types/general_types.tsx
var general_types = __webpack_require__(91619);
// EXTERNAL MODULE: ./src/configs/index.ts + 3 modules
var configs = __webpack_require__(41215);
// EXTERNAL MODULE: ./src/utils/format_token.ts
var format_token = __webpack_require__(42570);
;// CONCATENATED MODULE: ./src/screens/home/components/hero/components/online_voting_power/hooks.tsx






const initialState = {
  votingPower: 0,
  totalVotingPower: 0,
  activeValidators: 0
};
const useOnlineVotingPower = () => {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)(initialState);

  const handleSetState = stateChange => {
    setState(prevState => external_ramda_.mergeDeepLeft(stateChange, prevState));
  };

  (0,general_types/* useOnlineVotingPowerQuery */.JG)({
    onCompleted: data => {
      handleSetState(formatOnlineVotingPower(data));
    }
  });

  const formatOnlineVotingPower = data => {
    const votingPower = external_ramda_.pathOr(0, ['validatorVotingPowerAggregate', 'aggregate', 'sum', 'votingPower'], data);
    const bonded = external_ramda_.pathOr(0, ['stakingPool', 0, 'bonded'], data);
    const activeValidators = external_ramda_.pathOr(0, ['activeTotal', 'aggregate', 'count'], data);
    return {
      activeValidators,
      votingPower,
      totalVotingPower: external_numeral_default()((0,format_token/* formatToken */.nx)(bonded, configs/* chainConfig.votingPowerTokenUnit */.i.votingPowerTokenUnit).value).value()
    };
  };

  return {
    state
  };
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/home/components/hero/components/online_voting_power/index.tsx









const OnlineVotingPower = () => {
  const {
    t
  } = useTranslation_default()('home');
  const {
    state
  } = useOnlineVotingPower();
  const votingPowerPercent = state.totalVotingPower === 0 ? external_numeral_default()(0) : external_numeral_default()(state.votingPower / state.totalVotingPower * 100);
  const classes = useStyles(votingPowerPercent.format(0));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "h2",
      children: t('onlineVotingPower')
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.data,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "h3",
        className: "primary__data",
        children: `${votingPowerPercent.format('0,0.00', n => ~~n)}%`
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
        variant: "body1",
        children: [external_numeral_default()(state.votingPower).format('0,0'), ' ', "/", ' ', external_numeral_default()(state.totalVotingPower).format('0,0')]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.chart,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.active
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.itemsContainer,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h4",
          className: "label",
          children: t('validators')
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "body1",
          className: "value",
          children: external_numeral_default()(state.activeValidators).format('0,0')
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h4",
          className: "label",
          children: t('votingPowerPercent')
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "body1",
          className: "value",
          children: `${votingPowerPercent.format('0,0.00', n => ~~n)}%`
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h4",
          className: "label",
          children: t('votingPower')
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "body1",
          className: "value",
          children: external_numeral_default()(state.votingPower).format('0,0')
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h4",
          className: "label",
          children: t('totalVotingPower')
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "body1",
          className: "value",
          children: external_numeral_default()(state.totalVotingPower).format('0,0')
        })]
      })]
    })]
  });
};

/* harmony default export */ const online_voting_power = (OnlineVotingPower);

/***/ }),

/***/ 84109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ usePrice)
/* harmony export */ });
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

const usePrice = () => {
  const formatTime = (time, mode = 'locale') => {
    if (mode === 'utc') {
      return time.format('HH:mm');
    }

    return time.local().format('HH:mm');
  };

  const tickPriceFormatter = num => {
    return `$${numeral__WEBPACK_IMPORTED_MODULE_0___default()(num).format('0,0.[00]')}`;
  };

  return {
    tickPriceFormatter,
    formatTime
  };
};

/***/ }),

/***/ 36765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29744);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80201);
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93620);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61894);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84109);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_6__]);
_components__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const TokenPrice = props => {
  const {
    classes,
    theme
  } = (0,_styles__WEBPACK_IMPORTED_MODULE_9__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('home');
  const {
    tickPriceFormatter,
    formatTime
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__/* .usePrice */ .k)();
  const dateFormat = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_7__/* .readDate */ .cK);
  const formatItems = props.items.map(x => {
    return {
      time: formatTime(_utils_dayjs__WEBPACK_IMPORTED_MODULE_8__/* ["default"].utc */ .Z.utc(x.time), dateFormat),
      fullTime: (0,_utils_dayjs__WEBPACK_IMPORTED_MODULE_8__/* .formatDayJs */ .z)(_utils_dayjs__WEBPACK_IMPORTED_MODULE_8__/* ["default"].utc */ .Z.utc(x.time), dateFormat),
      value: x.value
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "h2",
      children: t('priceHistory')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      className: classes.chart,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__.ResponsiveContainer, {
        width: "99%",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_5__.AreaChart, {
          data: formatItems,
          margin: {
            top: 20,
            right: 30,
            left: 0,
            bottom: 0
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("defs", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("linearGradient", {
              id: "colorUv",
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("stop", {
                offset: "5%",
                stopColor: theme.palette.custom.primaryData.one,
                stopOpacity: 0.5
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("stop", {
                offset: "95%",
                stopColor: theme.palette.custom.primaryData.one,
                stopOpacity: 0.1
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, {
            stroke: theme.palette.divider
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__.XAxis, {
            dataKey: "time",
            tickLine: false
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, {
            tickLine: false,
            tickFormatter: tickPriceFormatter // tickCount={9}
            // domain={[0, 'dataMax + 1']}
            // domain={[0, 'dataMax']}

          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
            cursor: false,
            content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .CustomToolTip */ .EN, {
              children: x => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: "caption",
                    children: x.fullTime
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: "body1",
                    children: ["$", numeral__WEBPACK_IMPORTED_MODULE_1___default()(x.value).format('0,0.00')]
                  })]
                });
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(recharts__WEBPACK_IMPORTED_MODULE_5__.Area, {
            type: "monotone",
            dataKey: "value",
            stroke: theme.palette.custom.primaryData.one,
            fillOpacity: 0.3,
            fill: theme.palette.custom.primaryData.one
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenPrice);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(() => {
    return {
      chart: {
        height: '285px',
        width: '100%',
        '& .yAxis .recharts-cartesian-axis-tick:first-child': {
          display: 'none'
        }
      }
    };
  }, {
    index: 1
  })();
  return {
    classes: styles,
    theme: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)()
  };
};

/***/ }),

/***/ 41294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useHero)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91619);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41215);




const useHero = () => {
  var _chainConfig$tokenUni;

  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    loading: true,
    exists: true,
    tokenPriceHistory: []
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_1__.mergeDeepLeft(stateChange, prevState));
  };

  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_2__/* .useTokenPriceHistoryQuery */ .C_)({
    variables: {
      limit: 10,
      denom: _configs__WEBPACK_IMPORTED_MODULE_3__/* .chainConfig */ .i === null || _configs__WEBPACK_IMPORTED_MODULE_3__/* .chainConfig */ .i === void 0 ? void 0 : (_chainConfig$tokenUni = _configs__WEBPACK_IMPORTED_MODULE_3__/* .chainConfig.tokenUnits */ .i.tokenUnits[_configs__WEBPACK_IMPORTED_MODULE_3__/* .chainConfig.primaryTokenUnit */ .i.primaryTokenUnit]) === null || _chainConfig$tokenUni === void 0 ? void 0 : _chainConfig$tokenUni.display
    },
    onCompleted: data => {
      const newState = {
        loading: false
      };

      if (data.tokenPrice.length === 10) {
        newState.tokenPriceHistory = data.tokenPrice.reverse().map(x => {
          return {
            time: x.timestamp,
            value: x.price
          };
        });
      }

      handleSetState(newState);
    },
    onError: () => {
      handleSetState({
        loading: false
      });
    }
  });
  return {
    state
  };
};

/***/ }),

/***/ 77055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29744);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31171);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Hero = props => {
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useHero */ .u)();
  let component = null;

  if (!state.loading) {
    if (state.tokenPriceHistory.length) {
      component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .TokenPrice */ .G, {
        items: state.tokenPriceHistory
      });
    } else {
      component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .OnlineVotingPower */ .y, {});
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .xu, {
    className: props.className,
    children: component
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kt": () => (/* reexport safe */ _data_blocks__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "Lj": () => (/* reexport safe */ _consensus__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "sr": () => (/* reexport safe */ _tokenomics__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "no": () => (/* reexport safe */ _blocks__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "PU": () => (/* reexport safe */ _transactions__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "VM": () => (/* reexport safe */ _hero__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _data_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2060);
/* harmony import */ var _consensus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24180);
/* harmony import */ var _tokenomics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(717);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49925);
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54278);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_consensus__WEBPACK_IMPORTED_MODULE_1__, _tokenomics__WEBPACK_IMPORTED_MODULE_2__, _blocks__WEBPACK_IMPORTED_MODULE_3__, _transactions__WEBPACK_IMPORTED_MODULE_4__, _hero__WEBPACK_IMPORTED_MODULE_5__]);
([_consensus__WEBPACK_IMPORTED_MODULE_1__, _tokenomics__WEBPACK_IMPORTED_MODULE_2__, _blocks__WEBPACK_IMPORTED_MODULE_3__, _transactions__WEBPACK_IMPORTED_MODULE_4__, _hero__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useTokenomics)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91619);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50183);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42570);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const useTokenomics = () => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    bonded: 0,
    unbonded: 0,
    unbonding: 0,
    total: 0,
    denom: ''
  });
  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__/* .useTokenomicsQuery */ .pR)({
    onCompleted: data => {
      setState(formatTokenomics(data));
    }
  });

  const formatTokenomics = data => {
    const results = _objectSpread({}, state);

    const stakingParams = _models__WEBPACK_IMPORTED_MODULE_4__/* .StakingParams.fromJson */ .sM.fromJson(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr({}, ['stakingParams', 0, 'params'], data));
    results.denom = stakingParams.bondDenom;
    const [total] = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['supply', 0, 'coins'], data).filter(x => x.denom === results.denom);

    if (total) {
      results.total = numeral__WEBPACK_IMPORTED_MODULE_2___default()((0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatToken */ .nx)(total.amount, total.denom).value).value();
    }

    const bonded = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(state.bonded, ['stakingPool', 0, 'bonded'], data);
    results.bonded = numeral__WEBPACK_IMPORTED_MODULE_2___default()((0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatToken */ .nx)(bonded, results.denom).value).value();
    const unbonding = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(state.bonded, ['stakingPool', 0, 'unbonded'], data);
    results.unbonding = numeral__WEBPACK_IMPORTED_MODULE_2___default()((0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatToken */ .nx)(unbonding, results.denom).value).value();
    const unbonded = results.total - results.unbonding - results.bonded;
    results.unbonded = unbonded;
    return results;
  };

  return {
    state
  };
};

/***/ }),

/***/ 717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41215);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75772);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37793);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const Tokenomics = ({
  className
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()('home');
  const {
    classes,
    theme
  } = (0,_styles__WEBPACK_IMPORTED_MODULE_8__/* .useStyles */ .y)();
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useTokenomics */ .P)();
  const data = [{
    legendKey: 'bonded',
    percentKey: 'bondedPercent',
    value: numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.bonded).format('0,0'),
    rawValue: state.bonded,
    percent: `${numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.bonded * 100 / state.total).format('0.00')}%`,
    fill: theme.palette.custom.tokenomics.one
  }, {
    legendKey: 'unbonded',
    percentKey: 'unbondedPercent',
    value: numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.unbonded).format('0,0'),
    rawValue: state.unbonded,
    percent: `${numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.unbonded * 100 / state.total).format('0.00')}%`,
    fill: theme.palette.custom.tokenomics.two
  }, {
    legendKey: 'unbonding',
    value: numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.unbonding).format('0,0'),
    rawValue: state.unbonding,
    percent: `${numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.unbonding * 100 / state.total).format('0.00')}%`,
    fill: theme.palette.custom.tokenomics.three
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
      variant: "h2",
      className: classes.label,
      children: t('tokenomics')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: classes.data,
      children: data.slice(0, 2).map(x => {
        var _chainConfig$tokenUni, _chainConfig$tokenUni2;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "data__item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variant: "h4",
            children: [x.value, ' ', (_chainConfig$tokenUni = _configs__WEBPACK_IMPORTED_MODULE_7__/* .chainConfig.tokenUnits */ .i.tokenUnits[state.denom]) === null || _chainConfig$tokenUni === void 0 ? void 0 : (_chainConfig$tokenUni2 = _chainConfig$tokenUni.display) === null || _chainConfig$tokenUni2 === void 0 ? void 0 : _chainConfig$tokenUni2.toUpperCase()]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variant: "caption",
            children: t(x.percentKey, {
              percent: x.percent
            })
          })]
        }, x.percentKey);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: classes.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_6__.PieChart, {
        width: 200,
        height: 100,
        cy: 100,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.Pie, {
          stroke: "none" // cornerRadius={40}
          ,
          cy: 90,
          data: data,
          startAngle: 180,
          endAngle: 0 // innerRadius={79}
          ,
          outerRadius: 90,
          fill: "#8884d8" // paddingAngle={-10}
          ,
          dataKey: "rawValue" // stroke={theme.palette.background.paper}
          // strokeWidth={3}
          ,
          isAnimationActive: false,
          children: data.map(entry => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.Cell, {
              fill: entry.fill
            }, entry.legendKey);
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
          content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .CustomToolTip */ .EN, {
            children: x => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  variant: "caption",
                  children: t(x.legendKey)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                  variant: "body1",
                  children: [x.value, ' ', "(", x.percent, ")"]
                })]
              });
            }
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: classes.legends,
        children: data.map(x => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
            className: "legends__item",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "caption",
              children: t(x.legendKey)
            })
          }, x.legendKey);
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tokenomics);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      },
      label: {
        marginBottom: theme.spacing(2)
      },
      data: {
        display: 'flex',
        '& .data__item': {
          width: '50%',
          whiteSpace: 'pre-wrap',
          '& h4': {
            color: theme.palette.custom.fonts.fontTwo
          },
          '& .MuiTypography-caption': {
            color: theme.palette.custom.fonts.fontThree
          }
        }
      },
      legends: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
        '& .MuiTypography-caption': {
          color: theme.palette.custom.fonts.fontThree
        },
        '& .legends__item': {
          width: '50%',
          '&:before': {
            content: '""',
            display: 'inline-block',
            width: '12px',
            height: '12px',
            marginRight: '5px'
          },
          '&:first-child:before': {
            background: theme.palette.custom.tokenomics.one
          },
          '&:nth-child(2):before': {
            background: theme.palette.custom.tokenomics.two
          },
          '&:last-child:before': {
            background: theme.palette.custom.tokenomics.three
          },
          '& .caption__percent': {
            color: theme.palette.custom.fonts.fontThree
          }
        }
      },
      content: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
      }
    };
  })();
  return {
    classes: styles,
    theme: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)()
  };
};

/***/ }),

/***/ 48035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91619);


const useTransactions = () => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    items: []
  }); // ================================
  // txs subscription
  // ================================

  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_1__/* .useTransactionsListenerSubscription */ .MN)({
    onSubscriptionData: data => {
      setState({
        items: formatTransactions(data.subscriptionData.data)
      });
    }
  });

  const formatTransactions = data => {
    return data.transactions.map(x => {
      return {
        height: x.height,
        hash: x.hash,
        success: x.success,
        timestamp: x.block.timestamp,
        messages: x.messages.length
      };
    });
  };

  return {
    state
  };
};

/***/ }),

/***/ 54278:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75657);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65117);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_go_to_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48625);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29744);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34871);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20670);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48035);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_7__]);
_components__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 4582).then(__webpack_require__.bind(__webpack_require__, 94582)), {
  loadableGenerated: {
    modules: ["../screens/home/components/transactions/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 5124).then(__webpack_require__.bind(__webpack_require__, 55124)), {
  loadableGenerated: {
    modules: ["../screens/home/components/transactions/index.tsx -> " + './components/mobile']
  }
});

const Transactions = ({
  className
}) => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useScreenSize */ .eI)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()('home');
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useTransactions */ .n)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_9__/* .useStyles */ .y)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, classes.root),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: classes.label,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        variant: "h2",
        children: t('latestTransactions')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: _utils_go_to_page__WEBPACK_IMPORTED_MODULE_6__/* .TRANSACTIONS */ .wO,
        passHref: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: "h4",
          className: "button",
          component: "a",
          children: t('seeMore')
        })
      })]
    }), !state.items.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .NoData */ .Jd, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [isDesktop ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Desktop, {
        className: classes.desktop,
        items: state.items
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Mobile, {
        className: classes.mobile,
        items: state.items
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Divider, {
        className: classes.mobile
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: _utils_go_to_page__WEBPACK_IMPORTED_MODULE_6__/* .TRANSACTIONS */ .wO,
        passHref: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: "h4",
          component: "a",
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.seeMoreFooter, classes.mobile, 'button'),
          children: t('seeMore')
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transactions);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        flexDirection: 'column',
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        '& .button': {
          color: theme.palette.custom.fonts.fontTwo,
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },
      label: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      seeMoreFooter: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      mobile: {
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        }
      },
      desktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'block'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 96561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29744);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60985);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85780);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_3__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Home = () => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_2__/* .useStyles */ .y)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .Ar, {
    className: classes.root,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .DataBlocks */ .Kt, {
      className: classes.dataBlocks
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Hero */ .VM, {
      className: classes.hero
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Tokenomics */ .sr, {
      className: classes.tokenomics
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Consensus */ .Lj, {
      className: classes.consensus
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Blocks */ .no, {
      className: classes.blocks
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Transactions */ .PU, {
      className: classes.transactions
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      root: _objectSpread(_objectSpread({}, theme.mixins.layout), {}, {
        display: 'grid',
        gridGap: theme.spacing(1),
        gridTemplateRows: 'auto auto 1fr',
        gridTemplateColumns: 'repeat(1, 1fr)',
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: 'repeat(2, 1fr)'
        },
        [theme.breakpoints.up('lg')]: {
          gridGap: theme.spacing(2),
          gridTemplateColumns: 'repeat(4, 1fr)'
        }
      }),
      dataBlocks: {
        [theme.breakpoints.up('md')]: {
          gridColumn: '1 / 3'
        },
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 5'
        }
      },
      hero: {
        [theme.breakpoints.up('md')]: {
          gridColumn: '1 / 3'
        },
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 3',
          // height: '400px', // if we can get the change feature
          height: '350px'
        }
      },
      tokenomics: {
        height: '375px',
        [theme.breakpoints.up('md')]: {
          gridColumn: '1 / 2'
        },
        [theme.breakpoints.up('lg')]: {
          gridColumn: '3 / 4',
          height: '100%'
        }
      },
      consensus: {
        height: '375px',
        [theme.breakpoints.up('md')]: {
          gridColumn: '2 / 3'
        },
        [theme.breakpoints.up('lg')]: {
          gridColumn: '4 / 5',
          height: '100%'
        }
      },
      blocks: {
        [theme.breakpoints.up('md')]: {
          gridColumn: '1 / 3'
        },
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 3'
        }
      },
      transactions: {
        [theme.breakpoints.up('md')]: {
          gridColumn: '1 / 3'
        },
        [theme.breakpoints.up('lg')]: {
          gridColumn: '3 / 5'
        }
      }
    };
  }, {
    index: 1
  })();
  return styles;
};

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 48308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 72105:
/***/ ((module) => {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ 27806:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 43349:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9848:
/***/ ((module) => {

module.exports = require("bech32");

/***/ }),

/***/ 22575:
/***/ ((module) => {

module.exports = require("big.js");

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 39105:
/***/ ((module) => {

module.exports = require("color");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 45334:
/***/ ((module) => {

module.exports = require("dayjs/plugin/advancedFormat");

/***/ }),

/***/ 14195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 60811:
/***/ ((module) => {

module.exports = require("dayjs/plugin/updateLocale");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 81320:
/***/ ((module) => {

module.exports = require("dompurify");

/***/ }),

/***/ 29417:
/***/ ((module) => {

module.exports = require("isomorphic-ws");

/***/ }),

/***/ 11904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ 74137:
/***/ ((module) => {

module.exports = require("next-translate/Trans");

/***/ }),

/***/ 87462:
/***/ ((module) => {

module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ 5508:
/***/ ((module) => {

module.exports = require("next-translate/setLanguage");

/***/ }),

/***/ 60866:
/***/ ((module) => {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 60562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 64365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 88032:
/***/ ((module) => {

module.exports = require("numeral");

/***/ }),

/***/ 99634:
/***/ ((module) => {

module.exports = require("ramda");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 88041:
/***/ ((module) => {

module.exports = require("react-virtualized-auto-sizer");

/***/ }),

/***/ 80551:
/***/ ((module) => {

module.exports = require("react-window");

/***/ }),

/***/ 30353:
/***/ ((module) => {

module.exports = require("react-window-infinite-loader");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 23655:
/***/ ((module) => {

module.exports = require("recharts");

/***/ }),

/***/ 29755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 84562:
/***/ ((module) => {

module.exports = import("jdenticon");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4289,5657,5117,1371,8625,9744], () => (__webpack_exec__(46619)));
module.exports = __webpack_exports__;

})();
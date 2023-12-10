"use strict";
(() => {
var exports = {};
exports.id = 6222;
exports.ids = [6222];
exports.modules = {

/***/ 76776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91371);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_screens_block_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93109);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_screens_block_details__WEBPACK_IMPORTED_MODULE_2__]);
_src_screens_block_details__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore




const BlockDetailsPage = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_src_screens_block_details__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockDetailsPage); // @ts-ignore

async function getServerSideProps(ctx) {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return {
    // @ts-ignore
    // @ts-ignore
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread({}, ctx), {}, {
      // @ts-ignore
      pathname: '/blocks/[height]',
      // @ts-ignore
      loaderName: 'getServerSideProps'
    }, (_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default())))) // @ts-ignore

  }; // @ts-ignore
} // @ts-ignore
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g2": () => (/* reexport safe */ _overview__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "PU": () => (/* reexport safe */ _transactions__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "iL": () => (/* reexport safe */ _signatures__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58585);
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15456);
/* harmony import */ var _signatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_overview__WEBPACK_IMPORTED_MODULE_0__, _transactions__WEBPACK_IMPORTED_MODULE_1__, _signatures__WEBPACK_IMPORTED_MODULE_2__]);
([_overview__WEBPACK_IMPORTED_MODULE_0__, _transactions__WEBPACK_IMPORTED_MODULE_1__, _signatures__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58585:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93620);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33067);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80201);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29744);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_8__]);
_components__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Overview = (props, {
  className
}) => {
  const proposer = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfileRecoil */ .Pl)(props.proposer);
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('blocks');
  const dateFormat = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_7__/* .readDate */ .cK);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .BoxDetails */ .C, {
    className: className,
    title: t('overview'),
    details: [{
      label: t('height'),
      detail: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "body1",
        className: "value",
        children: numeral__WEBPACK_IMPORTED_MODULE_1___default()(props.height).format('0,0')
      })
    }, {
      label: t('hash'),
      detail: props.hash
    }, {
      label: t('proposer'),
      detail: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .AvatarName */ .gj, {
        address: props.proposer,
        imageUrl: proposer.imageUrl,
        name: proposer.name
      })
    }, {
      label: t('time'),
      detail: (0,_utils_dayjs__WEBPACK_IMPORTED_MODULE_2__/* .formatDayJs */ .z)(_utils_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].utc */ .Z.utc(props.timestamp), dateFormat)
    }, {
      label: t('txs'),
      detail: numeral__WEBPACK_IMPORTED_MODULE_1___default()(props.txs).format('0,0')
    }]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65117);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33067);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34871);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60327);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 6282).then(__webpack_require__.bind(__webpack_require__, 46282)), {
  loadableGenerated: {
    modules: ["../screens/block_details/components/signatures/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 4260).then(__webpack_require__.bind(__webpack_require__, 24260)), {
  loadableGenerated: {
    modules: ["../screens/block_details/components/signatures/index.tsx -> " + './components/mobile']
  }
});

const Signatures = ({
  className,
  signatures
}) => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useScreenSize */ .eI)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('blocks');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_8__/* .useStyles */ .y)();
  const formattedSignatures = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfilesRecoil */ .Gs)(signatures);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
      className: classes.title,
      variant: "h2",
      children: t('signatures')
    }), !signatures.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .NoData */ .Jd, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: classes.wrapper,
      children: isDesktop ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Desktop, {
        className: classes.desktop,
        signatures: formattedSignatures
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Mobile, {
        className: classes.mobile,
        signatures: formattedSignatures
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signatures);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60327:
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
        '& .MuiTypography-h2': {
          paddingBottom: theme.spacing(2)
        }
      },
      wrapper: {
        flex: 1
      },
      title: {
        marginBottom: theme.spacing(2)
      },
      mobile: {
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        }
      },
      desktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'flex'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 15456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29744);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80201);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88139);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Transactions = ({
  className,
  transactions
}) => {
  const txListFormat = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_6__/* .readTx */ .er);
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('transactions');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: classes.header,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "h2",
        children: t('transactions')
      })
    }), txListFormat === 'compact' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .TransactionsList */ .RG, {
      transactions: transactions,
      itemCount: transactions.length,
      className: classes.list,
      hasNextPage: false,
      isNextPageLoading: false,
      loadNextPage: () => null,
      loadMoreItems: () => null,
      isItemLoaded: () => true
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .TransactionListDetails */ .hc, {
      transactions: transactions,
      itemCount: transactions.length,
      className: classes.list,
      hasNextPage: false,
      isNextPageLoading: false,
      loadNextPage: () => null,
      loadMoreItems: () => null,
      isItemLoaded: () => true
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transactions);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88139:
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
        minHeight: '500px',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('lg')]: {
          height: '100%'
        }
      },
      header: {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      },
      list: {
        flex: 1
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 90880:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useBlockDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91619);
/* harmony import */ var _msg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_msg__WEBPACK_IMPORTED_MODULE_5__]);
_msg__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const useBlockDetails = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    loading: true,
    exists: true,
    overview: {
      height: 0,
      hash: '',
      txs: 0,
      timestamp: '',
      proposer: ''
    },
    signatures: [],
    transactions: []
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_1__.mergeDeepLeft(stateChange, prevState));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // reset every call
    handleSetState({
      loading: true,
      exists: true
    });
  }, [router.query.height]); // ==========================
  // Fetch Data
  // ==========================

  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__/* .useBlockDetailsQuery */ .wW)({
    variables: {
      height: numeral__WEBPACK_IMPORTED_MODULE_2___default()(router.query.height).value(),
      signatureHeight: numeral__WEBPACK_IMPORTED_MODULE_2___default()(router.query.height).value() + 1
    },
    onCompleted: data => {
      handleSetState(formatRaws(data));
    }
  });

  const formatRaws = data => {
    const stateChange = {
      loading: false
    };

    if (!data.block.length) {
      stateChange.exists = false;
      return stateChange;
    } // ==========================
    // Overview
    // ==========================


    const formatOverview = () => {
      const proposerAddress = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['block', 0, 'validator', 'validatorInfo', 'operatorAddress'], data);
      const overview = {
        height: data.block[0].height,
        hash: data.block[0].hash,
        txs: data.block[0].txs,
        timestamp: data.block[0].timestamp,
        proposer: proposerAddress
      };
      return overview;
    };

    stateChange.overview = formatOverview(); // ==========================
    // Signatures
    // ==========================

    const formatSignatures = () => {
      const signatures = data.preCommits.filter(x => {
        var _x$validator;

        return x === null || x === void 0 ? void 0 : (_x$validator = x.validator) === null || _x$validator === void 0 ? void 0 : _x$validator.validatorInfo;
      }).map(x => {
        return x.validator.validatorInfo.operatorAddress;
      });
      return signatures;
    };

    stateChange.signatures = formatSignatures(); // ==========================
    // Transactions
    // ==========================

    const formatTransactions = () => {
      const transactions = data.transaction.map(x => {
        const messages = (0,_msg__WEBPACK_IMPORTED_MODULE_5__/* .convertMsgsToModels */ .B8)(x);
        return {
          height: x.height,
          hash: x.hash,
          success: x.success,
          timestamp: stateChange.overview.timestamp,
          messages: {
            count: x.messages.length,
            items: messages
          }
        };
      });
      return transactions;
    };

    stateChange.transactions = formatTransactions();
    return stateChange;
  };

  return {
    state
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29744);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24873);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1437);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90880);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__, _hooks__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__, _hooks__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const BlockDetails = () => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('blocks');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_5__/* .useStyles */ .y)();
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useBlockDetails */ .n)();
  const {
    overview,
    signatures,
    transactions
  } = state;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
      title: t('blockDetails'),
      openGraph: {
        title: t('blockDetails')
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
      navTitle: t('blockDetails'),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .LoadAndExist */ .Wf, {
        loading: state.loading,
        exists: state.exists,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          className: classes.root,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Overview */ .g2, {
            height: overview.height,
            hash: overview.hash,
            proposer: overview.proposer,
            timestamp: overview.timestamp,
            txs: overview.txs
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Signatures */ .iL, {
            className: classes.signatures,
            signatures: signatures
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Transactions */ .PU, {
            transactions: transactions
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockDetails);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1437:
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
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr',
        gridTemplateColumns: '1fr',
        gridGap: theme.spacing(1),
        [theme.breakpoints.up('lg')]: {
          gridGap: theme.spacing(2)
        }
      }),
      signatures: {
        height: '450px',
        [theme.breakpoints.up('lg')]: {
          height: '450px'
        }
      }
    };
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

/***/ 11904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ 16641:
/***/ ((module) => {

module.exports = require("next-seo");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4289,5657,5117,1371,8625,9744], () => (__webpack_exec__(76776)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 3424;
exports.ids = [3424];
exports.modules = {

/***/ 42388:
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
/* harmony import */ var _src_screens_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39844);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_screens_params__WEBPACK_IMPORTED_MODULE_2__]);
_src_screens_params__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore




const ParamsPage = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_src_screens_params__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParamsPage); // @ts-ignore

async function getStaticProps(ctx) {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return {
    // @ts-ignore
    // @ts-ignore
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread({}, ctx), {}, {
      // @ts-ignore
      pathname: '/params/index',
      // @ts-ignore
      loaderName: 'getStaticProps'
    }, (_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default())))) // @ts-ignore

  }; // @ts-ignore
} // @ts-ignore
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91619);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42570);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41215);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50183);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const initialState = {
  loading: true,
  exists: true,
  staking: null,
  slashing: null,
  minting: null,
  distribution: null,
  gov: null
};
const useParams = () => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_2__.mergeDeepLeft(stateChange, prevState));
  }; // ================================
  // param query
  // ================================


  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__/* .useParamsQuery */ .FL)({
    onError: () => {
      handleSetState({
        loading: false
      });
    },
    onCompleted: data => {
      handleSetState(_objectSpread({
        loading: false
      }, formatParam(data)));
    }
  });

  const formatParam = data => {
    const results = {}; // ================================
    // staking
    // ================================

    const formatStaking = () => {
      if (data.stakingParams.length) {
        const stakingParamsRaw = _models__WEBPACK_IMPORTED_MODULE_6__/* .StakingParams.fromJson */ .sM.fromJson(ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr({}, ['stakingParams', 0, 'params'], data));
        return {
          bondDenom: stakingParamsRaw.bondDenom,
          unbondingTime: stakingParamsRaw.unbondingTime,
          maxEntries: stakingParamsRaw.maxEntries,
          historicalEntries: stakingParamsRaw.historicalEntries,
          maxValidators: stakingParamsRaw.maxValidators
        };
      }

      return null;
    };

    results.staking = formatStaking(); // ================================
    // slashing
    // ================================

    const formatSlashing = () => {
      if (data.slashingParams.length) {
        const slashingParamsRaw = _models__WEBPACK_IMPORTED_MODULE_6__/* .SlashingParams.fromJson */ .HC.fromJson(ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr({}, ['slashingParams', 0, 'params'], data));
        return {
          downtimeJailDuration: slashingParamsRaw.downtimeJailDuration,
          minSignedPerWindow: slashingParamsRaw.minSignedPerWindow,
          signedBlockWindow: slashingParamsRaw.signedBlockWindow,
          slashFractionDoubleSign: slashingParamsRaw.slashFractionDoubleSign,
          slashFractionDowntime: slashingParamsRaw.slashFractionDowntime
        };
      }

      return null;
    };

    results.slashing = formatSlashing(); // ================================
    // minting
    // ================================

    const formatMint = () => {
      if (data.mintParams.length) {
        const mintParamsRaw = _models__WEBPACK_IMPORTED_MODULE_6__/* .MintParams.fromJson */ .fY.fromJson(ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr({}, ['mintParams', 0, 'params'], data));
        return {
          blocksPerYear: mintParamsRaw.blocksPerYear,
          goalBonded: mintParamsRaw.goalBonded,
          inflationMax: mintParamsRaw.inflationMax,
          inflationMin: mintParamsRaw.inflationMin,
          inflationRateChange: mintParamsRaw.inflationRateChange,
          mintDenom: mintParamsRaw.mintDenom
        };
      }

      return null;
    };

    results.minting = formatMint(); // ================================
    // distribution
    // ================================

    const formatDistribution = () => {
      if (data.distributionParams.length) {
        const distributionParamsRaw = _models__WEBPACK_IMPORTED_MODULE_6__/* .DistributionParams.fromJson */ .J4.fromJson(ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr({}, ['distributionParams', 0, 'params'], data));
        return {
          baseProposerReward: distributionParamsRaw.baseProposerReward,
          bonusProposerReward: distributionParamsRaw.bonusProposerReward,
          communityTax: distributionParamsRaw.communityTax,
          withdrawAddressEnabled: distributionParamsRaw.withdrawAddressEnabled
        };
      }

      return null;
    };

    results.distribution = formatDistribution(); // ================================
    // distribution
    // ================================

    const formatGov = () => {
      if (data.govParams.length) {
        const govParamsRaw = _models__WEBPACK_IMPORTED_MODULE_6__/* .GovParams.fromJson */ .aC.fromJson(ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr({}, ['govParams', 0], data));
        return {
          minDeposit: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_4__/* .formatToken */ .nx)(ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(0, [0, 'amount'], govParamsRaw.depositParams.minDeposit), ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(_configs__WEBPACK_IMPORTED_MODULE_5__/* .chainConfig.primaryTokenUnit */ .i.primaryTokenUnit, [0, 'denom'], govParamsRaw.depositParams.minDeposit)),
          maxDepositPeriod: govParamsRaw.depositParams.maxDepositPeriod,
          quorum: numeral__WEBPACK_IMPORTED_MODULE_1___default()(numeral__WEBPACK_IMPORTED_MODULE_1___default()(govParamsRaw.tallyParams.quorum).format('0.[00]')).value(),
          threshold: numeral__WEBPACK_IMPORTED_MODULE_1___default()(numeral__WEBPACK_IMPORTED_MODULE_1___default()(govParamsRaw.tallyParams.threshold).format('0.[00]')).value(),
          vetoThreshold: numeral__WEBPACK_IMPORTED_MODULE_1___default()(numeral__WEBPACK_IMPORTED_MODULE_1___default()(govParamsRaw.tallyParams.vetoThreshold).format('0.[00]')).value(),
          votingPeriod: govParamsRaw.votingParams.votingPeriod
        };
      }

      return null;
    };

    results.gov = formatGov();
    return results;
  };

  return {
    state
  };
};

/***/ }),

/***/ 39844:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21773);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39702);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64891);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);
_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Params = () => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('params');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_4__/* .useStyles */ .y)();
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useParams */ .U)();
  const staking = state.staking ? {
    title: t('staking'),
    details: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatStaking */ .bw)(state.staking, t)
  } : null;
  const slashing = state.slashing ? {
    title: t('slashing'),
    details: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatSlashing */ .GC)(state.slashing, t)
  } : null;
  const minting = state.minting ? {
    title: t('minting'),
    details: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatMinting */ .jy)(state.minting, t)
  } : null;
  const distribution = state.distribution ? {
    title: t('distribution'),
    details: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatDistribution */ .Xr)(state.distribution, t)
  } : null;
  const gov = state.gov ? {
    title: t('gov'),
    details: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatGov */ .NV)(state.gov, t)
  } : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
      title: t('params'),
      openGraph: {
        title: t('params')
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
      navTitle: t('params'),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .LoadAndExist */ .Wf, {
        loading: state.loading,
        exists: state.exists,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          className: classes.root,
          children: [staking && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .BoxDetails */ .C, _objectSpread({}, staking)), slashing && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .BoxDetails */ .C, _objectSpread({}, slashing)), minting && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .BoxDetails */ .C, _objectSpread({}, minting)), distribution && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .BoxDetails */ .C, _objectSpread({}, distribution)), gov && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .BoxDetails */ .C, _objectSpread({}, gov))]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Params);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21773:
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
        gridTemplateRows: 'auto',
        gridGap: theme.spacing(1),
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        [theme.breakpoints.up('lg')]: {
          gridGap: theme.spacing(2),
          gridTemplateColumns: 'repeat(2, 1fr)'
        }
      })
    };
  })();
  return styles;
};

/***/ }),

/***/ 64891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Xr": () => (/* binding */ formatDistribution),
  "NV": () => (/* binding */ formatGov),
  "jy": () => (/* binding */ formatMinting),
  "GC": () => (/* binding */ formatSlashing),
  "bw": () => (/* binding */ formatStaking)
});

;// CONCATENATED MODULE: ./src/utils/time.ts
/**
 * util to conver nano to seconds
 * @param nano
 * @returns seconds
 */
const nanoToSeconds = nano => {
  return nano / 1000000000;
};
/**
 * Util to convert seconds to days
 * @param seconds
 * @returns days
 */

const secondsToDays = seconds => {
  return seconds / (3600 * 24);
};
// EXTERNAL MODULE: external "numeral"
var external_numeral_ = __webpack_require__(88032);
var external_numeral_default = /*#__PURE__*/__webpack_require__.n(external_numeral_);
;// CONCATENATED MODULE: ./src/screens/params/utils.ts



const convertBySeconds = (seconds, t) => {
  const SECONDS_IN_DAY = 86400;
  return seconds >= SECONDS_IN_DAY ? t('days', {
    day: secondsToDays(seconds)
  }) : t('seconds', {
    second: seconds
  });
};

const formatStaking = (data, t) => {
  return [{
    label: t('bondDenom'),
    detail: data.bondDenom
  }, {
    label: t('unbondingTime'),
    detail: convertBySeconds(nanoToSeconds(data.unbondingTime), t)
  }, {
    label: t('maxEntries'),
    detail: external_numeral_default()(data.maxEntries).format('0,0')
  }, {
    label: t('historicalEntries'),
    detail: external_numeral_default()(data.historicalEntries).format('0,0')
  }, {
    label: t('maxValidators'),
    detail: external_numeral_default()(data.maxValidators).format('0,0')
  }];
};
const formatSlashing = (data, t) => {
  return [{
    label: t('downtimeJailDuration'),
    detail: t('seconds', {
      second: external_numeral_default()(nanoToSeconds(data.downtimeJailDuration)).format('0,0')
    })
  }, {
    label: t('minSignedPerWindow'),
    detail: `${external_numeral_default()(data.minSignedPerWindow * 100).format('0.[00]')}%`
  }, {
    label: t('signedBlockWindow'),
    detail: external_numeral_default()(data.signedBlockWindow).format('0,0')
  }, {
    label: t('slashFractionDoubleSign'),
    detail: `${data.slashFractionDoubleSign * 100} / 100`
  }, {
    label: t('slashFractionDowntime'),
    detail: `${data.slashFractionDowntime * 10000} / ${external_numeral_default()(10000).format('0,0')}`
  }];
};
const formatMinting = (data, t) => {
  return [{
    label: t('blocksPerYear'),
    detail: external_numeral_default()(data.blocksPerYear).format('0,0')
  }, {
    label: t('goalBonded'),
    detail: `${external_numeral_default()(data.goalBonded * 100).format('0.[00]')}%`
  }, {
    label: t('inflationMax'),
    detail: `${external_numeral_default()(data.inflationMax * 100).format('0.[00]')}%`
  }, {
    label: t('inflationMin'),
    detail: `${external_numeral_default()(data.inflationMin * 100).format('0.[00]')}%`
  }, {
    label: t('inflationRateChange'),
    detail: `${external_numeral_default()(data.inflationRateChange * 100).format('0.[00]')}%`
  }, {
    label: t('mintDenom'),
    detail: data.mintDenom
  }];
};
const formatDistribution = (data, t) => {
  return [{
    label: t('baseProposerReward'),
    detail: `${external_numeral_default()(data.baseProposerReward * 100).format('0.[00]')}%`
  }, {
    label: t('bonusProposerReward'),
    detail: `${external_numeral_default()(data.bonusProposerReward * 100).format('0.[00]')}%`
  }, {
    label: t('communityTax'),
    detail: `${external_numeral_default()(data.communityTax * 100).format('0.[00]')}%`
  }, {
    label: t('withdrawAddressEnabled'),
    detail: `${data.withdrawAddressEnabled}`.toUpperCase()
  }];
};
const formatGov = (data, t) => {
  return [{
    label: t('minDeposit'),
    detail: `${data.minDeposit.value} ${data.minDeposit.displayDenom.toUpperCase()}`
  }, {
    label: t('maxDepositPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.maxDepositPeriod), t)
  }, {
    label: t('quorum'),
    detail: `${external_numeral_default()(data.quorum * 100).format('0.[00]')}%`
  }, {
    label: t('threshold'),
    detail: `${external_numeral_default()(data.threshold * 100).format('0.[00]')}%`
  }, {
    label: t('vetoThreshold'),
    detail: `${external_numeral_default()(data.vetoThreshold * 100).format('0.[00]')}%`
  }, {
    label: t('votingPeriod'),
    detail: convertBySeconds(nanoToSeconds(data.votingPeriod), t)
  }];
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4289,5657,5117,1371,8625,9744], () => (__webpack_exec__(42388)));
module.exports = __webpack_exports__;

})();
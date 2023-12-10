"use strict";
(() => {
var exports = {};
exports.id = 2773;
exports.ids = [2773];
exports.modules = {

/***/ 81326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _style, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgIconShare(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "icon-share_svg__Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: 0,
    y: 0,
    viewBox: "0 0 16 16",
    xmlSpace: "preserve"
  }, props), _style || (_style = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", null)), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.5 6c.3 0 .5.2.5.5s-.2.5-.5.5H3v8h10V7h-1.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H13c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h1.5zM8.4.2L12 3.7c.2.2.2.5 0 .7-.2.2-.5.2-.7 0L8.6 1.7v9.8c0 .3-.2.5-.5.5s-.5-.2-.5-.5V1.7L4.8 4.5c-.2.1-.5.1-.6-.1-.2-.1-.2-.4-.1-.6L7.8.1c.2-.2.5-.1.6.1z"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgIconShare);

/***/ }),

/***/ 99079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ao": () => (/* binding */ AccountCommissionDocument),
/* harmony export */   "l5": () => (/* binding */ AccountWithdrawalAddressDocument),
/* harmony export */   "um": () => (/* binding */ AccountBalancesDocument),
/* harmony export */   "Hg": () => (/* binding */ AccountDelegationBalanceDocument),
/* harmony export */   "A": () => (/* binding */ AccountUnbondingBalanceDocument),
/* harmony export */   "Ug": () => (/* binding */ AccountDelegationRewardsDocument),
/* harmony export */   "fy": () => (/* binding */ AccountDelegationsDocument),
/* harmony export */   "l7": () => (/* binding */ AccountRedelegationsDocument),
/* harmony export */   "Q$": () => (/* binding */ AccountUndelegationsDocument)
/* harmony export */ });
const AccountCommissionDocument =
/* GraphQL */
`
query AccountCommission($validatorAddress: String!) {
  commission: action_validator_commission_amount(address: $validatorAddress) {
    coins
  }
}
`;
const AccountWithdrawalAddressDocument =
/* GraphQL */
`
query AccountWithdrawalAddress($address: String!) {
  withdrawalAddress: action_delegator_withdraw_address(address: $address) {
    address
  }
}
`;
const AccountBalancesDocument =
/* GraphQL */
`
query AccountBalances($address: String!) {
  accountBalances: action_account_balance(address: $address) {
    coins
  }
}
`;
const AccountDelegationBalanceDocument =
/* GraphQL */
`
query AccountDelegationBalance($address: String!) {
  delegationBalance: action_delegation_total(address: $address) {
    coins
  }
}
`;
const AccountUnbondingBalanceDocument =
/* GraphQL */
`
query AccountUnbondingBalance($address: String!) {
  unbondingBalance: action_unbonding_delegation_total(address: $address) {
    coins
  }
}
`;
const AccountDelegationRewardsDocument =
/* GraphQL */
`
query AccountDelegationRewards($address: String!) {
  delegationRewards: action_delegation_reward(address: $address) {
    validatorAddress: validator_address
    coins
  }
}
`;
const AccountDelegationsDocument =
/* GraphQL */
`
query AccountDelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  delegations: action_delegation(address: $address, limit: $limit, offset: $offset, count_total: $pagination){
    delegations
    pagination
  }
}
`;
const AccountRedelegationsDocument =
/* GraphQL */
`
query AccountRedelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  redelegations: action_redelegation(address: $address, limit: $limit, offset: $offset, count_total: $pagination){
    redelegations
    pagination
  }
}
`;
const AccountUndelegationsDocument =
/* GraphQL */
`
query AccountUndelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  undelegations: action_unbonding_delegation(address: $address, limit: $limit, offset: $offset, count_total: $pagination){
    undelegations: unbonding_delegations
    pagination
  }
}
`;

/***/ }),

/***/ 21423:
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
/* harmony import */ var _src_screens_account_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45166);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_screens_account_details__WEBPACK_IMPORTED_MODULE_2__]);
_src_screens_account_details__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore




const AccountDetailsPage = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_src_screens_account_details__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountDetailsPage); // @ts-ignore

async function getServerSideProps(ctx) {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return {
    // @ts-ignore
    // @ts-ignore
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread({}, ctx), {}, {
      // @ts-ignore
      pathname: '/accounts/[address]',
      // @ts-ignore
      loaderName: 'getServerSideProps'
    }, (_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default())))) // @ts-ignore

  }; // @ts-ignore
} // @ts-ignore
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22575);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _recoil_market__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6154);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29744);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41215);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42570);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55223);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(26695);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_10__]);
_components__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const Balance = props => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_9___default()('accounts');
  const {
    classes,
    theme
  } = (0,_styles__WEBPACK_IMPORTED_MODULE_13__/* .useStyles */ .y)();
  const market = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoil_market__WEBPACK_IMPORTED_MODULE_6__/* .readMarket */ .DL);
  const formattedChartData = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .formatBalanceData */ .E)(props);
  const empty = {
    key: 'empty',
    value: 2400,
    background: theme.palette.custom.charts.zero,
    display: ''
  };
  const backgrounds = [theme.palette.custom.charts.one, theme.palette.custom.charts.two, theme.palette.custom.charts.three, theme.palette.custom.charts.four, theme.palette.custom.charts.five];
  const formatData = formattedChartData.map((x, i) => _objectSpread(_objectSpread({}, x), {}, {
    value: numeral__WEBPACK_IMPORTED_MODULE_3___default()(x.value).value(),
    background: backgrounds[i]
  }));
  const notEmpty = formatData.some(x => big_js__WEBPACK_IMPORTED_MODULE_2___default()(x.value).gt(0));
  const dataCount = formatData.filter(x => big_js__WEBPACK_IMPORTED_MODULE_2___default()(x.value).gt(0)).length;
  const data = notEmpty ? formatData : [...formatData, empty];
  const totalAmount = `$${numeral__WEBPACK_IMPORTED_MODULE_3___default()(big_js__WEBPACK_IMPORTED_MODULE_2___default()(market.price || 0).times(props.total.value).toPrecision()).format('0,0.00')}`; // format

  const totalDisplay = (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_12__/* .formatNumber */ .uf)(props.total.value, props.total.exponent);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
      variant: "h2",
      children: t('balance')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: classes.chartWrapper,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        className: classes.chart,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(recharts__WEBPACK_IMPORTED_MODULE_8__.ResponsiveContainer, {
          width: "99%",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(recharts__WEBPACK_IMPORTED_MODULE_8__.PieChart, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(recharts__WEBPACK_IMPORTED_MODULE_8__.Pie, {
              dataKey: "value",
              data: data,
              isAnimationActive: false,
              innerRadius: "90%",
              outerRadius: "100%",
              cornerRadius: 40,
              paddingAngle: dataCount > 1 ? 5 : 0,
              fill: "#82ca9d",
              stroke: "none",
              children: data.map((entry, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(recharts__WEBPACK_IMPORTED_MODULE_8__.Cell, {
                fill: entry.background,
                stroke: entry.background
              }, `cell-${index}`))
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        className: classes.legends,
        children: data.map(x => {
          if (x.key.toLowerCase() === 'empty') {
            return null;
          }

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "legends__single--container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: "single__label--container",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                className: "legend-color",
                style: {
                  background: x.background
                }
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                variant: "body1",
                children: t(x.key)
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
              variant: "body1",
              children: x.display
            })]
          }, x.key);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Divider, {
        className: classes.divider
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: classes.total,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "total__single--container",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
            variant: "h3",
            className: "label",
            children: t('total', {
              unit: props.total.displayDenom.toUpperCase()
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
            variant: "h3",
            children: totalDisplay
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "total__secondary--container total__single--container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
            variant: "body1",
            className: "label",
            children: ["$", numeral__WEBPACK_IMPORTED_MODULE_3___default()(market.price).format('0,0.[00]', Math.floor), ' ', "/", ' ', ramda__WEBPACK_IMPORTED_MODULE_4__.pathOr('', ['tokenUnits', _configs__WEBPACK_IMPORTED_MODULE_11__/* .chainConfig.primaryTokenUnit */ .i.primaryTokenUnit, 'display'], _configs__WEBPACK_IMPORTED_MODULE_11__/* .chainConfig */ .i).toUpperCase()]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
            variant: "body1",
            children: totalAmount
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Balance);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const defaultTheme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      root: {
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2)
        },
        [theme.breakpoints.up('lg')]: {
          display: 'flex',
          flexDirection: 'column'
        }
      },
      chart: {
        height: '300px',
        [theme.breakpoints.up('md')]: {
          height: '200px',
          width: '200px'
        },
        [theme.breakpoints.up('lg')]: {
          height: '150px',
          width: '150px'
        }
      },
      chartWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          alignItems: 'center'
        }
      },
      legends: {
        color: theme.palette.custom.fonts.fontTwo,
        '& .legends__single--container': {
          marginBottom: theme.spacing(1),
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }
        },
        '& .single__label--container': {
          display: 'flex',
          alignItems: 'center',
          marginBottom: theme.spacing(0.5)
        },
        '& .legend-color': {
          width: theme.spacing(1.75),
          height: theme.spacing(1.75),
          borderRadius: '2px',
          marginRight: theme.spacing(1)
        },
        [theme.breakpoints.up('md')]: {
          flex: 1,
          marginLeft: theme.spacing(3)
        }
      },
      divider: {
        margin: theme.spacing(2, 0)
      },
      total: {
        '& .total__single--container': {
          marginBottom: theme.spacing(1),
          '& .label': {
            marginBottom: theme.spacing(0.5),
            color: theme.palette.custom.fonts.fontTwo,
            [theme.breakpoints.up('md')]: {
              color: theme.palette.custom.fonts.fontOne
            }
          },
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }
        },
        '& .total__secondary--container': {
          [theme.breakpoints.up('md')]: {
            color: theme.palette.custom.fonts.fontTwo
          }
        }
      }
    };
  })();
  return {
    classes: styles,
    theme: defaultTheme
  };
};

/***/ }),

/***/ 26695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ formatBalanceData)
/* harmony export */ });
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42570);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22575);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);


const formatBalanceData = data => {
  const balanceChart = [{
    key: 'balanceAvailable',
    display: `${(0,_utils_format_token__WEBPACK_IMPORTED_MODULE_0__/* .formatNumber */ .uf)(data.available.value, data.available.exponent)} ${data.available.displayDenom.toUpperCase()}`,
    value: data.available.value
  }, {
    key: 'balanceDelegate',
    display: `${(0,_utils_format_token__WEBPACK_IMPORTED_MODULE_0__/* .formatNumber */ .uf)(data.delegate.value, data.delegate.exponent)} ${data.delegate.displayDenom.toUpperCase()}`,
    value: data.delegate.value
  }, {
    key: 'balanceUnbonding',
    display: `${(0,_utils_format_token__WEBPACK_IMPORTED_MODULE_0__/* .formatNumber */ .uf)(data.unbonding.value, data.unbonding.exponent)} ${data.unbonding.displayDenom.toUpperCase()}`,
    value: data.unbonding.value
  }, {
    key: 'balanceReward',
    display: `${(0,_utils_format_token__WEBPACK_IMPORTED_MODULE_0__/* .formatNumber */ .uf)(data.reward.value, data.reward.exponent)} ${data.reward.displayDenom.toUpperCase()}`,
    value: data.reward.value
  }];

  if (data.commission && big_js__WEBPACK_IMPORTED_MODULE_1___default()(data.commission.value).gt(0)) {
    balanceChart.push({
      key: 'balanceCommission',
      display: `${(0,_utils_format_token__WEBPACK_IMPORTED_MODULE_0__/* .formatNumber */ .uf)(data.commission.value, data.commission.exponent)} ${data.commission.displayDenom.toUpperCase()}`,
      value: data.commission.value
    });
  }

  return balanceChart;
};

/***/ }),

/***/ 64289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g2": () => (/* reexport safe */ _overview__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "yo": () => (/* reexport safe */ _balance__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "T4": () => (/* reexport safe */ _staking__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "PU": () => (/* reexport safe */ _transactions__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "hU": () => (/* reexport safe */ _other_tokens__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47124);
/* harmony import */ var _balance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50772);
/* harmony import */ var _staking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2542);
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21603);
/* harmony import */ var _other_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_overview__WEBPACK_IMPORTED_MODULE_0__, _balance__WEBPACK_IMPORTED_MODULE_1__, _staking__WEBPACK_IMPORTED_MODULE_2__, _transactions__WEBPACK_IMPORTED_MODULE_3__, _other_tokens__WEBPACK_IMPORTED_MODULE_4__]);
([_overview__WEBPACK_IMPORTED_MODULE_0__, _balance__WEBPACK_IMPORTED_MODULE_1__, _staking__WEBPACK_IMPORTED_MODULE_2__, _transactions__WEBPACK_IMPORTED_MODULE_3__, _other_tokens__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export OtherTokens */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65117);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29744);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34871);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56459);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 1150).then(__webpack_require__.bind(__webpack_require__, 21150)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/other_tokens/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 2184).then(__webpack_require__.bind(__webpack_require__, 92184)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/other_tokens/index.tsx -> " + './components/mobile']
  }
});
const OtherTokens = ({
  className,
  otherTokens
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('accounts');
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useScreenSize */ .eI)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .usePagination */ .h0)({});
  const {
    data
  } = otherTokens;
  const count = data.length;

  if (!data.length) {
    return null;
  }

  const items = sliceItems(data);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
      variant: "h2",
      children: t('otherTokens')
    }), isDesktop ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Desktop, {
      className: classes.desktop,
      items: items
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Mobile, {
      className: classes.mobile,
      items: items
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Pagination */ .tl, {
      className: classes.paginate,
      total: count,
      rowsPerPage: rowsPerPage,
      page: page,
      handleChangePage: handleChangePage,
      handleChangeRowsPerPage: handleChangeRowsPerPage,
      rowsPerPageOptions: [10, 25, 50, 100]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtherTokens);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      paginate: {
        marginTop: theme.spacing(3)
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

/***/ 39410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useOverview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);



const useOverview = t => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCopyToClipboard = value => {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(value);
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(t('common:copied'));
  };

  return {
    open,
    handleClose,
    handleOpen,
    handleCopyToClipboard
  };
};

/***/ }),

/***/ 47124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43860);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34871);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icon_copy_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39071);
/* harmony import */ var _assets_icon_share_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81326);
/* harmony import */ var _utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57875);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29744);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90557);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_9__]);
_components__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const Overview = ({
  className,
  address,
  withdrawalAddress
}) => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useScreenSize */ .eI)();
  const {
    location
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useWindowOrigin */ .t8)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_10__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('accounts');
  const {
    open,
    handleClose,
    handleOpen,
    handleCopyToClipboard
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useOverview */ .d)(t);
  const url = `${location}/accounts/${address}`;
  const hashTags = ['bigdipperexplorer', 'bigdipper'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
      maxWidth: "xl",
      onClose: handleClose,
      "aria-labelledby": "simple-dialog-title",
      open: open,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
        className: classes.dialog,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: "body1",
          align: "center",
          children: t('scanForAddress')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((qrcode_react__WEBPACK_IMPORTED_MODULE_4___default()), {
          value: address,
          size: 200,
          bgColor: "#ffffff",
          fgColor: "#000000",
          renderAs: "svg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "dialog__share--wrapper",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variant: "body1",
            children: t('shareTo')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: classes.icons,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.FacebookShareButton, {
              url: url,
              quote: address,
              hashtag: hashTags[0],
              className: "share-buttons",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.FacebookIcon, {
                round: true
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.TwitterShareButton, {
              url: url,
              title: address,
              hashtags: hashTags,
              className: "share-buttons",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.TwitterIcon, {
                round: true
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.TelegramShareButton, {
              url: url,
              title: address,
              className: "share-buttons",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.TelegramIcon, {
                round: true
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.WhatsappShareButton, {
              url: url,
              title: address,
              separator: ":: ",
              className: "share-buttons",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.WhatsappIcon, {
                round: true
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.EmailShareButton, {
              url: url,
              subject: "address",
              body: address,
              separator: ":: ",
              className: "share-buttons email",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.EmailIcon, {
                round: true
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.copyText, classes.item),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: "body1",
          className: "label",
          children: t('address')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "detail",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_assets_icon_copy_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            onClick: () => handleCopyToClipboard(address),
            className: classes.actionIcons
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_assets_icon_share_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            onClick: handleOpen,
            className: classes.actionIcons
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variant: "body1",
            className: "value",
            children: !isDesktop ? (0,_utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_13__/* .getMiddleEllipsis */ .I)(address, {
              beginning: 15,
              ending: 5
            }) : address
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.copyText, classes.item),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: "body1",
          className: "label",
          children: t('rewardAddress')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "detail",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_assets_icon_copy_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            className: classes.actionIcons,
            onClick: () => handleCopyToClipboard(withdrawalAddress)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variant: "body1",
            className: "value",
            children: !isDesktop ? (0,_utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_13__/* .getMiddleEllipsis */ .I)(withdrawalAddress, {
              beginning: 15,
              ending: 5
            }) : withdrawalAddress
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90557:
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
        [theme.breakpoints.up('md')]: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)'
        }
      },
      dialog: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& .MuiTypography-body1': {
          marginBottom: theme.spacing(2)
        },
        '& .dialog__share--wrapper': {
          marginTop: theme.spacing(2)
        },
        '& .share-buttons': {
          '&:not(:last-child)': {
            marginRight: theme.spacing(1)
          },
          '&.email': {
            '& circle': {
              fill: theme.palette.primary.main
            }
          }
        }
      },
      actionIcons: {
        '&:hover': {
          cursor: 'pointer'
        }
      },
      icons: {
        '& svg': {
          width: theme.spacing(4.5),
          height: theme.spacing(4.5)
        }
      },
      item: {
        padding: theme.spacing(2, 0),
        color: theme.palette.custom.fonts.fontTwo,
        '&:first-child': {
          paddingTop: 0
        },
        '&:last-child': {
          paddingBottom: 0
        },
        '&:not(:last-child)': {
          borderBottom: `solid 1px ${theme.palette.divider}`
        },
        '& .label': {
          marginBottom: theme.spacing(1)
        },
        '& .detail': {
          '&.MuiTypography-body1': {
            wordWrap: 'break-word'
          }
        },
        [theme.breakpoints.up('md')]: {
          padding: 0,
          '&:not(:last-child)': {
            borderBottom: 'none'
          },
          '& .label': {
            marginBottom: 0
          }
        }
      },
      copyText: {
        '& .detail': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
          '& svg': {
            width: '1rem',
            marginLeft: theme.spacing(1)
          }
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 2832:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65117);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34871);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96437);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 1896).then(__webpack_require__.bind(__webpack_require__, 61896)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/staking/components/delegations/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 9719).then(__webpack_require__.bind(__webpack_require__, 69719)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/staking/components/delegations/index.tsx -> " + './components/mobile']
  }
});

const Delegations = props => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useScreenSize */ .eI)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePagination */ .h0)({});
  const pageItems = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['delegations', 'data', page], props);
  const dataProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfilesRecoil */ .Gs)(pageItems.map(x => x.validator));
  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      validator: dataProfiles[i]
    });
  });
  const items = mergedDataWithProfiles;
  let component = null;

  if (props.delegations.loading) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Loading */ .gb, {});
  } else if (!items.length) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .NoData */ .Jd, {});
  } else if (isDesktop) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Desktop, {
      items: items
    });
  } else {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Mobile, {
      items: items
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className),
    children: [component, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .tl, {
      className: classes.paginate,
      total: props.delegations.count,
      rowsPerPage: rowsPerPage,
      page: page,
      handleChangePage: handleChangePage,
      handleChangeRowsPerPage: handleChangeRowsPerPage
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Delegations);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      paginate: {
        marginTop: theme.spacing(3)
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

/***/ 24311:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mQ": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57379);
/* harmony import */ var _unbondings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49702);
/* harmony import */ var _redelegations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74310);
/* harmony import */ var _delegations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_unbondings__WEBPACK_IMPORTED_MODULE_1__, _redelegations__WEBPACK_IMPORTED_MODULE_2__, _delegations__WEBPACK_IMPORTED_MODULE_3__]);
([_unbondings__WEBPACK_IMPORTED_MODULE_1__, _redelegations__WEBPACK_IMPORTED_MODULE_2__, _delegations__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65117);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34871);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(443);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 8268).then(__webpack_require__.bind(__webpack_require__, 18268)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/staking/components/redelegations/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 6201).then(__webpack_require__.bind(__webpack_require__, 86201)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/staking/components/redelegations/index.tsx -> " + './components/mobile']
  }
});

const Redelegations = props => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useScreenSize */ .eI)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePagination */ .h0)({});
  const pageItems = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['redelegations', 'data', page], props);
  const fromProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfilesRecoil */ .Gs)(pageItems.map(x => x.from));
  const toProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfilesRecoil */ .Gs)(pageItems.map(x => x.to));
  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      from: fromProfiles[i],
      to: toProfiles[i]
    });
  });
  const items = mergedDataWithProfiles;
  let component = null;

  if (props.redelegations.loading) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Loading */ .gb, {});
  } else if (!items.length) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .NoData */ .Jd, {});
  } else if (isDesktop) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Desktop, {
      items: items
    });
  } else {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Mobile, {
      items: items
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(props.className),
    children: [component, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .tl, {
      className: classes.paginate,
      total: props.redelegations.count,
      rowsPerPage: rowsPerPage,
      page: page,
      handleChangePage: handleChangePage,
      handleChangeRowsPerPage: handleChangeRowsPerPage,
      rowsPerPageOptions: [10, 25, 50, 100]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Redelegations);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      paginate: {
        marginTop: theme.spacing(3)
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

/***/ 57379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ tabs)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "numeral"
var external_numeral_ = __webpack_require__(88032);
var external_numeral_default = /*#__PURE__*/__webpack_require__.n(external_numeral_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/utils/allyProps.ts
var allyProps = __webpack_require__(54118);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/account_details/components/staking/components/tabs/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      searchBar: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'block',
          width: '300px',
          '& .MuiInputBase-root': {
            width: '100%',
            background: theme.palette.custom.general.surfaceTwo,
            padding: theme.spacing(0.4, 1.2),
            borderRadius: theme.shape.borderRadius
          },
          '& .MuiInputBase-input': {
            textOverflow: 'ellipsis',
            '&::placeholder': {
              color: theme.palette.custom.fonts.fontThree
            }
          }
        }
      }
    };
  }, {
    index: 1
  })();
  return styles;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/account_details/components/staking/components/tabs/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const TabsHeader = ({
  className,
  tab,
  handleTabChange,
  tabs
}) => {
  const classes = useStyles();
  const {
    t
  } = useTranslation_default()('accounts');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()(className, classes.root),
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Tabs, {
      variant: "scrollable",
      scrollButtons: "off",
      value: tab,
      onChange: handleTabChange,
      children: tabs.map(x => {
        var _x$count;

        return /*#__PURE__*/jsx_runtime_.jsx(core_.Tab, _objectSpread({
          label: t(x.key, {
            num: external_numeral_default()((_x$count = x.count) !== null && _x$count !== void 0 ? _x$count : 0).format('0,0')
          })
        }, (0,allyProps/* a11yProps */.P)(x.id)), x.key);
      })
    })
  });
};

/* harmony default export */ const tabs = (TabsHeader);

/***/ }),

/***/ 49702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65117);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34871);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98279);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 770).then(__webpack_require__.bind(__webpack_require__, 60770)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/staking/components/unbondings/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 4684).then(__webpack_require__.bind(__webpack_require__, 4684)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/staking/components/unbondings/index.tsx -> " + './components/mobile']
  }
});

const Unbondings = props => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePagination */ .h0)({});
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useScreenSize */ .eI)();
  const pageItems = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['unbondings', 'data', page], props);
  const dataProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfilesRecoil */ .Gs)(pageItems.map(x => x.validator));
  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      validator: dataProfiles[i]
    });
  });
  const items = mergedDataWithProfiles;
  let component = null;

  if (props.unbondings.loading) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Loading */ .gb, {});
  } else if (!items.length) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .NoData */ .Jd, {});
  } else if (isDesktop) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Desktop, {
      items: items
    });
  } else {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Mobile, {
      items: items
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(props.className),
    children: [component, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .tl, {
      className: classes.paginate,
      total: props.unbondings.count,
      rowsPerPage: rowsPerPage,
      page: page,
      handleChangePage: handleChangePage,
      handleChangeRowsPerPage: handleChangeRowsPerPage
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unbondings);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      paginate: {
        marginTop: theme.spacing(3)
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

/***/ 84422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useStaking)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22575);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_graphql_general_account_details_documents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99079);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42570);
/* harmony import */ var _utils_get_denom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92076);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41215);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const stakingDefault = {
  data: {},
  count: 0,
  loading: true
};
const LIMIT = 100;
const PAGE_LIMIT = 10;
const useStaking = rewards => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    tab: 0,
    delegations: stakingDefault,
    redelegations: stakingDefault,
    unbondings: stakingDefault
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getDelegations();
    getRedelegations();
    getUnbondings();
  }, [router.query.address]);

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_1__.mergeDeepLeft(stateChange, prevState));
  };

  const handleTabChange = (_event, newValue) => {
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      tab: newValue
    }));
  };

  const createPagination = data => {
    const pages = {};
    data.forEach((x, i) => {
      const selectedKey = Math.floor(i / PAGE_LIMIT);
      pages[selectedKey] = pages[selectedKey] || [];
      pages[selectedKey].push(x);
    });
    return pages;
  }; // helper function to get rest of the staking items
  // if it is over the default limit


  const getStakeByPage = async (page, query) => {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://cosmos.evtscan.com/v1/graphql", {
      variables: {
        address: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['query', 'address'], router),
        offset: page * LIMIT,
        limit: LIMIT,
        pagination: false
      },
      query
    });
    return data;
  }; // =====================================
  // delegations
  // =====================================


  const getDelegations = async () => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://cosmos.evtscan.com/v1/graphql", {
        variables: {
          address: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['query', 'address'], router),
          limit: LIMIT
        },
        query: _src_graphql_general_account_details_documents__WEBPACK_IMPORTED_MODULE_8__/* .AccountDelegationsDocument */ .fy
      });
      const count = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(0, ['data', 'delegations', 'pagination', 'total'], data);
      const allDelegations = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['data', 'delegations', 'delegations'], data); // if there are more than the default 100, grab the remaining delegations

      if (count > LIMIT) {
        const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
        const remainingDelegationsPromises = [];

        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingDelegationsPromises.push(getStakeByPage(i + 1, _src_graphql_general_account_details_documents__WEBPACK_IMPORTED_MODULE_8__/* .AccountDelegationsDocument */ .fy));
        }

        const remainingDelegations = await Promise.allSettled(remainingDelegationsPromises);
        remainingDelegations.filter(x => x.status === 'fulfilled').forEach(x => {
          const delegations = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['value', 'data', 'delegations', 'delegations'], x);
          allDelegations.push(...delegations);
        });
      }

      handleSetState({
        delegations: {
          loading: false,
          count,
          data: createPagination(formatDelegations(allDelegations))
        }
      });
    } catch (error) {
      handleSetState({
        delegations: {
          loading: false
        }
      });
    }
  };

  const formatDelegations = data => {
    return data.map(x => {
      const validator = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['validator_address'], x);
      const delegation = (0,_utils_get_denom__WEBPACK_IMPORTED_MODULE_6__/* .getDenom */ .C)(x.coins, _configs__WEBPACK_IMPORTED_MODULE_7__/* .chainConfig.primaryTokenUnit */ .i.primaryTokenUnit);
      return {
        validator,
        amount: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatToken */ .nx)(delegation.amount, delegation.denom),
        reward: rewards[validator]
      };
    }).sort((a, b) => {
      return big_js__WEBPACK_IMPORTED_MODULE_2___default()(a.amount.value).gt(b.amount.value) ? -1 : 1;
    });
  }; // =====================================
  // redelegations
  // =====================================


  const getRedelegations = async () => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://cosmos.evtscan.com/v1/graphql", {
        variables: {
          address: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['query', 'address'], router),
          limit: LIMIT
        },
        query: _src_graphql_general_account_details_documents__WEBPACK_IMPORTED_MODULE_8__/* .AccountRedelegationsDocument */ .l7
      });
      const count = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(0, ['data', 'redelegations', 'pagination', 'total'], data);
      const allData = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['data', 'redelegations', 'redelegations'], data); // if there are more than the default 100, grab the remaining delegations

      if (count > LIMIT) {
        const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
        const remainingPromises = [];

        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingPromises.push(getStakeByPage(i + 1, _src_graphql_general_account_details_documents__WEBPACK_IMPORTED_MODULE_8__/* .AccountRedelegationsDocument */ .l7));
        }

        const remainingData = await Promise.allSettled(remainingPromises);
        remainingData.filter(x => x.status === 'fulfilled').forEach(x => {
          const fullfilledData = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['value', 'data', 'redelegations', 'redelegations'], x);
          allData.push(...fullfilledData);
        });
      }

      const formattedData = formatRedelegations(allData);
      handleSetState({
        redelegations: {
          loading: false,
          count: formattedData.length,
          data: createPagination(formattedData)
        }
      });
    } catch (error) {
      handleSetState({
        redelegations: {
          loading: false
        }
      });
    }
  };

  const formatRedelegations = data => {
    const results = [];
    data.forEach(x => {
      ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['entries'], x).forEach(y => {
        results.push({
          from: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['validator_src_address'], x),
          to: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['validator_dst_address'], x),
          amount: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatToken */ .nx)(y.balance, _configs__WEBPACK_IMPORTED_MODULE_7__/* .chainConfig.primaryTokenUnit */ .i.primaryTokenUnit),
          completionTime: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['completion_time'], y)
        });
      });
    });
    results.sort((a, b) => {
      return a.completionTime < b.completionTime ? -1 : 1;
    });
    return results;
  }; // =====================================
  // unbondings
  // =====================================


  const getUnbondings = async () => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://cosmos.evtscan.com/v1/graphql", {
        variables: {
          address: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['query', 'address'], router),
          limit: LIMIT
        },
        query: _src_graphql_general_account_details_documents__WEBPACK_IMPORTED_MODULE_8__/* .AccountUndelegationsDocument */ .Q$
      });
      const count = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(0, ['data', 'undelegations', 'pagination', 'total'], data);
      const allData = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['data', 'undelegations', 'undelegations'], data); // if there are more than the default 100, grab the remaining delegations

      if (count > LIMIT) {
        const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
        const remainingPromises = [];

        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingPromises.push(getStakeByPage(i + 1, _src_graphql_general_account_details_documents__WEBPACK_IMPORTED_MODULE_8__/* .AccountUndelegationsDocument */ .Q$));
        }

        const remainingData = await Promise.allSettled(remainingPromises);
        remainingData.filter(x => x.status === 'fulfilled').forEach(x => {
          const fullfilledData = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['value', 'data', 'undelegations', 'undelegations'], x);
          allData.push(...fullfilledData);
        });
      }

      const formattedData = formatUnbondings(allData);
      handleSetState({
        unbondings: {
          loading: false,
          count: formattedData.length,
          data: createPagination(formattedData)
        }
      });
    } catch (error) {
      handleSetState({
        unbondings: {
          loading: false
        }
      });
    }
  };

  const formatUnbondings = data => {
    const results = [];
    data.forEach(x => {
      ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['entries'], x).forEach(y => {
        results.push({
          validator: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['validator_address'], x),
          amount: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatToken */ .nx)(y.balance, _configs__WEBPACK_IMPORTED_MODULE_7__/* .chainConfig.primaryTokenUnit */ .i.primaryTokenUnit),
          completionTime: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['completion_time'], y)
        });
      });
    });
    results.sort((a, b) => {
      return a.completionTime < b.completionTime ? -1 : 1;
    });
    return results;
  };

  return {
    state,
    handleTabChange
  };
};

/***/ }),

/***/ 2542:
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29744);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24311);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84422);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36448);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Delegations = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2832)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/staking/index.tsx -> " + './components/delegations']
  }
});
const Redelgations = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 74310)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/staking/index.tsx -> " + './components/redelegations']
  }
});
const Unbondings = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 49702)), {
  loadableGenerated: {
    modules: ["../screens/account_details/components/staking/index.tsx -> " + './components/unbondings']
  }
});

const Staking = props => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_6__/* .useStyles */ .y)();
  const {
    state,
    handleTabChange
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useStaking */ .n)(props.rewards);
  const tabs = [{
    id: 0,
    key: 'delegations',
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Delegations, {
      delegations: state.delegations
    }),
    count: state.delegations.count
  }, {
    id: 1,
    key: 'redelegations',
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Redelgations, {
      redelegations: state.redelegations
    }),
    count: state.redelegations.count
  }, {
    id: 2,
    key: 'unbondings',
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Unbondings, {
      unbondings: state.unbondings
    }),
    count: state.unbondings.count
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Tabs */ .mQ, {
      tab: state.tab,
      handleTabChange: handleTabChange,
      tabs: tabs
    }), tabs.map(x => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .TabPanel */ .AY, {
        index: x.id,
        value: state.tab,
        children: x.component
      }, x.id);
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Staking);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36448:
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
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {// display: 'flex',
          // flexDirection: 'column',
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 89985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _msg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31069);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91619);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_msg__WEBPACK_IMPORTED_MODULE_2__]);
_msg__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const LIMIT = 50;
const useTransactions = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    data: [],
    hasNextPage: false,
    isNextPageLoading: false,
    offsetCount: 0
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_3__.mergeDeepLeft(stateChange, prevState));
  };

  const transactionQuery = (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__/* .useGetMessagesByAddressQuery */ .sj)({
    variables: {
      limit: LIMIT + 1,
      // to check if more exist
      offset: 0,
      address: `{${ramda__WEBPACK_IMPORTED_MODULE_3__.pathOr('', ['query', 'address'], router)}}`
    },
    onCompleted: data => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = ramda__WEBPACK_IMPORTED_MODULE_3__.uniq([...state.data, ...formatTransactions(data)]);
      const stateChange = {
        data: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
        offsetCount: state.offsetCount + LIMIT
      };
      handleSetState(stateChange);
    }
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true
    }); // refetch query

    await transactionQuery.fetchMore({
      variables: {
        offset: state.offsetCount,
        limit: LIMIT + 1
      }
    }).then(({
      data
    }) => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = ramda__WEBPACK_IMPORTED_MODULE_3__.uniq([...state.data, ...formatTransactions(data)]);
      const stateChange = {
        data: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
        offsetCount: state.offsetCount + LIMIT
      };
      handleSetState(stateChange);
    });
  };

  const formatTransactions = data => {
    let formattedData = data.messagesByAddress;

    if (data.messagesByAddress.length === 51) {
      formattedData = data.messagesByAddress.slice(0, 51);
    }

    return formattedData.map(x => {
      const {
        transaction
      } = x; // =============================
      // messages
      // =============================

      const messages = (0,_msg__WEBPACK_IMPORTED_MODULE_2__/* .convertMsgsToModels */ .B8)(transaction);
      return {
        height: transaction.height,
        hash: transaction.hash,
        messages: {
          count: messages.length,
          items: messages
        },
        success: transaction.success,
        timestamp: transaction.block.timestamp
      };
    });
  };

  return {
    state,
    loadNextPage
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21603:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16039);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89985);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__, _hooks__WEBPACK_IMPORTED_MODULE_8__]);
([_components__WEBPACK_IMPORTED_MODULE_4__, _hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Transactions = props => {
  const txListFormat = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_6__/* .readTx */ .er);
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('validators');
  const {
    state,
    loadNextPage
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useTransactions */ .n)();
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;

  const isItemLoaded = index => !state.hasNextPage || index < state.data.length;

  const itemCount = state.hasNextPage ? state.data.length + 1 : state.data.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "h2",
      children: t('transactions')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: classes.list,
      children: txListFormat === 'compact' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .TransactionsList */ .RG, {
        transactions: state.data,
        itemCount: itemCount,
        hasNextPage: state.hasNextPage,
        isNextPageLoading: state.isNextPageLoading,
        loadNextPage: loadNextPage,
        loadMoreItems: loadMoreItems,
        isItemLoaded: isItemLoaded
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .TransactionListDetails */ .hc, {
        transactions: state.data,
        itemCount: itemCount,
        hasNextPage: state.hasNextPage,
        isNextPageLoading: state.isNextPageLoading,
        loadNextPage: loadNextPage,
        loadMoreItems: loadMoreItems,
        isItemLoaded: isItemLoaded
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transactions);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16039:
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
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2)
        }
      },
      list: {
        minHeight: '500px',
        height: '50vh',
        [theme.breakpoints.up('lg')]: {
          minHeight: '65vh'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 18240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ useAccountDetails)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(99634);
// EXTERNAL MODULE: external "big.js"
var external_big_js_ = __webpack_require__(22575);
var external_big_js_default = /*#__PURE__*/__webpack_require__.n(external_big_js_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./src/utils/get_denom.ts
var get_denom = __webpack_require__(92076);
// EXTERNAL MODULE: ./src/utils/format_token.ts
var format_token = __webpack_require__(42570);
// EXTERNAL MODULE: ./src/configs/index.ts + 3 modules
var configs = __webpack_require__(41215);
// EXTERNAL MODULE: ./src/utils/prefix_convert.ts
var prefix_convert = __webpack_require__(82776);
// EXTERNAL MODULE: ./src/hooks/index.ts + 8 modules
var hooks = __webpack_require__(34871);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(52167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/graphql/general/account_details_documents.ts
var account_details_documents = __webpack_require__(99079);
;// CONCATENATED MODULE: ./src/screens/account_details/utils.ts




const fetchCommission = async address => {
  const defaultReturnValue = {
    commission: {
      coins: null
    }
  };

  try {
    const {
      data
    } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
      variables: {
        validatorAddress: (0,prefix_convert/* toValidatorAddress */.W)(address)
      },
      query: account_details_documents/* AccountCommissionDocument */.Ao
    });
    return external_ramda_.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};
const fetchAccountWithdrawalAddress = async address => {
  const defaultReturnValue = {
    withdrawalAddress: {
      address
    }
  };

  try {
    const {
      data
    } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
      variables: {
        address
      },
      query: account_details_documents/* AccountWithdrawalAddressDocument */.l5
    });
    return external_ramda_.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};
const fetchAvailableBalances = async address => {
  const defaultReturnValue = {
    accountBalances: {
      coins: []
    }
  };

  try {
    const {
      data
    } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
      variables: {
        address
      },
      query: account_details_documents/* AccountBalancesDocument */.um
    });
    return external_ramda_.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};
const fetchDelegationBalance = async address => {
  const defaultReturnValue = {
    delegationBalance: {
      coins: []
    }
  };

  try {
    const {
      data
    } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
      variables: {
        address
      },
      query: account_details_documents/* AccountDelegationBalanceDocument */.Hg
    });
    return external_ramda_.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};
const fetchUnbondingBalance = async address => {
  const defaultReturnValue = {
    unbondingBalance: {
      coins: []
    }
  };

  try {
    const {
      data
    } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
      variables: {
        address
      },
      query: account_details_documents/* AccountUnbondingBalanceDocument */.A
    });
    return external_ramda_.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};
const fetchRewards = async address => {
  const defaultReturnValue = {
    delegationRewards: []
  };

  try {
    const {
      data
    } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
      variables: {
        address
      },
      query: account_details_documents/* AccountDelegationRewardsDocument */.Ug
    });
    return external_ramda_.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};
;// CONCATENATED MODULE: ./src/screens/account_details/hooks.ts










const defaultTokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0
};
const initialState = {
  loading: true,
  exists: true,
  desmosProfile: null,
  overview: {
    address: '',
    withdrawalAddress: ''
  },
  otherTokens: {
    count: 0,
    data: []
  },
  balance: {
    available: defaultTokenUnit,
    delegate: defaultTokenUnit,
    unbonding: defaultTokenUnit,
    reward: defaultTokenUnit,
    commission: defaultTokenUnit,
    total: defaultTokenUnit
  },
  rewards: {}
};
const useAccountDetails = () => {
  const router = (0,router_.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)(initialState);

  const handleSetState = stateChange => {
    setState(prevState => external_ramda_.mergeDeepLeft(stateChange, prevState));
  }; // ==========================
  // Desmos Profile
  // ==========================


  const {
    fetchDesmosProfile,
    formatDesmosProfile
  } = (0,hooks/* useDesmosProfile */.Q0)({
    onComplete: data => {
      handleSetState({
        desmosProfile: formatDesmosProfile(data)
      });
    }
  });
  (0,external_react_.useEffect)(() => {
    if (!(0,prefix_convert/* isValidAddress */.A)(router.query.address)) {
      handleSetState({
        loading: false,
        exists: false
      });
    } else if (configs/* chainConfig.extra.profile */.i.extra.profile) {
      fetchDesmosProfile(router.query.address);
    }
  }, [router.query.address]);
  (0,external_react_.useEffect)(() => {
    fetchWithdrawalAddress();
    fetchBalance();
  }, [router.query.address]); // ==========================
  // Fetch Data
  // ==========================

  const fetchWithdrawalAddress = async () => {
    const data = await fetchAccountWithdrawalAddress(router.query.address);
    handleSetState({
      overview: {
        address: router.query.address,
        withdrawalAddress: external_ramda_.pathOr('', ['withdrawalAddress', 'address'], data)
      }
    });
  };

  const fetchBalance = async () => {
    const address = router.query.address;
    const promises = [fetchCommission(address), fetchAvailableBalances(address), fetchDelegationBalance(address), fetchUnbondingBalance(address), fetchRewards(address)];
    const [commission, available, delegation, unbonding, rewards] = await Promise.allSettled(promises);
    const formattedRawData = {};
    formattedRawData.commission = external_ramda_.pathOr([], ['value', 'commission'], commission);
    formattedRawData.accountBalances = external_ramda_.pathOr([], ['value', 'accountBalances'], available);
    formattedRawData.delegationBalance = external_ramda_.pathOr([], ['value', 'delegationBalance'], delegation);
    formattedRawData.unbondingBalance = external_ramda_.pathOr([], ['value', 'unbondingBalance'], unbonding);
    formattedRawData.delegationRewards = external_ramda_.pathOr([], ['value', 'delegationRewards'], rewards);
    handleSetState(formatAllBalance(formattedRawData));
  }; // ==========================
  // Format Data
  // ==========================


  const formatAllBalance = data => {
    const stateChange = {
      loading: false
    }; // ============================
    // rewards
    // ============================

    const formatRewards = () => {
      const rewardsDict = {}; // log all the rewards

      external_ramda_.pathOr([], ['delegationRewards'], data).forEach(x => {
        const coins = external_ramda_.pathOr([], ['coins'], x);
        const denomAmount = (0,get_denom/* getDenom */.C)(coins, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
        const denomFormat = (0,format_token/* formatToken */.nx)(denomAmount.amount, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
        rewardsDict[x.validatorAddress] = denomFormat;
      });
      return rewardsDict;
    };

    stateChange.rewards = formatRewards(); // ============================
    // balance
    // ============================

    const formatBalance = () => {
      const available = (0,get_denom/* getDenom */.C)(external_ramda_.pathOr([], ['accountBalances', 'coins'], data), configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      const availableAmount = (0,format_token/* formatToken */.nx)(available.amount, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      const delegate = (0,get_denom/* getDenom */.C)(external_ramda_.pathOr([], ['delegationBalance', 'coins'], data), configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      const delegateAmount = (0,format_token/* formatToken */.nx)(delegate.amount, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      const unbonding = (0,get_denom/* getDenom */.C)(external_ramda_.pathOr([], ['unbondingBalance', 'coins'], data), configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      const unbondingAmount = (0,format_token/* formatToken */.nx)(unbonding.amount, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      const rewards = data.delegationRewards.reduce((a, b) => {
        const coins = external_ramda_.pathOr([], ['coins'], b);
        const dsmCoins = (0,get_denom/* getDenom */.C)(coins, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
        return external_big_js_default()(a).plus(dsmCoins.amount).toPrecision();
      }, '0');
      const rewardsAmount = (0,format_token/* formatToken */.nx)(rewards, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      const commission = (0,get_denom/* getDenom */.C)(external_ramda_.pathOr([], ['commission', 'coins'], data), configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      const commissionAmount = (0,format_token/* formatToken */.nx)(commission.amount, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      const total = external_big_js_default()(availableAmount.value).plus(delegateAmount.value).plus(unbondingAmount.value).plus(rewardsAmount.value).plus(commissionAmount.value).toFixed(configs/* chainConfig.tokenUnits */.i.tokenUnits[configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit].exponent);
      const balance = {
        available: availableAmount,
        delegate: delegateAmount,
        unbonding: unbondingAmount,
        reward: rewardsAmount,
        commission: commissionAmount,
        total: {
          value: total,
          displayDenom: availableAmount.displayDenom,
          baseDenom: availableAmount.baseDenom,
          exponent: availableAmount.exponent
        }
      };
      return balance;
    };

    stateChange.balance = formatBalance(); // ============================
    // other tokens
    // ============================

    const formatOtherTokens = () => {
      // Loop through balance and delegation to figure out what the other tokens are
      const otherTokenUnits = new Set();
      const otherTokens = []; // available tokens

      const available = external_ramda_.pathOr([], ['accountBalances', 'coins'], data);
      available.forEach(x => {
        otherTokenUnits.add(x.denom);
      }); // rewards tokens

      const rewards = external_ramda_.pathOr([], ['delegationRewards'], data);
      rewards.forEach(x => {
        var _x$coins;

        (_x$coins = x.coins) === null || _x$coins === void 0 ? void 0 : _x$coins.forEach(y => {
          otherTokenUnits.add(y.denom);
        });
      }); // commission tokens

      const commission = external_ramda_.pathOr([], ['commission', 'coins'], data);
      commission.forEach(x => {
        otherTokenUnits.add(x.denom);
      }); // remove the primary token unit thats being shown in balance

      otherTokenUnits.delete(configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      otherTokenUnits.forEach(x => {
        const availableRawAmount = (0,get_denom/* getDenom */.C)(available, x);
        const availableAmount = (0,format_token/* formatToken */.nx)(availableRawAmount.amount, x);
        const rewardsRawAmount = rewards.reduce((a, b) => {
          const coins = external_ramda_.pathOr([], ['coins'], b);
          const denom = (0,get_denom/* getDenom */.C)(coins, x);
          return external_big_js_default()(a).plus(denom.amount).toPrecision();
        }, 0);
        const rewardAmount = (0,format_token/* formatToken */.nx)(rewardsRawAmount, x);
        const commissionRawAmount = (0,get_denom/* getDenom */.C)(commission, x);
        const commissionAmount = (0,format_token/* formatToken */.nx)(commissionRawAmount.amount, x);
        otherTokens.push({
          denom: external_ramda_.pathOr(x, ['tokenUnits', x, 'display'], configs/* chainConfig */.i),
          available: availableAmount,
          reward: rewardAmount,
          commission: commissionAmount
        });
      });
      return {
        data: otherTokens,
        count: otherTokens.length
      };
    };

    formatOtherTokens();
    stateChange.otherTokens = formatOtherTokens();
    return stateChange;
  };

  return {
    state
  };
};

/***/ }),

/***/ 45166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29744);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97623);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64289);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18240);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const AccountDetails = () => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('accounts');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_4__/* .useStyles */ .y)();
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAccountDetails */ .l)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {
      title: t('accountDetails'),
      openGraph: {
        title: t('accountDetails')
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .Ar, {
      navTitle: t('accountDetails'),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .LoadAndExist */ .Wf, {
        loading: state.loading,
        exists: state.exists,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          className: classes.root,
          children: [!!state.desmosProfile && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .DesmosProfile */ .BN, {
            dtag: state.desmosProfile.dtag,
            nickname: state.desmosProfile.nickname,
            imageUrl: state.desmosProfile.imageUrl,
            bio: state.desmosProfile.bio,
            connections: state.desmosProfile.connections,
            coverUrl: state.desmosProfile.coverUrl
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Overview */ .g2, {
            className: classes.overview,
            withdrawalAddress: state.overview.withdrawalAddress,
            address: state.overview.address
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Balance */ .yo, {
            className: classes.balance,
            available: state.balance.available,
            delegate: state.balance.delegate,
            unbonding: state.balance.unbonding,
            reward: state.balance.reward,
            commission: state.balance.commission,
            total: state.balance.total
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .OtherTokens */ .hU, {
            className: classes.otherTokens,
            otherTokens: state.otherTokens
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Staking */ .T4, {
            className: classes.staking,
            rewards: state.rewards
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Transactions */ .PU, {
            className: classes.transactions
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountDetails);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97623:
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
          gridGap: theme.spacing(2) // gridTemplateColumns: 'repeat(2, 1fr)',

        }
      }),
      balance: {
        [theme.breakpoints.up('lg')]: {// gridColumn: '1 / 3',
        }
      },
      otherTokens: {
        [theme.breakpoints.up('lg')]: {// gridColumn: '1 / 3',
        }
      },
      overview: {
        [theme.breakpoints.up('lg')]: {// gridColumn: '1 / 3',
        }
      },
      staking: {
        [theme.breakpoints.up('lg')]: {// gridColumn: '1 / 3',
        }
      },
      transactions: {
        [theme.breakpoints.up('lg')]: {// gridColumn: '1 / 3',
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 54118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ a11yProps)
/* harmony export */ });
/**
 * Mui helper to return allyProps tabs
 * @param index the index of the tab
 * @returns an object with `id` and `aria-controls`
 */
const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
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

/***/ 68887:
/***/ ((module) => {

module.exports = require("copy-to-clipboard");

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

/***/ 43860:
/***/ ((module) => {

module.exports = require("qrcode.react");

/***/ }),

/***/ 99634:
/***/ ((module) => {

module.exports = require("ramda");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 36158:
/***/ ((module) => {

module.exports = require("react-share");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4289,5657,5117,1371,8625,9744,9071], () => (__webpack_exec__(21423)));
module.exports = __webpack_exports__;

})();
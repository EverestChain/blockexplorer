"use strict";
(() => {
var exports = {};
exports.id = 6915;
exports.ids = [6915];
exports.modules = {

/***/ 28605:
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
/* harmony import */ var _src_screens_proposal_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93740);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_screens_proposal_details__WEBPACK_IMPORTED_MODULE_2__]);
_src_screens_proposal_details__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore




const TokenDetailsPage = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_src_screens_proposal_details__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenDetailsPage); // @ts-ignore

async function getServerSideProps(ctx) {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return {
    // @ts-ignore
    // @ts-ignore
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread({}, ctx), {}, {
      // @ts-ignore
      pathname: '/proposals/[id]',
      // @ts-ignore
      loaderName: 'getServerSideProps'
    }, (_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default())))) // @ts-ignore

  }; // @ts-ignore
} // @ts-ignore
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29744);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42570);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80201);
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93620);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92767);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const Desktop = ({
  className,
  items
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('proposals');
  const dateFormat = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_7__/* .readDate */ .cK);
  const formattedItems = items.map(x => {
    return {
      depositor: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: x.user.address ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .AvatarName */ .gj, {
          address: x.user.address,
          imageUrl: x.user.imageUrl,
          name: x.user.name
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: "-"
        })
      }),
      amount: `${(0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(x.amount.value, x.amount.exponent)} ${x.amount.displayDenom.toUpperCase()}`,
      time: (0,_utils_dayjs__WEBPACK_IMPORTED_MODULE_8__/* .formatDayJs */ .z)(_utils_dayjs__WEBPACK_IMPORTED_MODULE_8__/* ["default"].utc */ .Z.utc(x.timestamp), dateFormat)
    };
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Table, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableHead, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_9__/* .columns.map */ .z.map(column => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
              align: column.align,
              style: {
                width: `${column.width}%`
              },
              children: t(column.key)
            }, column.key);
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableBody, {
        children: formattedItems.map((row, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_9__/* .columns.map */ .z.map(column => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
              align: column.align,
              style: {
                width: `${column.width}%`
              },
              children: row[column.key]
            }, `holders-row-${i}-${column.key}`);
          })
        }, `holders-row-${i}`))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desktop);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ columns)
/* harmony export */ });
const columns = [{
  key: 'depositor',
  width: 40
}, {
  key: 'amount',
  width: 30,
  align: 'right'
}, {
  key: 'time',
  width: 30,
  align: 'right'
}];

/***/ }),

/***/ 88944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_p": () => (/* reexport safe */ _paginate__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11674);
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61970);
/* harmony import */ var _paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54286);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_desktop__WEBPACK_IMPORTED_MODULE_0__, _mobile__WEBPACK_IMPORTED_MODULE_1__, _paginate__WEBPACK_IMPORTED_MODULE_2__]);
([_desktop__WEBPACK_IMPORTED_MODULE_0__, _mobile__WEBPACK_IMPORTED_MODULE_1__, _paginate__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42570);
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93620);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29744);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80201);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43020);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_6__]);
_components__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const Mobile = ({
  className,
  items
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('proposals');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_9__/* .useStyles */ .y)();
  const dateFormat = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_8__/* .readDate */ .cK);
  const formattedItems = items.map(x => {
    return {
      depositor: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: x.user.address ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .AvatarName */ .gj, {
          address: x.user.address,
          imageUrl: x.user.imageUrl,
          name: x.user.name
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: "-"
        })
      }),
      amount: `${(0,_utils_format_token__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf)(x.amount.value, x.amount.exponent)} ${x.amount.displayDenom.toUpperCase()}`,
      time: (0,_utils_dayjs__WEBPACK_IMPORTED_MODULE_5__/* .formatDayJs */ .z)(_utils_dayjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"].utc */ .Z.utc(x.timestamp), dateFormat)
    };
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: formattedItems.map((x, i) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: classes.list,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "h4",
              className: "label",
              children: t('depositor')
            }), x.depositor]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "h4",
              className: "label",
              children: t('amount')
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "body1",
              className: "value",
              children: x.amount
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "h4",
              className: "label",
              children: t('time')
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "body1",
              className: "value",
              children: x.time
            })]
          })]
        }), i !== items.length - 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Divider, {})]
      }, `depositors-mobile-${i}`);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mobile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      list: {
        margin: theme.spacing(2, 0)
      },
      item: {
        marginBottom: theme.spacing(2),
        '& .label': {
          marginBottom: theme.spacing(1),
          color: theme.palette.custom.fonts.fontThree
        },
        '& p.value': {
          color: theme.palette.custom.fonts.fontTwo
        },
        '& a': {
          color: theme.palette.custom.fonts.highlight
        }
      },
      flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& > div': {
          width: '50%'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 54286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29744);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52107);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Paginate = ({
  total,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_2__/* .useStyles */ .y)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .tl, {
    className: classes.root,
    total: total,
    rowsPerPage: rowsPerPage,
    page: page,
    handleChangePage: handleChangePage,
    handleChangeRowsPerPage: handleChangeRowsPerPage,
    rowsPerPageOptions: [10, 25, 50, 100]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paginate);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52107:
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
        marginTop: theme.spacing(3)
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 36655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useDeposits)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91619);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41215);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42570);






const useDeposits = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    data: []
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_1__.mergeDeepLeft(stateChange, prevState));
  };

  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__/* .useProposalDetailsDepositsQuery */ .os)({
    variables: {
      proposalId: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['query', 'id'], router)
    },
    onCompleted: data => {
      handleSetState(foramtProposalDeposits(data));
    }
  });

  const foramtProposalDeposits = data => {
    const format = data.proposalDeposit.map(x => {
      return {
        amount: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatToken */ .nx)(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('0', ['amount', 0, 'amount'], x), ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(_configs__WEBPACK_IMPORTED_MODULE_4__/* .chainConfig.primaryTokenUnit */ .i.primaryTokenUnit, ['amount', 0, 'denom'], x)),
        user: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['depositorAddress'], x),
        timestamp: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['block', 'timestamp'], x)
      };
    });
    return {
      data: format
    };
  };

  return {
    state
  };
};

/***/ }),

/***/ 23901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65117);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34871);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35714);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88944);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36655);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__, _components__WEBPACK_IMPORTED_MODULE_9__]);
([_components__WEBPACK_IMPORTED_MODULE_5__, _components__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 11674)), {
  loadableGenerated: {
    modules: ["../screens/proposal_details/components/deposits/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 61970)), {
  loadableGenerated: {
    modules: ["../screens/proposal_details/components/deposits/index.tsx -> " + './components/mobile']
  }
});

const Deposits = props => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useScreenSize */ .eI)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()('proposals');
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePagination */ .h0)({});
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useDeposits */ .w)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_8__/* .useStyles */ .y)();
  let items = sliceItems(state.data);
  const dataProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_7__/* .useProfilesRecoil */ .Gs)(items.map(x => x.user));
  items = items.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      user: dataProfiles[i]
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
      className: classes.title,
      variant: "h2",
      children: t('deposits')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      className: classes.list,
      children: isDesktop ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Desktop, {
        className: classes.desktop,
        items: items
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Mobile, {
        className: classes.mobile,
        items: items
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components__WEBPACK_IMPORTED_MODULE_9__/* .Paginate */ ._p, {
      total: state.data.length,
      page: page,
      rowsPerPage: rowsPerPage,
      handleChangePage: handleChangePage,
      handleChangeRowsPerPage: handleChangeRowsPerPage
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Deposits);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35714:
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
        overflow: 'hidden'
      },
      list: {
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

/***/ 33828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g2": () => (/* reexport safe */ _overview__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "sg": () => (/* reexport safe */ _votes__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Cv": () => (/* reexport safe */ _deposits__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "qK": () => (/* reexport safe */ _votes_graph__WEBPACK_IMPORTED_MODULE_3__.Z)
/* harmony export */ });
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91636);
/* harmony import */ var _votes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14087);
/* harmony import */ var _deposits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23901);
/* harmony import */ var _votes_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96249);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_overview__WEBPACK_IMPORTED_MODULE_0__, _votes__WEBPACK_IMPORTED_MODULE_1__, _deposits__WEBPACK_IMPORTED_MODULE_2__, _votes_graph__WEBPACK_IMPORTED_MODULE_3__]);
([_overview__WEBPACK_IMPORTED_MODULE_0__, _votes__WEBPACK_IMPORTED_MODULE_1__, _deposits__WEBPACK_IMPORTED_MODULE_2__, _votes_graph__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* reexport */ params_change),
  "w": () => (/* reexport */ software_upgrade)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/proposal_details/components/overview/components/params_change/index.tsx






const ParamsChange = ({
  changes
}) => {
  const {
    t
  } = useTranslation_default()('proposals');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      overflow: 'auto'
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Table, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableHead, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: t('subspace')
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: t('key')
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: t('value')
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableBody, {
        children: changes.map(row => /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: row.subspace
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: row.key
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: row.value
          })]
        }, row.key))
      })]
    })
  });
};

/* harmony default export */ const params_change = (ParamsChange);
// EXTERNAL MODULE: external "numeral"
var external_numeral_ = __webpack_require__(88032);
var external_numeral_default = /*#__PURE__*/__webpack_require__.n(external_numeral_);
;// CONCATENATED MODULE: ./src/screens/proposal_details/components/overview/components/software_upgrade/index.tsx







const SoftwareUpgrade = ({
  height,
  info,
  name
}) => {
  const {
    t
  } = useTranslation_default()('proposals');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      overflow: 'auto',
      whiteSpace: 'nowrap'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Table, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableBody, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: t('name')
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: name
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: t('height')
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: external_numeral_default()(height).format('0,0')
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.TableRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: t('info')
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
            children: info
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const software_upgrade = (SoftwareUpgrade);
;// CONCATENATED MODULE: ./src/screens/proposal_details/components/overview/components/index.ts




/***/ }),

/***/ 91636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93620);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80201);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29744);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33067);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87615);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92109);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96482);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_9__]);
_components__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const Overview = ({
  className,
  overview
}) => {
  const dateFormat = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_7__/* .readDate */ .cK);
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_12__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()('proposals');
  const type = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .getProposalType */ .c)(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['@type'], overview.content));
  const proposer = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_10__/* .useProfileRecoil */ .Pl)(overview.proposer);
  const proposerMoniker = proposer ? proposer === null || proposer === void 0 ? void 0 : proposer.name : overview.proposer;

  const getExtraDetails = () => {
    let extraDetails = null;

    if (type === 'parameterChangeProposal') {
      extraDetails = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "label",
          children: t('changes')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components__WEBPACK_IMPORTED_MODULE_11__/* .ParamsChange */ .G, {
          changes: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['changes'], overview.content)
        })]
      });
    } else if (type === 'softwareUpgradeProposal') {
      extraDetails = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "label",
          children: t('plan')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components__WEBPACK_IMPORTED_MODULE_11__/* .SoftwareUpgrade */ .w, {
          height: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('0', ['plan', 'height'], overview.content),
          info: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['plan', 'info'], overview.content),
          name: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['plan', 'name'], overview.content)
        })]
      });
    }

    return extraDetails;
  };

  const extra = getExtraDetails();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components__WEBPACK_IMPORTED_MODULE_9__/* .SingleProposal */ .i4, {
      id: `#${numeral__WEBPACK_IMPORTED_MODULE_2___default()(overview.id).format('0,0')}`,
      title: overview.title,
      status: overview.status
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Divider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: classes.content,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        variant: "body1",
        className: "label",
        children: t('type')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        variant: "body1",
        className: "value",
        children: t(type)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        variant: "body1",
        className: "label",
        children: t('proposer')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components__WEBPACK_IMPORTED_MODULE_9__/* .Name */ .VG, {
        name: proposerMoniker,
        address: proposer.address
      }), !!overview.submitTime && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "label",
          children: t('submitTime')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "value",
          children: (0,_utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* .formatDayJs */ .z)(_utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utc */ .Z.utc(overview.submitTime), dateFormat)
        })]
      }), !!overview.depositEndTime && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "label",
          children: t('depositEndTime')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "value",
          children: (0,_utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* .formatDayJs */ .z)(_utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utc */ .Z.utc(overview.depositEndTime), dateFormat)
        })]
      }), !!overview.votingStartTime && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "label",
          children: t('votingStartTime')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "value",
          children: (0,_utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* .formatDayJs */ .z)(_utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utc */ .Z.utc(overview.votingStartTime), dateFormat)
        })]
      }), !!overview.votingEndTime && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "label",
          children: t('votingEndTime')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          variant: "body1",
          className: "value",
          children: (0,_utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* .formatDayJs */ .z)(_utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utc */ .Z.utc(overview.votingEndTime), dateFormat)
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        variant: "body1",
        className: "label",
        children: t('description')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components__WEBPACK_IMPORTED_MODULE_9__/* .Markdown */ .UG, {
        markdown: overview.description
      }), extra]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92109:
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
        '& .label': {
          color: theme.palette.custom.fonts.fontThree
        }
      },
      content: {
        marginTop: theme.spacing(2),
        display: 'grid',
        '& > *': {
          marginBottom: theme.spacing(1),
          [theme.breakpoints.up('lg')]: {
            marginBottom: theme.spacing(2)
          }
        },
        [theme.breakpoints.up('lg')]: {
          gridTemplateColumns: '200px auto'
        }
      },
      time: {
        marginTop: theme.spacing(2),
        display: 'grid',
        '& > *': {
          marginBottom: theme.spacing(1),
          [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(2)
          }
        },
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: 'repeat(2, 1fr)'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 44826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29744);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15994);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24558);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Desktop = ({
  className,
  items
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('proposals');
  const formattedItems = items.map(x => {
    return {
      voter: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .AvatarName */ .gj, {
        address: x.user.address,
        imageUrl: x.user.imageUrl,
        name: x.user.name
      }),
      vote: t((0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getVoteKey */ .g)(x.vote))
    };
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Table, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableHead, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_5__/* .columns.map */ .z.map(column => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
              align: column.align,
              style: {
                width: `${column.width}%`
              },
              children: t(column.key)
            }, column.key);
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableBody, {
        children: formattedItems.map((row, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_5__/* .columns.map */ .z.map(column => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
              align: column.align,
              style: {
                width: `${column.width}%`
              },
              children: row[column.key]
            }, `holders-row-${i}-${column.key}`);
          })
        }, `holders-row-${i}`))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desktop);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ columns)
/* harmony export */ });
const columns = [{
  key: 'voter',
  // width: 34,
  width: 50
}, // {
//   key: 'votingPower',
//   width: 33,
//   align: 'right',
// },
{
  key: 'vote',
  // width: 33,
  width: 50,
  align: 'right'
}];

/***/ }),

/***/ 89509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mQ": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "_p": () => (/* reexport safe */ _paginate__WEBPACK_IMPORTED_MODULE_3__.Z)
/* harmony export */ });
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45847);
/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44826);
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69801);
/* harmony import */ var _paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_desktop__WEBPACK_IMPORTED_MODULE_1__, _mobile__WEBPACK_IMPORTED_MODULE_2__, _paginate__WEBPACK_IMPORTED_MODULE_3__]);
([_desktop__WEBPACK_IMPORTED_MODULE_1__, _mobile__WEBPACK_IMPORTED_MODULE_2__, _paginate__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29744);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60481);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24558);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Mobile = ({
  className,
  items
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('proposals');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_5__/* .useStyles */ .y)();
  const formattedItems = items.map(x => {
    return {
      voter: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .AvatarName */ .gj, {
        address: x.user.address,
        imageUrl: x.user.imageUrl,
        name: x.user.name
      }),
      vote: t((0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getVoteKey */ .g)(x.vote))
    };
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: formattedItems.map((x, i) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: classes.list,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "h4",
              className: "label",
              children: t('voter')
            }), x.voter]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "h4",
              className: "label",
              children: t('vote')
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "body1",
              className: "value",
              children: x.vote
            })]
          })]
        }), i !== formattedItems.length - 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Divider, {})]
      }, `votes-mobile-${i}`);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mobile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      list: {
        margin: theme.spacing(2, 0)
      },
      item: {
        marginBottom: theme.spacing(2),
        '& .label': {
          marginBottom: theme.spacing(1),
          color: theme.palette.custom.fonts.fontThree
        },
        '& p.value': {
          color: theme.palette.custom.fonts.fontTwo
        },
        '& a': {
          color: theme.palette.custom.fonts.highlight
        }
      },
      flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& > div': {
          width: '50%'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 54699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29744);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73039);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Paginate = ({
  total,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_2__/* .useStyles */ .y)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .tl, {
    className: classes.root,
    total: total,
    rowsPerPage: rowsPerPage,
    page: page,
    handleChangePage: handleChangePage,
    handleChangeRowsPerPage: handleChangeRowsPerPage,
    rowsPerPageOptions: [10, 25, 50, 100]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paginate);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73039:
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
        marginTop: theme.spacing(3)
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 45847:
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
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/utils/allyProps.ts
var allyProps = __webpack_require__(54118);
;// CONCATENATED MODULE: ./src/screens/proposal_details/components/votes/components/tabs/utils.ts
const tabLabels = data => {
  const {
    yes,
    no,
    abstain,
    veto,
    notVoted
  } = data;
  const total = yes + no + abstain + veto;
  return [{
    key: 'all',
    num: total
  }, {
    key: 'yes',
    num: yes
  }, {
    key: 'no',
    num: no
  }, {
    key: 'veto',
    num: veto
  }, {
    key: 'abstain',
    num: abstain
  }, {
    key: 'didNotVote',
    num: notVoted
  }];
};
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/proposal_details/components/votes/components/tabs/styles.ts

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
;// CONCATENATED MODULE: ./src/screens/proposal_details/components/votes/components/tabs/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const TabsHeader = ({
  className,
  tab,
  handleTabChange,
  data
}) => {
  const classes = useStyles();
  const {
    t
  } = useTranslation_default()('proposals');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()(className, classes.root),
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Tabs, {
      variant: "scrollable",
      scrollButtons: "off",
      value: tab,
      onChange: handleTabChange,
      children: tabLabels(data).map((x, i) => /*#__PURE__*/jsx_runtime_.jsx(core_.Tab, _objectSpread({
        label: `${t(x.key)} (${x.num})`
      }, (0,allyProps/* a11yProps */.P)(i)), x.key))
    })
  });
};

/* harmony default export */ const tabs = (TabsHeader);

/***/ }),

/***/ 2435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useVotes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91619);
/* harmony import */ var _utils_prefix_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82776);





const useVotes = resetPagination => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    data: [],
    validatorsNotVoted: [],
    voteCount: {
      yes: 0,
      no: 0,
      abstain: 0,
      veto: 0,
      didNotVote: 0
    },
    tab: 0
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_2__.mergeDeepLeft(stateChange, prevState));
  };

  const handleTabChange = (_event, newValue) => {
    if (resetPagination) {
      resetPagination();
    }

    handleSetState({
      tab: newValue
    });
  };

  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__/* .useProposalDetailsVotesQuery */ .B2)({
    variables: {
      proposalId: ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr('', ['query', 'id'], router)
    },
    onCompleted: data => {
      handleSetState(formatVotes(data));
    }
  });

  const formatVotes = data => {
    const validatorDict = {};
    const validators = data.validatorStatuses.map(x => {
      const selfDelegateAddress = ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr('', ['validator', 'validatorInfo', 'selfDelegateAddress'], x);
      validatorDict[selfDelegateAddress] = false;
      return selfDelegateAddress;
    });
    let yes = 0;
    let no = 0;
    let abstain = 0;
    let veto = 0;
    const votes = data.proposalVote.map(x => {
      if (x.option === 'VOTE_OPTION_YES') {
        yes += 1;
      }

      if (x.option === 'VOTE_OPTION_ABSTAIN') {
        abstain += 1;
      }

      if (x.option === 'VOTE_OPTION_NO') {
        no += 1;
      }

      if (x.option === 'VOTE_OPTION_NO_WITH_VETO') {
        veto += 1;
      }

      if (validatorDict[x.voterAddress] === false) {
        validatorDict[x.voterAddress] = true;
      }

      return {
        user: x.voterAddress,
        vote: x.option
      };
    }); // =====================================
    // Get data for active validators that did not vote
    // =====================================

    const validatorsNotVoted = validators.filter(x => {
      return validatorDict[x] === false;
    }).map(address => {
      return {
        user: (0,_utils_prefix_convert__WEBPACK_IMPORTED_MODULE_4__/* .toValidatorAddress */ .W)(address),
        vote: 'NOT_VOTED'
      };
    });
    return {
      data: votes,
      validatorsNotVoted,
      voteCount: {
        yes,
        no,
        veto,
        abstain,
        didNotVote: validatorsNotVoted.length
      }
    };
  };

  return {
    state,
    handleTabChange
  };
};

/***/ }),

/***/ 14087:
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
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34871);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28465);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89509);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24558);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2435);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_7__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 44826)), {
  loadableGenerated: {
    modules: ["../screens/proposal_details/components/votes/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 69801)), {
  loadableGenerated: {
    modules: ["../screens/proposal_details/components/votes/index.tsx -> " + './components/mobile']
  }
});

const Votes = props => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useScreenSize */ .eI)();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
    resetPagination
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePagination */ .h0)({});
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_6__/* .useStyles */ .y)();
  const {
    state,
    handleTabChange
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useVotes */ .u)(resetPagination);
  const filteredItems = (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .filterDataByTab */ .S)({
    tab: state.tab,
    data: state.data,
    notVoted: state.validatorsNotVoted
  });
  const slicedItems = sliceItems(filteredItems);
  const userProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_5__/* .useProfilesRecoil */ .Gs)(slicedItems.map(x => x.user));
  const items = slicedItems.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      user: userProfiles[i]
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .Tabs */ .mQ, {
      data: {
        yes: state.voteCount.yes,
        no: state.voteCount.no,
        abstain: state.voteCount.abstain,
        veto: state.voteCount.veto,
        notVoted: state.voteCount.didNotVote
      },
      tab: state.tab,
      handleTabChange: handleTabChange
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: classes.list,
      children: items.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: isDesktop ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Desktop, {
          className: classes.desktop,
          items: items
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Mobile, {
          className: classes.mobile,
          items: items
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .NoData */ .Jd, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .Paginate */ ._p, {
      total: filteredItems.length,
      page: page,
      rowsPerPage: rowsPerPage,
      handleChangePage: handleChangePage,
      handleChangeRowsPerPage: handleChangeRowsPerPage
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Votes);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28465:
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
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          flexDirection: 'column'
        }
      },
      list: {
        flex: 1,
        [theme.breakpoints.up('md')]: {
          overflow: 'auto'
        }
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

/***/ 24558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getVoteKey),
/* harmony export */   "S": () => (/* binding */ filterDataByTab)
/* harmony export */ });
const getVoteKey = vote => {
  const votes = {
    VOTE_OPTION_YES: 'yes',
    VOTE_OPTION_NO: 'no',
    VOTE_OPTION_NO_WITH_VETO: 'veto',
    VOTE_OPTION_ABSTAIN: 'abstain',
    NOT_VOTED: 'notVoted'
  };
  return votes[vote] || vote;
};
const filterDataByTab = props => {
  if (props.tab === 5) {
    return props.notVoted;
  }

  return props.data.filter(x => {
    if (props.tab === 1) {
      return x.vote === 'VOTE_OPTION_YES';
    }

    if (props.tab === 2) {
      return x.vote === 'VOTE_OPTION_NO';
    }

    if (props.tab === 3) {
      return x.vote === 'VOTE_OPTION_NO_WITH_VETO';
    }

    if (props.tab === 4) {
      return x.vote === 'VOTE_OPTION_ABSTAIN';
    }

    return true;
  });
};

/***/ }),

/***/ 67466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ quorum_explanation)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "next-translate/Trans"
var Trans_ = __webpack_require__(74137);
var Trans_default = /*#__PURE__*/__webpack_require__.n(Trans_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/proposal_details/components/votes_graph/components/quorum_explanation/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(() => {
    return {
      root: {
        height: '100%'
      }
    };
  })();
  return styles;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/proposal_details/components/votes_graph/components/quorum_explanation/index.tsx






const QuorumExplanation = props => {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      children: /*#__PURE__*/jsx_runtime_.jsx((Trans_default()), {
        i18nKey: "proposals:quorumExplanation",
        components: [/*#__PURE__*/jsx_runtime_.jsx("b", {})],
        values: {
          quorum: props.quorum
        }
      })
    })
  });
};

/* harmony default export */ const quorum_explanation = (QuorumExplanation);
;// CONCATENATED MODULE: ./src/screens/proposal_details/components/votes_graph/components/index.tsx



/***/ }),

/***/ 53996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useVotesGraph)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91619);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42570);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41215);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22575);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_6__);







const defaultTokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0
};
const useVotesGraph = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    votes: {
      yes: defaultTokenUnit,
      no: defaultTokenUnit,
      abstain: defaultTokenUnit,
      veto: defaultTokenUnit
    },
    bonded: defaultTokenUnit,
    quorum: 0
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_1__.mergeDeepLeft(stateChange, prevState));
  };

  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__/* .useProposalDetailsTallyQuery */ .g8)({
    variables: {
      proposalId: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['query', 'id'], router)
    },
    onCompleted: data => {
      handleSetState(foramtProposalTally(data));
    }
  });

  const foramtProposalTally = data => {
    const quorumRaw = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('0', [0, 'tallyParams', 'quorum'], data.quorum);
    return {
      votes: {
        yes: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_4__/* .formatToken */ .nx)(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('0', ['proposalTallyResult', 0, 'yes'], data), _configs__WEBPACK_IMPORTED_MODULE_5__/* .chainConfig.votingPowerTokenUnit */ .i.votingPowerTokenUnit),
        no: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_4__/* .formatToken */ .nx)(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('0', ['proposalTallyResult', 0, 'no'], data), _configs__WEBPACK_IMPORTED_MODULE_5__/* .chainConfig.votingPowerTokenUnit */ .i.votingPowerTokenUnit),
        veto: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_4__/* .formatToken */ .nx)(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('0', ['proposalTallyResult', 0, 'noWithVeto'], data), _configs__WEBPACK_IMPORTED_MODULE_5__/* .chainConfig.votingPowerTokenUnit */ .i.votingPowerTokenUnit),
        abstain: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_4__/* .formatToken */ .nx)(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('0', ['proposalTallyResult', 0, 'abstain'], data), _configs__WEBPACK_IMPORTED_MODULE_5__/* .chainConfig.votingPowerTokenUnit */ .i.votingPowerTokenUnit)
      },
      bonded: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_4__/* .formatToken */ .nx)(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('0', ['stakingPool', 0, 'bondedTokens'], data), _configs__WEBPACK_IMPORTED_MODULE_5__/* .chainConfig.votingPowerTokenUnit */ .i.votingPowerTokenUnit),
      quorum: big_js__WEBPACK_IMPORTED_MODULE_6___default()(quorumRaw).times(100).toFixed(2)
    };
  };

  return {
    state
  };
};

/***/ }),

/***/ 96249:
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
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22575);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29744);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56369);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47787);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53996);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67466);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const VotesGraph = props => {
  const {
    classes,
    theme
  } = (0,_styles__WEBPACK_IMPORTED_MODULE_8__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()('proposals');
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useVotesGraph */ .e)();
  const {
    votes
  } = state;
  const {
    quorum
  } = state;
  const total = big_js__WEBPACK_IMPORTED_MODULE_3___default()(votes.yes.value).plus(votes.no.value).plus(votes.veto.value).plus(votes.abstain.value);
  const formattedData = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatGraphData */ .O)({
    data: votes,
    theme,
    total
  });
  const totalVotedFormat = numeral__WEBPACK_IMPORTED_MODULE_2___default()(total.toFixed(2)).format('0,0.[00]');
  const totalBondedFormat = numeral__WEBPACK_IMPORTED_MODULE_2___default()(state.bonded.value).format('0,0.[00]');
  const totalVotedPercent = total.gt(0) ? `${numeral__WEBPACK_IMPORTED_MODULE_2___default()(big_js__WEBPACK_IMPORTED_MODULE_3___default()(total.toFixed(2)).div(state.bonded.value).times(100).toFixed(2)).format('0.[00]')}%` : '0%';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
      className: classes.pie,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(recharts__WEBPACK_IMPORTED_MODULE_7__.PieChart, {
        width: 250,
        height: 250,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(recharts__WEBPACK_IMPORTED_MODULE_7__.Pie, {
          cx: "50%",
          cy: "50%",
          stroke: "none",
          dataKey: "value",
          data: formattedData,
          fill: "#8884d8",
          isAnimationActive: false,
          children: formattedData.map((entry, index) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(recharts__WEBPACK_IMPORTED_MODULE_7__.Cell, {
              fill: entry.color,
              stroke: entry.color
            }, `cell-${index}`);
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: classes.legend,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: classes.total,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
          variant: "caption",
          children: t('votedTotalCaption', {
            totalVotedPercent
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
          variant: "h2",
          children: [totalVotedFormat, ' ', "/", ' ', totalBondedFormat]
        })]
      }), formattedData.filter(x => x.name !== 'empty').map(x => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.voteItem, x.name),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variant: "caption",
            children: [t(x.name), ' ', "(", x.percentage, ")"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            children: x.display
          })]
        }, x.name);
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
      className: classes.popOver,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .InfoPopover */ .Ob, {
        content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components__WEBPACK_IMPORTED_MODULE_11__/* .QuorumExplanation */ .Y, {
          quorum: quorum
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VotesGraph);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56369:
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
        [theme.breakpoints.up('lg')]: {
          display: 'flex',
          alignItems: 'center'
        },
        position: 'relative'
      },
      pie: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      legend: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridGap: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: 'repeat(2, 1fr)'
        },
        [theme.breakpoints.up('lg')]: {
          flex: 1,
          marginLeft: theme.spacing(4)
        }
      },
      total: {
        [theme.breakpoints.up('md')]: {
          gridColumn: '1/3'
        }
      },
      popOver: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2)
      },
      voteItem: {
        position: 'relative',
        paddingLeft: '10px',
        '&::before': {
          content: '""',
          display: 'block',
          width: '5px',
          background: 'pink',
          height: '100%',
          position: 'absolute',
          borderRadius: theme.shape.borderRadius,
          left: 0
        },
        '&.yes': {
          '&::before': {
            background: theme.palette.custom.charts.four
          }
        },
        '&.no': {
          '&::before': {
            background: theme.palette.custom.charts.one
          }
        },
        '&.veto': {
          '&::before': {
            background: theme.palette.custom.charts.three
          }
        },
        '&.abstain': {
          '&::before': {
            background: theme.palette.custom.charts.two
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

/***/ 47787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ formatGraphData)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22575);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42570);



const formatGraphData = ({
  data,
  theme,
  total
}) => {
  const keys = ramda__WEBPACK_IMPORTED_MODULE_0__.keys(data);
  const color = {
    0: theme.palette.custom.charts.four,
    1: theme.palette.custom.charts.one,
    2: theme.palette.custom.charts.three,
    3: theme.palette.custom.charts.two
  };
  const formattedData = keys.map((x, i) => {
    const selectedData = data[x];
    return {
      name: x,
      value: big_js__WEBPACK_IMPORTED_MODULE_1___default()(selectedData.value).toNumber(),
      display: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .uf)(selectedData.value, selectedData.exponent),
      percentage: total.gt(0) ? `${big_js__WEBPACK_IMPORTED_MODULE_1___default()(selectedData.value).div(total.toString()).times(100).toFixed(2)}%` : '0%',
      color: color[i]
    };
  });
  const notEmpty = formattedData.some(x => x.value > 0);

  if (!notEmpty) {
    formattedData.push({
      name: 'empty',
      value: 2400,
      color: theme.palette.custom.charts.zero,
      percentage: '0%',
      display: ''
    });
  }

  return formattedData;
};

/***/ }),

/***/ 26535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useProposalDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91619);




const useProposalDetails = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    loading: true,
    exists: true,
    overview: {
      proposer: '',
      content: '',
      title: '',
      id: 0,
      description: '',
      status: '',
      submitTime: '',
      depositEndTime: '',
      votingStartTime: '',
      votingEndTime: ''
    }
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_1__.mergeDeepLeft(stateChange, prevState));
  }; // ==========================
  // fetch data
  // ==========================


  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__/* .useProposalDetailsQuery */ .nk)({
    variables: {
      proposalId: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['query', 'id'], router)
    },
    onCompleted: data => {
      handleSetState(formatProposalQuery(data));
    }
  }); // ==========================
  // parsers
  // ==========================

  const formatProposalQuery = data => {
    const stateChange = {
      loading: false
    };

    if (!data.proposal.length) {
      stateChange.exists = false;
      return stateChange;
    } // =========================
    // overview
    // =========================


    const formatOverview = () => {
      const DEFAULT_TIME = '0001-01-01T00:00:00';
      let votingStartTime = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(DEFAULT_TIME, ['proposal', 0, 'votingStartTime'], data);
      votingStartTime = votingStartTime === DEFAULT_TIME ? null : votingStartTime;
      let votingEndTime = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(DEFAULT_TIME, ['proposal', 0, 'votingEndTime'], data);
      votingEndTime = votingEndTime === DEFAULT_TIME ? null : votingEndTime;
      const overview = {
        proposer: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['proposal', 0, 'proposer'], data),
        content: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['proposal', 0, 'content'], data),
        title: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['proposal', 0, 'title'], data),
        id: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['proposal', 0, 'proposalId'], data),
        description: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['proposal', 0, 'description'], data),
        status: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['proposal', 0, 'status'], data),
        submitTime: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['proposal', 0, 'submitTime'], data),
        depositEndTime: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['proposal', 0, 'depositEndTime'], data),
        votingStartTime,
        votingEndTime
      };
      return overview;
    };

    stateChange.overview = formatOverview();
    return stateChange;
  };

  return {
    state
  };
};

/***/ }),

/***/ 93740:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19075);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33828);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26535);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96482);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ProposalDetails = () => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('proposals');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_4__/* .useStyles */ .y)();
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useProposalDetails */ .Z)();
  const {
    overview
  } = state;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
      title: t('proposalDetails'),
      openGraph: {
        title: t('proposalDetails')
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
      navTitle: t('proposalDetails'),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .LoadAndExist */ .Wf, {
        exists: state.exists,
        loading: state.loading,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          className: classes.root,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Overview */ .g2, {
            className: classes.overview,
            overview: overview
          }), (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .shouldShowData */ .j)(overview.status) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .VotesGraph */ .qK, {
            className: classes.votesGraph
          }), (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .shouldShowData */ .j)(overview.status) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Votes */ .sg, {
            className: classes.votes
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Deposits */ .Cv, {
            className: classes.deposits
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProposalDetails);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19075:
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
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'min-content min-content auto',
        gridGap: theme.spacing(1),
        [theme.breakpoints.up('lg')]: {
          gridGap: theme.spacing(2),
          gridTemplateColumns: 'repeat(3, 1fr)'
        }
      }),
      overview: {
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 4'
        }
      },
      deposits: {
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 4'
        }
      },
      votes: {
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 4'
        }
      },
      votesGraph: {
        [theme.breakpoints.up('md')]: {
          gridColumn: '1 / 2'
        },
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 4',
          height: 'auto'
        }
      }
    };
  }, {
    index: 1
  })();
  return styles;
};

/***/ }),

/***/ 96482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getProposalType),
/* harmony export */   "j": () => (/* binding */ shouldShowData)
/* harmony export */ });
const getProposalType = proposalType => {
  let type = proposalType;

  if (proposalType === '/cosmos.gov.v1beta1.TextProposal') {
    type = 'textProposal';
  }

  if (proposalType === '/cosmos.params.v1beta1.ParameterChangeProposal') {
    type = 'parameterChangeProposal';
  }

  if (proposalType === '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal') {
    type = 'softwareUpgradeProposal';
  }

  if (proposalType === '/cosmos.upgrade.v1beta1.CommunityPoolSpendProposal') {
    type = 'communityPoolSpendProposal';
  }

  return type;
};
const shouldShowData = status => ['PROPOSAL_STATUS_VOTING_PERIOD', 'PROPOSAL_STATUS_PASSED', 'PROPOSAL_STATUS_REJECTED', 'PROPOSAL_STATUS_FAILED'].includes(status);

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
var __webpack_exports__ = __webpack_require__.X(0, [4289,5657,5117,1371,8625,9744], () => (__webpack_exec__(28605)));
module.exports = __webpack_exports__;

})();
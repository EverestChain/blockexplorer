"use strict";
(() => {
var exports = {};
exports.id = 6710;
exports.ids = [6710];
exports.modules = {

/***/ 1105:
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
/* harmony import */ var _screens_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37798);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_screens_validators__WEBPACK_IMPORTED_MODULE_2__]);
_screens_validators__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore




const ValidatorsPage = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_screens_validators__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatorsPage); // @ts-ignore

async function getStaticProps(ctx) {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return {
    // @ts-ignore
    // @ts-ignore
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread({}, ctx), {}, {
      // @ts-ignore
      pathname: '/validators/index',
      // @ts-ignore
      loaderName: 'getStaticProps'
    }, (_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default())))) // @ts-ignore

  }; // @ts-ignore
} // @ts-ignore
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_list__WEBPACK_IMPORTED_MODULE_0__]);
_list__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ condition)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/validators/components/list/components/condition/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        width: '10px',
        height: '10px',
        background: theme.palette.custom.condition.zero,
        margin: '0 auto',
        borderRadius: '50%',
        '&.green': {
          background: theme.palette.custom.condition.one
        },
        '&.yellow': {
          background: theme.palette.custom.condition.two
        },
        '&.red': {
          background: theme.palette.custom.condition.three
        }
      }
    };
  })();
  return styles;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/validators/components/list/components/condition/index.tsx





const Condition = ({
  className
}) => {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()(className, classes.root)
  });
};

/* harmony default export */ const condition = (Condition);

/***/ }),

/***/ 22370:
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
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88041);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80551);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34871);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29744);
/* harmony import */ var _utils_get_validator_condition__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96515);
/* harmony import */ var _utils_get_validator_status__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39143);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84010);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48277);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91911);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_8__, _utils__WEBPACK_IMPORTED_MODULE_10__, ___WEBPACK_IMPORTED_MODULE_11__]);
([_components__WEBPACK_IMPORTED_MODULE_8__, _utils__WEBPACK_IMPORTED_MODULE_10__, ___WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const Desktop = props => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('validators');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_9__/* .useStyles */ .y)();
  const columns = (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .fetchColumns */ .H)(t);
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useGrid */ .Nm)(columns);
  const formattedItems = props.items.map((x, i) => {
    const status = (0,_utils_get_validator_status__WEBPACK_IMPORTED_MODULE_13__/* .getValidatorStatus */ .O)(x.status, x.jailed, x.tombstoned);
    const condition = x.status === 3 ? (0,_utils_get_validator_condition__WEBPACK_IMPORTED_MODULE_14__/* .getValidatorConditionClass */ .J)(x.condition) : undefined;
    const percentDisplay = x.status === 3 ? `${numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.votingPowerPercent).format('0.[00]')}%` : '0%';
    const votingPower = numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.votingPower).format('0,0');
    return {
      idx: `#${i + 1}`,
      validator: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .AvatarName */ .gj, {
        address: x.validator.address,
        imageUrl: x.validator.imageUrl,
        name: x.validator.name
      }),
      commission: `${numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.commission).format('0.[00]')}%`,
      condition: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(___WEBPACK_IMPORTED_MODULE_11__/* .Condition */ .gP, {
        className: condition
      }),
      votingPower: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(___WEBPACK_IMPORTED_MODULE_11__/* .VotingPower */ .km, {
        percentDisplay: percentDisplay,
        percentage: x.votingPowerPercent,
        content: votingPower,
        topVotingPower: x.topVotingPower
      }),
      status: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
        variant: "body1",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('status', status.theme),
        children: t(status.status)
      })
    };
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, classes.root),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4___default()), {
      onResize: onResize,
      children: ({
        height,
        width
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_window__WEBPACK_IMPORTED_MODULE_5__.VariableSizeGrid, {
            ref: columnRef,
            columnCount: columns.length,
            columnWidth: index => getColumnWidth(width, index),
            height: 50,
            rowCount: 1,
            rowHeight: () => 50,
            width: width,
            children: ({
              columnIndex,
              style
            }) => {
              const {
                key,
                align,
                component,
                sort,
                sortKey: sortingKey
              } = columns[columnIndex];
              let formattedComponent = component;

              if (key === 'votingPower') {
                formattedComponent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                  variant: "h4",
                  className: "label popover",
                  children: [t('votingPower'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .InfoPopover */ .Ob, {
                    content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(___WEBPACK_IMPORTED_MODULE_11__/* .VotingPowerExplanation */ .k_, {})
                  }), !!sort && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .SortArrows */ .rY, {
                    sort: props.sortKey === sortingKey ? props.sortDirection : undefined
                  })]
                });
              }

              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
                style: style,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cell, {
                  [classes.flexCells]: component || sort,
                  [align]: sort || component,
                  sort
                }),
                onClick: () => sort ? props.handleSort(sortingKey) : null,
                role: "button",
                children: formattedComponent || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                  variant: "h4",
                  align: align,
                  children: [t(key), !!sort && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .SortArrows */ .rY, {
                    sort: props.sortKey === sortingKey ? props.sortDirection : undefined
                  })]
                })
              });
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_window__WEBPACK_IMPORTED_MODULE_5__.VariableSizeGrid, {
            ref: gridRef,
            columnCount: columns.length,
            columnWidth: index => getColumnWidth(width, index),
            height: height - 50,
            rowCount: formattedItems.length,
            rowHeight: getRowHeight,
            width: width,
            className: "scrollbar",
            children: ({
              columnIndex,
              rowIndex,
              style
            }) => {
              const {
                key,
                align
              } = columns[columnIndex];
              const item = formattedItems[rowIndex][key];
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
                style: style,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cell, classes.body, {
                  odd: !(rowIndex % 2)
                }),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                  variant: "body1",
                  align: align,
                  component: "div",
                  children: item
                })
              });
            }
          })]
        });
      }
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desktop);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84010:
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
      root: {
        height: '100%',
        '& .status': {
          '&.one': {
            color: theme.palette.custom.tags.one
          },
          '&.two': {
            color: theme.palette.custom.tags.two
          },
          '&.three': {
            color: theme.palette.custom.tags.three
          },
          '&.zero': {
            color: theme.palette.custom.tags.zero
          }
        }
      },
      cell: _objectSpread(_objectSpread({}, theme.mixins.tableCell), {}, {
        '&.sort:hover': {
          cursor: 'pointer'
        }
      }),
      flexCells: {
        '& > *': {
          display: 'flex',
          alignItems: 'center'
        },
        '&.right': {
          '& > *': {
            justifyContent: 'flex-end'
          }
        },
        '&.center': {
          '& > *': {
            justifyContent: 'center'
          }
        }
      },
      body: {
        color: theme.palette.custom.fonts.fontTwo
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 48277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ fetchColumns)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29744);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const fetchColumns = t => {
  return [{
    key: 'idx',
    width: 5
  }, {
    key: 'validator',
    sortKey: 'validator.name',
    width: 25,
    sort: true
  }, {
    key: 'votingPower',
    sortKey: 'votingPower',
    width: 30,
    sort: true
  }, {
    key: 'commission',
    sortKey: 'commission',
    align: 'right',
    width: 15,
    sort: true
  }, {
    key: 'condition',
    align: 'center',
    width: 15,
    component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      variant: "h4",
      className: "label popover",
      children: [t('condition'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .InfoPopover */ .Ob, {
        content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ConditionExplanation */ .mK, {})
      })]
    })
  }, {
    key: 'status',
    width: 10
  }];
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mQ": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "gP": () => (/* reexport safe */ _condition__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "km": () => (/* reexport safe */ _voting_power__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "k_": () => (/* reexport safe */ _voting_power_explanation__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22370);
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65338);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69832);
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38082);
/* harmony import */ var _voting_power__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52269);
/* harmony import */ var _voting_power_explanation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19366);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_desktop__WEBPACK_IMPORTED_MODULE_0__, _mobile__WEBPACK_IMPORTED_MODULE_1__, _tabs__WEBPACK_IMPORTED_MODULE_2__]);
([_desktop__WEBPACK_IMPORTED_MODULE_0__, _mobile__WEBPACK_IMPORTED_MODULE_1__, _tabs__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ single_validator)
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
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/validators/components/list/components/mobile/component/single_validator/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        margin: theme.spacing(2, 0)
      },
      item: {
        marginBottom: theme.spacing(2),
        '& .label': {
          marginBottom: theme.spacing(1),
          color: theme.palette.custom.fonts.fontThree,
          '&.popover': {
            display: 'flex',
            alignItems: 'flex-start'
          }
        },
        '& p.value': {
          color: theme.palette.custom.fonts.fontTwo
        },
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        '& .status': {
          '&.one': {
            color: theme.palette.custom.tags.one
          },
          '&.two': {
            color: theme.palette.custom.tags.two
          },
          '&.three': {
            color: theme.palette.custom.tags.three
          },
          '&.zero': {
            color: theme.palette.custom.tags.zero
          }
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
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/validators/components/list/components/mobile/component/single_validator/index.tsx








const SingleValidator = ({
  className,
  validator,
  commission,
  votingPower,
  status
}) => {
  const {
    t
  } = useTranslation_default()('validators');
  const classes = useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()(className, classes.root),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.item,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "h4",
        className: "label",
        children: t('validator')
      }), validator]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.item,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "h4",
        className: "label",
        children: t('votingPower')
      }), votingPower]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.flex,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h4",
          className: "label",
          children: t('status')
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "body1",
          className: external_classnames_default()('value', 'status', status.theme),
          children: t(status.status)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h4",
          className: "label",
          children: t('commission')
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "body1",
          className: "value",
          children: commission
        })]
      })]
    })]
  });
};

/* harmony default export */ const single_validator = (SingleValidator);
;// CONCATENATED MODULE: ./src/screens/validators/components/list/components/mobile/component/index.ts



/***/ }),

/***/ 65338:
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
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80551);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88041);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29744);
/* harmony import */ var _utils_get_validator_condition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96515);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34871);
/* harmony import */ var _utils_get_validator_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39143);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58410);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91911);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_6__, ___WEBPACK_IMPORTED_MODULE_9__]);
([_components__WEBPACK_IMPORTED_MODULE_6__, ___WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const Mobile = ({
  className,
  items
}) => {
  const {
    listRef,
    getRowHeight,
    setRowHeight
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useList */ .sm)();
  const formattedItems = items.map((x, i) => {
    const status = (0,_utils_get_validator_status__WEBPACK_IMPORTED_MODULE_11__/* .getValidatorStatus */ .O)(x.status, x.jailed, x.tombstoned);
    const condition = x.status === 3 ? (0,_utils_get_validator_condition__WEBPACK_IMPORTED_MODULE_12__/* .getValidatorConditionClass */ .J)(x.condition) : undefined;
    const percentDisplay = x.status === 3 ? `${numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.votingPowerPercent).format('0.[00]')}%` : '0%';
    const votingPower = numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.votingPower).format('0,0');
    return {
      idx: `#${i + 1}`,
      validator: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .AvatarName */ .gj, {
        address: x.validator.address,
        imageUrl: x.validator.imageUrl,
        name: x.validator.name
      }),
      commission: `${numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.commission).format('0.[00]')}%`,
      condition: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(___WEBPACK_IMPORTED_MODULE_9__/* .Condition */ .gP, {
        className: condition
      }),
      votingPower: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(___WEBPACK_IMPORTED_MODULE_9__/* .VotingPower */ .km, {
        percentDisplay: percentDisplay,
        percentage: x.votingPowerPercent,
        content: votingPower,
        topVotingPower: x.topVotingPower
      }),
      status
    };
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: ({
        height,
        width
      }) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_window__WEBPACK_IMPORTED_MODULE_3__.VariableSizeList, {
          className: "List",
          height: height,
          itemCount: formattedItems.length,
          itemSize: getRowHeight,
          ref: listRef,
          width: width,
          children: ({
            index,
            style
          }) => {
            const {
              rowRef
            } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useListRow */ .YL)(index, setRowHeight);
            const selectedItem = formattedItems[index];
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              style: style,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                ref: rowRef,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_component__WEBPACK_IMPORTED_MODULE_8__/* .SingleValidator */ .E, _objectSpread({}, selectedItem)), index !== formattedItems.length - 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {})]
              })
            });
          }
        });
      }
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mobile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69832:
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
/* harmony import */ var _utils_allyProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54118);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29744);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12864);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4643);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const TabsHeader = ({
  className,
  tab,
  handleTabChange,
  handleSearch
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_5__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('validators');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Tabs, {
      variant: "scrollable",
      scrollButtons: "off",
      value: tab,
      onChange: handleTabChange,
      children: _utils__WEBPACK_IMPORTED_MODULE_7__/* .tabLabels.map */ .A.map((x, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Tab, _objectSpread({
        label: t(x)
      }, (0,_utils_allyProps__WEBPACK_IMPORTED_MODULE_8__/* .a11yProps */ .P)(i)), x))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Search */ .ol, {
      className: classes.searchBar,
      callback: handleSearch,
      placeholder: t('searchValidator')
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabsHeader);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4643:
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

/***/ }),

/***/ 12864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ tabLabels)
/* harmony export */ });
const tabLabels = ['active', 'inactive', 'allValidators'];

/***/ }),

/***/ 52269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ voting_power)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
// EXTERNAL MODULE: external "color"
var external_color_ = __webpack_require__(39105);
var external_color_default = /*#__PURE__*/__webpack_require__.n(external_color_);
;// CONCATENATED MODULE: ./src/screens/validators/components/list/components/voting_power/styles.ts


const useStyles = (percentage, topVotingPower) => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        '& .MuiTypography-body1': {
          color: topVotingPower ? theme.palette.custom.fonts.fontFour : theme.palette.custom.fonts.fontTwo
        }
      },
      chart: {
        display: 'flex',
        height: '2px',
        borderRadius: theme.shape.borderRadius,
        background: topVotingPower ? external_color_default()(theme.palette.custom.fonts.fontFour).alpha(0.2).string() : external_color_default()(theme.palette.custom.primaryData.three).alpha(0.2).string(),
        overflow: 'hidden'
      },
      active: {
        width: `${percentage}%`,
        background: topVotingPower ? theme.palette.custom.fonts.fontFour : theme.palette.custom.primaryData.three
      },
      content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(1),
        '& .percentage': {
          color: topVotingPower ? theme.palette.custom.fonts.fontFour : theme.palette.custom.primaryData.three
        },
        [theme.breakpoints.up('lg')]: {
          marginBottom: 0
        }
      }
    };
  })();
  return styles;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/validators/components/list/components/voting_power/index.tsx







const VotingPower = ({
  className,
  percentage,
  content,
  percentDisplay,
  topVotingPower
}) => {
  const classes = useStyles(percentage, topVotingPower);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()(className, classes.root),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "body1",
        children: content
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "body1",
        className: "percentage",
        children: percentDisplay
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.chart,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.active
      })
    })]
  });
};

/* harmony default export */ const voting_power = (VotingPower);

/***/ }),

/***/ 19366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ voting_power_explanation)
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
;// CONCATENATED MODULE: ./src/screens/validators/components/list/components/voting_power_explanation/styles.ts

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
;// CONCATENATED MODULE: ./src/screens/validators/components/list/components/voting_power_explanation/index.tsx






const VotingPowerExplanation = () => {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      children: /*#__PURE__*/jsx_runtime_.jsx((Trans_default()), {
        i18nKey: "validators:votingPowerExplanation",
        components: [/*#__PURE__*/jsx_runtime_.jsx("b", {})]
      })
    })
  });
};

/* harmony default export */ const voting_power_explanation = (VotingPowerExplanation);

/***/ }),

/***/ 20660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useValidators)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22575);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91619);
/* harmony import */ var _utils_get_validator_condition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96515);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42570);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50183);
/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41215);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const useValidators = () => {
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    loading: true,
    exists: true,
    items: [],
    votingPowerOverall: 0,
    tab: 0,
    sortKey: 'validator.name',
    sortDirection: 'asc'
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_2__.mergeDeepLeft(stateChange, prevState));
  }; // ==========================
  // Fetch Data
  // ==========================


  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__/* .useValidatorsQuery */ .kP)({
    onCompleted: data => {
      handleSetState(_objectSpread({
        loading: false
      }, formatValidators(data)));
    }
  }); // ==========================
  // Parse data
  // ==========================

  const formatValidators = data => {
    const slashingParams = _models__WEBPACK_IMPORTED_MODULE_6__/* .SlashingParams.fromJson */ .HC.fromJson(ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr({}, ['slashingParams', 0, 'params'], data));
    const votingPowerOverall = numeral__WEBPACK_IMPORTED_MODULE_3___default()((0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatToken */ .nx)(ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(0, ['stakingPool', 0, 'bondedTokens'], data), _src_configs__WEBPACK_IMPORTED_MODULE_7__/* .chainConfig.votingPowerTokenUnit */ .i.votingPowerTokenUnit).value).value();
    const {
      signedBlockWindow
    } = slashingParams;
    let formattedItems = data.validator.filter(x => x.validatorInfo).map(x => {
      const votingPower = ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], x);
      const votingPowerPercent = numeral__WEBPACK_IMPORTED_MODULE_3___default()(votingPower / votingPowerOverall * 100).value();
      const missedBlockCounter = ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(0, ['validatorSigningInfos', 0, 'missedBlocksCounter'], x);
      const condition = (0,_utils_get_validator_condition__WEBPACK_IMPORTED_MODULE_8__/* .getValidatorCondition */ .W)(signedBlockWindow, missedBlockCounter);
      return {
        validator: x.validatorInfo.operatorAddress,
        votingPower,
        votingPowerPercent,
        commission: ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(0, ['validatorCommissions', 0, 'commission'], x) * 100,
        condition,
        status: ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(0, ['validatorStatuses', 0, 'status'], x),
        jailed: ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(false, ['validatorStatuses', 0, 'jailed'], x),
        tombstoned: ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(false, ['validatorSigningInfos', 0, 'tombstoned'], x)
      };
    }); // get the top 34% validators

    formattedItems = formattedItems.sort((a, b) => {
      return a.votingPower > b.votingPower ? -1 : 1;
    }); // add key to indicate they are part of top 34%

    let cumulativeVotingPower = big_js__WEBPACK_IMPORTED_MODULE_1___default()(0);
    let reached = false;
    formattedItems.forEach(x => {
      if (x.status === 3) {
        const totalVp = cumulativeVotingPower.add(x.votingPowerPercent);

        if (totalVp.lte(34) && !reached) {
          x.topVotingPower = true;
        }

        if (totalVp.gt(34) && !reached) {
          x.topVotingPower = true;
          reached = true;
        }

        cumulativeVotingPower = totalVp;
      }
    });
    return {
      votingPowerOverall,
      items: formattedItems
    };
  };

  const handleTabChange = (_event, newValue) => {
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      tab: newValue
    }));
  };

  const handleSort = key => {
    if (key === state.sortKey) {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        sortDirection: prevState.sortDirection === 'asc' ? 'desc' : 'asc'
      }));
    } else {
      setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        sortKey: key,
        sortDirection: 'asc' // new key so we start the sort by asc

      }));
    }
  };

  const sortItems = items => {
    let sorted = ramda__WEBPACK_IMPORTED_MODULE_2__.clone(items);

    if (state.tab === 0) {
      sorted = sorted.filter(x => x.status === 3);
    }

    if (state.tab === 1) {
      sorted = sorted.filter(x => x.status !== 3);
    }

    if (search) {
      sorted = sorted.filter(x => {
        const formattedSearch = search.toLowerCase().replace(/ /g, '');
        return x.validator.name.toLowerCase().replace(/ /g, '').includes(formattedSearch) || x.validator.address.toLowerCase().includes(formattedSearch);
      });
    }

    if (state.sortKey && state.sortDirection) {
      sorted.sort((a, b) => {
        let compareA = ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(undefined, [...state.sortKey.split('.')], a);
        let compareB = ramda__WEBPACK_IMPORTED_MODULE_2__.pathOr(undefined, [...state.sortKey.split('.')], b);

        if (typeof compareA === 'string') {
          compareA = compareA.toLowerCase();
          compareB = compareB.toLowerCase();
        }

        if (compareA < compareB) {
          return state.sortDirection === 'asc' ? -1 : 1;
        }

        if (compareA > compareB) {
          return state.sortDirection === 'asc' ? 1 : -1;
        }

        return 0;
      });
    }

    return sorted;
  };

  const handleSearch = value => {
    setSearch(value);
  };

  return {
    state,
    handleTabChange,
    handleSort,
    handleSearch,
    sortItems
  };
};

/***/ }),

/***/ 43689:
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29744);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34871);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33067);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91911);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60090);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20660);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 22370)), {
  loadableGenerated: {
    modules: ["../screens/validators/components/list/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 65338)), {
  loadableGenerated: {
    modules: ["../screens/validators/components/list/index.tsx -> " + './components/mobile']
  }
});

const List = ({
  className
}) => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useScreenSize */ .eI)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    state,
    handleTabChange,
    handleSearch,
    handleSort,
    sortItems
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useValidators */ .t)();
  const dataProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_5__/* .useProfilesRecoil */ .Gs)(state.items.map(x => x.validator));
  const mergedDataWithProfiles = state.items.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      validator: dataProfiles[i]
    });
  });
  const items = sortItems(mergedDataWithProfiles);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .LoadAndExist */ .Wf, {
    loading: state.loading,
    exists: state.exists,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .Tabs */ .mQ, {
        tab: state.tab,
        handleTabChange: handleTabChange,
        handleSearch: handleSearch
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: classes.list,
        children: items.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: isDesktop ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Desktop, {
            className: classes.desktop,
            sortDirection: state.sortDirection,
            sortKey: state.sortKey,
            handleSort: handleSort,
            items: items
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Mobile, {
            className: classes.mobile,
            items: items
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .NoData */ .Jd, {})
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60090:
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
        minHeight: '500px',
        height: '50vh',
        [theme.breakpoints.up('lg')]: {
          minHeight: '65vh'
        }
      },
      mobile: {
        height: '100%',
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

/***/ 37798:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54505);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57693);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Validators = () => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('validators');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_4__/* .useStyles */ .y)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
      title: t('validators'),
      openGraph: {
        title: t('validators')
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
      navTitle: t('validators'),
      className: classes.root,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .List */ .a, {})
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validators);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54505:
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
        }
      })
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4289,5657,5117,1371,8625,9744,5044], () => (__webpack_exec__(1105)));
module.exports = __webpack_exports__;

})();
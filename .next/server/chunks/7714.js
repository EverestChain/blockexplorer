"use strict";
exports.id = 7714;
exports.ids = [7714];
exports.modules = {

/***/ 77714:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82029);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Mobile = ({
  className,
  items
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_6__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('accounts');
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: items.map((x, i) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: classes.list,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "h4",
              className: "label",
              children: t('address')
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .AvatarName */ .gj, {
              name: x.address.name,
              address: x.address.address,
              imageUrl: x.address.imageUrl
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "h4",
              className: "label",
              children: t('amount')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "body1",
              className: "value",
              children: [(0,_utils_format_token__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(x.amount.value, x.amount.exponent), ' ', x.amount.displayDenom.toUpperCase()]
            })]
          })]
        }), i !== items.length - 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Divider, {})]
      }, `votes-mobile-${i}`);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mobile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82029:
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
          color: theme.palette.custom.fonts.fontTwo,
          '&.unknown': {
            color: theme.palette.custom.condition.zero
          },
          '&.unbonded': {
            color: theme.palette.custom.condition.zero
          },
          '&.active': {
            color: theme.palette.custom.condition.one
          },
          '&.jailed': {
            color: theme.palette.custom.condition.two
          },
          '&.unbonding': {
            color: theme.palette.custom.condition.three
          }
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

/***/ })

};
;
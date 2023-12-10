"use strict";
exports.id = 6083;
exports.ids = [6083];
exports.modules = {

/***/ 76083:
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
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93620);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80201);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42570);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Desktop = ({
  className,
  items
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('accounts');
  const dateFormat = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_7__/* .readDate */ .cK);
  const formattedItems = items.map(x => {
    return {
      address: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .AvatarName */ .gj, {
        address: x.address.address,
        imageUrl: x.address.imageUrl,
        name: x.address.name
      }),
      to: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .AvatarName */ .gj, {
        address: x.to.address,
        imageUrl: x.to.imageUrl,
        name: x.to.name
      }),
      amount: `${(0,_utils_format_token__WEBPACK_IMPORTED_MODULE_8__/* .formatNumber */ .uf)(x.amount.value, x.amount.exponent)} ${x.amount.displayDenom.toUpperCase()}`,
      completionTime: (0,_utils_dayjs__WEBPACK_IMPORTED_MODULE_3__/* .formatDayJs */ .z)(_utils_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"].utc */ .Z.utc(x.completionTime), dateFormat)
    };
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Table, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TableHead, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_9__/* .columns.map */ .z.map(column => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              align: column.align,
              style: {
                width: `${column.width}%`
              },
              children: t(column.key)
            }, column.key);
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TableBody, {
        children: formattedItems.map((row, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_9__/* .columns.map */ .z.map(column => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
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

/***/ 77682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ columns)
/* harmony export */ });
const columns = [{
  key: 'address',
  width: 25
}, {
  key: 'to',
  width: 25
}, {
  key: 'amount',
  align: 'right',
  width: 20
}, {
  key: 'completionTime',
  align: 'right',
  width: 30
}];

/***/ })

};
;
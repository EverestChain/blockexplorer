"use strict";
exports.id = 4582;
exports.ids = [4582];
exports.modules = {

/***/ 94582:
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
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93620);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75657);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57875);
/* harmony import */ var _utils_go_to_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48625);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29744);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42285);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33926);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_8__]);
_components__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const Desktop = ({
  className,
  items
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_9__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()('transactions');
  const formattedData = items.map(x => {
    return {
      block: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
        href: (0,_utils_go_to_page__WEBPACK_IMPORTED_MODULE_7__/* .BLOCK_DETAILS */ .b5)(x.height),
        passHref: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
          variant: "body1",
          component: "a",
          children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.height).format('0,0')
        })
      }),
      hash: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
        href: (0,_utils_go_to_page__WEBPACK_IMPORTED_MODULE_7__/* .TRANSACTION_DETAILS */ .$J)(x.hash),
        passHref: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
          variant: "body1",
          component: "a",
          children: (0,_utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_12__/* .getMiddleEllipsis */ .I)(x.hash, {
            beginning: 15,
            ending: 5
          })
        })
      }),
      result: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .Result */ .x4, {
        success: x.success
      }),
      time: _utils_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"].utc */ .Z.utc(x.timestamp).fromNow(),
      messages: numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.messages).format('0,0')
    };
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Table, {
      className: classes.table,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableHead, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_10__/* .columns.map */ .z.map(column => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
            align: column.align,
            style: {
              width: `${column.width}%`
            },
            children: t(column.key)
          }, column.key))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableBody, {
        children: formattedData.map((row, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_10__/* .columns.map */ .z.map((column, index) => {
            const {
              key,
              align
            } = column;
            const item = row[key];
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
              style: {
                width: `${column.width}%`
              },
              align: align,
              children: item
            }, `${key}-${index}`);
          })
        }, `row-${i}`))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desktop);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(() => {
    return {
      root: {
        overflow: 'auto'
      },
      table: {
        '& .MuiTableBody-root': {
          '& .MuiTableCell-root': {
            whiteSpace: 'nowrap'
          }
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 33926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ columns)
/* harmony export */ });
const columns = [{
  key: 'block',
  width: 25
}, {
  key: 'hash',
  width: 25
}, {
  key: 'result',
  align: 'right',
  width: 25
}, {
  key: 'time',
  align: 'right',
  width: 25
}];

/***/ })

};
;
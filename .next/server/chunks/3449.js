"use strict";
exports.id = 3449;
exports.ids = [3449];
exports.modules = {

/***/ 13449:
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
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88041);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93620);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75657);
/* harmony import */ var _utils_go_to_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48625);
/* harmony import */ var react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30353);
/* harmony import */ var react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80551);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_merge_refs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(34193);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29744);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34871);
/* harmony import */ var _utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57875);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7528);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86757);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_11__]);
_components__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const Desktop = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions
}) => {
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useGrid */ .Nm)(_utils__WEBPACK_IMPORTED_MODULE_13__/* .columns */ .z);
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_14__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_10___default()('transactions');
  const items = transactions.map(x => ({
    block: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: (0,_utils_go_to_page__WEBPACK_IMPORTED_MODULE_6__/* .BLOCK_DETAILS */ .b5)(x.height),
      passHref: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {
        variant: "body1",
        component: "a",
        children: numeral__WEBPACK_IMPORTED_MODULE_3___default()(x.height).format('0,0')
      })
    }),
    hash: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: (0,_utils_go_to_page__WEBPACK_IMPORTED_MODULE_6__/* .TRANSACTION_DETAILS */ .$J)(x.hash),
      passHref: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {
        variant: "body1",
        component: "a",
        children: (0,_utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_16__/* .getMiddleEllipsis */ .I)(x.hash, {
          beginning: 20,
          ending: 15
        })
      })
    }),
    result: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components__WEBPACK_IMPORTED_MODULE_11__/* .Result */ .x4, {
      success: x.success
    }),
    time: _utils_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utc */ .Z.utc(x.timestamp).fromNow(),
    messages: numeral__WEBPACK_IMPORTED_MODULE_3___default()(x.messages.count).format('0,0')
  }));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2___default()), {
      onResize: onResize,
      children: ({
        height,
        width
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_window__WEBPACK_IMPORTED_MODULE_8__.VariableSizeGrid, {
            ref: columnRef,
            columnCount: _utils__WEBPACK_IMPORTED_MODULE_13__/* .columns.length */ .z.length,
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
                align
              } = _utils__WEBPACK_IMPORTED_MODULE_13__/* .columns */ .z[columnIndex];
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                style: style,
                className: classes.cell,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                  variant: "h4",
                  align: align,
                  children: t(key)
                })
              });
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_7___default()), {
            isItemLoaded: isItemLoaded,
            itemCount: itemCount,
            loadMoreItems: loadMoreItems,
            children: ({
              onItemsRendered,
              ref
            }) => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_window__WEBPACK_IMPORTED_MODULE_8__.VariableSizeGrid, {
                onItemsRendered: ({
                  visibleRowStartIndex,
                  visibleRowStopIndex,
                  overscanRowStopIndex,
                  overscanRowStartIndex
                }) => {
                  onItemsRendered({
                    overscanStartIndex: overscanRowStartIndex,
                    overscanStopIndex: overscanRowStopIndex,
                    visibleStartIndex: visibleRowStartIndex,
                    visibleStopIndex: visibleRowStopIndex
                  });
                },
                ref: (0,_utils_merge_refs__WEBPACK_IMPORTED_MODULE_17__/* .mergeRefs */ .l)(gridRef, ref),
                columnCount: _utils__WEBPACK_IMPORTED_MODULE_13__/* .columns.length */ .z.length,
                columnWidth: index => getColumnWidth(width, index),
                height: height - 50,
                rowCount: itemCount,
                rowHeight: getRowHeight,
                width: width,
                className: "scrollbar",
                children: ({
                  columnIndex,
                  rowIndex,
                  style
                }) => {
                  if (!isItemLoaded(rowIndex) && columnIndex === 0) {
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                      style: _objectSpread(_objectSpread({}, style), {}, {
                        width
                      }),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components__WEBPACK_IMPORTED_MODULE_11__/* .Loading */ .gb, {})
                    });
                  }

                  if (!isItemLoaded(rowIndex)) {
                    return null;
                  }

                  const {
                    key,
                    align
                  } = _utils__WEBPACK_IMPORTED_MODULE_13__/* .columns */ .z[columnIndex];
                  const item = items[rowIndex][key];
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    style: style,
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cell, classes.body, {
                      odd: !(rowIndex % 2)
                    }),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                      variant: "body1",
                      align: align,
                      component: "div",
                      children: item
                    })
                  });
                }
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

/***/ 86757:
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
        height: '100%'
      },
      cell: _objectSpread({}, theme.mixins.tableCell),
      body: {
        color: theme.palette.custom.fonts.fontTwo
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 7528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ columns)
/* harmony export */ });
const columns = [{
  key: 'block',
  width: 15
}, {
  key: 'hash',
  width: 30
}, {
  key: 'messages',
  align: 'right',
  width: 15
}, {
  key: 'result',
  align: 'right',
  width: 20
}, {
  key: 'time',
  align: 'right',
  width: 20
}];

/***/ })

};
;
"use strict";
exports.id = 9667;
exports.ids = [9667];
exports.modules = {

/***/ 49667:
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93620);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75657);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29744);
/* harmony import */ var _utils_go_to_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48625);
/* harmony import */ var _utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57875);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29484);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60709);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_7__]);
_components__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const Desktop = ({
  className,
  items
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('blocks');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_9__/* .useStyles */ .y)();
  const formattedData = items.map(x => {
    return {
      height: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: (0,_utils_go_to_page__WEBPACK_IMPORTED_MODULE_8__/* .BLOCK_DETAILS */ .b5)(x.height),
        passHref: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "body1",
          className: "value",
          component: "a",
          children: numeral__WEBPACK_IMPORTED_MODULE_4___default()(x.height).format('0,0')
        })
      }),
      txs: numeral__WEBPACK_IMPORTED_MODULE_4___default()(x.txs).format('0,0'),
      time: _utils_dayjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"].utc */ .Z.utc(x.timestamp).fromNow(),
      proposer: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .AvatarName */ .gj, {
        address: x.proposer.address,
        imageUrl: x.proposer.imageUrl,
        name: x.proposer.name
      }),
      hash: (0,_utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_12__/* .getMiddleEllipsis */ .I)(x.hash, {
        beginning: 6,
        ending: 5
      })
    };
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Table, {
      className: classes.table,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableHead, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_10__/* .columns.map */ .z.map(column => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
            align: column.align,
            children: t(column.key)
          }, column.key))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableBody, {
        children: formattedData.map((row, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
          children: _utils__WEBPACK_IMPORTED_MODULE_10__/* .columns.map */ .z.map((column, index) => {
            const {
              key,
              align
            } = column;
            const item = row[key];
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
              align: align,
              children: item
            }, `${key}-${index}`);
          })
        }, `${items[i].height}`))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desktop);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29484:
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
        overflow: 'auto',
        '& a': {
          color: theme.palette.custom.fonts.highlight
        }
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

/***/ 60709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ columns)
/* harmony export */ });
const columns = [{
  key: 'height'
}, {
  key: 'proposer'
}, {
  key: 'hash'
}, {
  key: 'txs',
  align: 'right'
}, {
  key: 'time',
  align: 'right'
}];

/***/ })

};
;
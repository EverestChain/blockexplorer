"use strict";
exports.id = 9965;
exports.ids = [9965];
exports.modules = {

/***/ 9965:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75657);
/* harmony import */ var _utils_go_to_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48625);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57875);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29744);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_7__]);
_components__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Mobile = ({
  className,
  items
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: items.map((x, i) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .SingleBlockMobile */ .Fb, {
          height: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
            href: (0,_utils_go_to_page__WEBPACK_IMPORTED_MODULE_5__/* .BLOCK_DETAILS */ .b5)(x.height),
            passHref: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
              variant: "body1",
              className: "value",
              component: "a",
              children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.height).format('0,0')
            })
          }),
          txs: numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.txs).format('0,0'),
          time: _utils_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"].utc */ .Z.utc(x.timestamp).fromNow(),
          proposer: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .AvatarName */ .gj, {
            address: x.proposer.address,
            imageUrl: x.proposer.imageUrl,
            name: x.proposer.name
          }),
          hash: (0,_utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_9__/* .getMiddleEllipsis */ .I)(x.hash, {
            beginning: 13,
            ending: 10
          })
        }), i !== items.length - 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Divider, {})]
      }, `${x.height}-${i}`);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mobile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
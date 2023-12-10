"use strict";
exports.id = 9134;
exports.ids = [9134];
exports.modules = {

/***/ 59134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ desktop)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(29755);
// EXTERNAL MODULE: ./src/recoil/settings/index.ts + 8 modules
var settings = __webpack_require__(80201);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/utils/dayjs.ts
var dayjs = __webpack_require__(93620);
;// CONCATENATED MODULE: ./src/components/desmos_profile/components/connections/components/desktop/utils.ts
const columns = [{
  key: 'network',
  width: 25
}, {
  key: 'identifier',
  width: 50,
  align: 'left'
}, {
  key: 'creationTime',
  width: 25,
  align: 'right'
}];
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/components/desmos_profile/components/connections/components/desktop/index.tsx











const Desktop = ({
  className,
  items
}) => {
  const dateFormat = (0,external_recoil_.useRecoilValue)(settings/* readDate */.cK);
  const {
    t
  } = useTranslation_default()('accounts');
  const formattedItems = items.map(x => {
    return {
      network: x.network.toUpperCase(),
      identifier: x.identifier,
      creationTime: (0,dayjs/* formatDayJs */.z)(dayjs/* default.utc */.Z.utc(x.creationTime), dateFormat)
    };
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()(className),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Table, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TableHead, {
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.TableRow, {
          children: columns.map(column => {
            return /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
              align: column.align,
              style: {
                width: `${column.width}%`
              },
              children: t(column.key)
            }, column.key);
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.TableBody, {
        children: formattedItems.map((row, i) => /*#__PURE__*/jsx_runtime_.jsx(core_.TableRow, {
          children: columns.map(column => {
            return /*#__PURE__*/jsx_runtime_.jsx(core_.TableCell, {
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

/* harmony default export */ const desktop = (Desktop);

/***/ })

};
;
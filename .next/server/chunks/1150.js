"use strict";
exports.id = 1150;
exports.ids = [1150];
exports.modules = {

/***/ 21150:
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
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/utils/format_token.ts
var format_token = __webpack_require__(42570);
;// CONCATENATED MODULE: ./src/screens/account_details/components/other_tokens/components/desktop/utils.ts
const columns = [{
  key: 'token',
  width: 25
}, {
  key: 'available',
  width: 25,
  align: 'right'
}, {
  key: 'reward',
  width: 25,
  align: 'right'
}, {
  key: 'commission',
  width: 25,
  align: 'right'
}];
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/account_details/components/other_tokens/components/desktop/index.tsx









const Desktop = ({
  className,
  items
}) => {
  const {
    t
  } = useTranslation_default()('accounts');
  const formattedItems = items.map(x => {
    return {
      token: x.denom.toUpperCase(),
      commission: (0,format_token/* formatNumber */.uf)(x.commission.value, x.commission.exponent),
      available: (0,format_token/* formatNumber */.uf)(x.available.value, x.available.exponent),
      reward: (0,format_token/* formatNumber */.uf)(x.reward.value, x.reward.exponent)
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
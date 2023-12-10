"use strict";
exports.id = 2184;
exports.ids = [2184];
exports.modules = {

/***/ 92184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mobile)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
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
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/account_details/components/other_tokens/components/mobile/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      list: {
        margin: theme.spacing(2, 0),
        width: '100%'
      },
      item: {
        marginBottom: theme.spacing(2),
        '& .label': {
          marginBottom: theme.spacing(1),
          color: theme.palette.custom.fonts.fontThree
        },
        '& p.value': {
          color: theme.palette.custom.fonts.fontTwo,
          wordBreak: 'break-all'
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
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/account_details/components/other_tokens/components/mobile/index.tsx









const Mobile = ({
  className,
  items
}) => {
  const classes = useStyles();
  const {
    t
  } = useTranslation_default()('accounts');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()(className),
    children: items.map((x, i) => {
      const available = (0,format_token/* formatNumber */.uf)(x.available.value, x.available.exponent);
      const reward = (0,format_token/* formatNumber */.uf)(x.reward.value, x.reward.exponent);
      const commission = (0,format_token/* formatNumber */.uf)(x.commission.value, x.commission.exponent);
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.list,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "h4",
              className: "label",
              children: t('token')
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "body1",
              className: "value",
              children: x.denom.toUpperCase()
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "h4",
              className: "label",
              children: t('available')
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "body1",
              className: "value",
              children: available
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "h4",
              className: "label",
              children: t('reward')
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "body1",
              className: "value",
              children: reward
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
        }), i !== items.length - 1 && /*#__PURE__*/jsx_runtime_.jsx(core_.Divider, {})]
      }, `votes-mobile-${i}`);
    })
  });
};

/* harmony default export */ const mobile = (Mobile);

/***/ })

};
;
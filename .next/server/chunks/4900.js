"use strict";
exports.id = 4900;
exports.ids = [4900];
exports.modules = {

/***/ 4900:
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
// EXTERNAL MODULE: ./src/utils/dayjs.ts
var dayjs = __webpack_require__(93620);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(29755);
// EXTERNAL MODULE: ./src/recoil/settings/index.ts + 8 modules
var settings = __webpack_require__(80201);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/configs/index.ts + 3 modules
var configs = __webpack_require__(41215);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(75657);
// EXTERNAL MODULE: ./src/utils/go_to_page.ts
var go_to_page = __webpack_require__(48625);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/profile_details/components/connections/components/mobile/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
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
;// CONCATENATED MODULE: ./src/screens/profile_details/components/connections/components/mobile/index.tsx














const Mobile = ({
  className,
  items
}) => {
  const dateFormat = (0,external_recoil_.useRecoilValue)(settings/* readDate */.cK);
  const classes = useStyles();
  const {
    t
  } = useTranslation_default()('accounts');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()(className),
    children: items.map((x, i) => {
      const checkIdentifier = new RegExp(`^(${configs/* chainConfig.prefix.account */.i.prefix.account})`).test(x.identifier);
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.list,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "h4",
              className: "label",
              children: t('network')
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "body1",
              className: "value",
              children: x.network.toUpperCase()
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "h4",
              className: "label",
              children: t('identifier')
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
              variant: "body1",
              className: "value",
              children: [checkIdentifier && /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: (0,go_to_page/* ACCOUNT_DETAILS */.e1)(x.identifier),
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                  variant: "body1",
                  className: "value",
                  component: "a",
                  children: x.identifier
                })
              }), new RegExp(`^(${configs/* chainConfig.prefix.account */.i.prefix.account})`).test(x.identifier) === false && x.identifier]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.item,
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "h4",
              className: "label",
              children: t('creationTime')
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              variant: "body1",
              className: "value",
              children: (0,dayjs/* formatDayJs */.z)(dayjs/* default.utc */.Z.utc(x.creationTime), dateFormat)
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
"use strict";
(() => {
var exports = {};
exports.id = 5134;
exports.ids = [5134];
exports.modules = {

/***/ 79450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91371);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _screens_validator_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29208);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_screens_validator_details__WEBPACK_IMPORTED_MODULE_2__]);
_screens_validator_details__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore




const ValidatorDetailsPage = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_screens_validator_details__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatorDetailsPage); // @ts-ignore

async function getServerSideProps(ctx) {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return {
    // @ts-ignore
    // @ts-ignore
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread({}, ctx), {}, {
      // @ts-ignore
      pathname: '/validators/[address]',
      // @ts-ignore
      loaderName: 'getServerSideProps'
    }, (_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0___default())))) // @ts-ignore

  }; // @ts-ignore
} // @ts-ignore
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useBlocks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91619);




const useBlocks = () => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_3__/* .useLastHundredBlocksSubscription */ .Lg)({
    variables: {
      address: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['query', 'address'], router)
    },
    onSubscriptionData: data => {
      setState(formatLastHundredBlocks(data.subscriptionData.data));
    }
  });

  const formatLastHundredBlocks = data => {
    return data.block.map(x => {
      return {
        height: x.height,
        txs: x.transactions.length,
        proposer: x.validator.validatorInfo.operatorAddress,
        signed: x.precommits.length === 1
      };
    });
  };

  return {
    state
  };
};

/***/ }),

/***/ 43684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33067);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29744);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41400);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12094);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_6__]);
_components__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Blocks = ({
  className
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('validators');
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useBlocks */ .V)();
  const dataProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_5__/* .useProfilesRecoil */ .Gs)(state.map(x => x.proposer));
  const mergedDataWithProfiles = state.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      proposer: dataProfiles[i]
    });
  });
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
      variant: "h2",
      children: t('lastBlocks')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: classes.blocks,
      children: mergedDataWithProfiles.map((x, i) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
          enterTouchDelay: 50,
          title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            className: classes.toolTip,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "h4",
                className: "label",
                children: t('proposer')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .AvatarName */ .gj, {
                address: x.proposer.address,
                imageUrl: x.proposer.imageUrl,
                name: x.proposer.name
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "h4",
                className: "label",
                children: t('block')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "body1",
                className: "value",
                children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.height).format('0,0')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "h4",
                className: "label",
                children: t('txs')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "body1",
                className: "value",
                children: numeral__WEBPACK_IMPORTED_MODULE_2___default()(x.txs).format('0,0')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: classes.item,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "h4",
                className: "label",
                children: t('signed')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .Result */ .x4, {
                success: x.signed
              })]
            })]
          }),
          placement: "top",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.singleBlock, {
              signed: state[i].signed
            })
          }, i)
        }, `blocks-tooltip-${i}`);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blocks);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39105);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      root: {
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2)
        }
      },
      blocks: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(-0.25)
      },
      singleBlock: {
        width: '28px',
        height: '28px',
        borderRadius: '2px',
        background: theme.palette.custom.general.surfaceTwo,
        margin: theme.spacing(0.25),
        '&:hover': {
          background: color__WEBPACK_IMPORTED_MODULE_1___default()(theme.palette.custom.tags.zero).alpha(0.5).string()
        },
        '&.signed': {
          background: theme.palette.primary.main,
          '&:hover': {
            background: color__WEBPACK_IMPORTED_MODULE_1___default()(theme.palette.primary.main).alpha(0.5).string()
          }
        },
        [theme.breakpoints.up('md')]: {
          width: '32px',
          height: '32px'
        },
        [theme.breakpoints.up('lg')]: {
          width: '25px',
          height: '25px'
        }
      },
      toolTip: {
        boxShadow: theme.shadows[3]
      },
      item: {
        marginBottom: theme.spacing(2),
        '& .label': {
          marginBottom: theme.spacing(1),
          color: theme.palette.custom.fonts.fontThree
        },
        '& p.value': {
          color: theme.palette.custom.fonts.fontTwo
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
  }, {
    index: 1
  })();
  return styles;
};

/***/ }),

/***/ 54361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NZ": () => (/* reexport safe */ _profile__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "km": () => (/* reexport safe */ _voting_power__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "PU": () => (/* reexport safe */ _transactions__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "T4": () => (/* reexport safe */ _staking__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "no": () => (/* reexport safe */ _blocks__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "jV": () => (/* reexport safe */ _validator_overview__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74959);
/* harmony import */ var _voting_power__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17669);
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95206);
/* harmony import */ var _staking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59983);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43684);
/* harmony import */ var _validator_overview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87192);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_profile__WEBPACK_IMPORTED_MODULE_0__, _voting_power__WEBPACK_IMPORTED_MODULE_1__, _transactions__WEBPACK_IMPORTED_MODULE_2__, _staking__WEBPACK_IMPORTED_MODULE_3__, _blocks__WEBPACK_IMPORTED_MODULE_4__, _validator_overview__WEBPACK_IMPORTED_MODULE_5__]);
([_profile__WEBPACK_IMPORTED_MODULE_0__, _voting_power__WEBPACK_IMPORTED_MODULE_1__, _transactions__WEBPACK_IMPORTED_MODULE_2__, _staking__WEBPACK_IMPORTED_MODULE_3__, _blocks__WEBPACK_IMPORTED_MODULE_4__, _validator_overview__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29744);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50115);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Profile = ({
  className,
  profile
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_6__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('validators');
  const validator = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_5__/* .useProfileRecoil */ .Pl)(profile.validator);
  const pattern = /^((http|https|ftp):\/\/)/;
  let {
    website
  } = profile;

  if (!pattern.test(profile.website)) {
    website = `//${profile.website}`;
  }

  const formattedItem = {
    website: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "body1",
      className: "value",
      component: "a",
      href: website,
      target: "_blank",
      rel: "noreferrer",
      children: profile.website
    })
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: classes.bio,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Avatar */ .qE, {
        address: profile.operatorAddress,
        imageUrl: validator.imageUrl,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.avatar, classes.desktopAvatar)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "bio__header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: classes.header,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Avatar */ .qE, {
              address: profile.operatorAddress,
              imageUrl: validator.imageUrl,
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.avatar, classes.mobile)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "header__content",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h2",
                children: validator.name
              })
            })]
          })
        }), profile.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "bio__content",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Markdown */ .UG, {
            markdown: profile.description
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Divider, {
      className: classes.divider
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: classes.item,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h4",
          className: "label",
          children: t('website')
        }), formattedItem.website]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      root: {},
      tag: {
        '& .MuiTypography-body1': {
          lineHeight: 1
        }
      },
      bio: {
        display: 'flex',
        '& .bio__header': {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column'
        },
        '& .bio__content': {
          marginTop: theme.spacing(2),
          color: theme.palette.custom.fonts.fontTwo,
          [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(1)
          }
        }
      },
      avatar: {
        width: '60px',
        height: '60px',
        minHeight: '60px',
        minWidth: '60px'
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        '& .header__content': {
          marginLeft: theme.spacing(1)
        },
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(1)
        },
        [theme.breakpoints.up('lg')]: {
          '& .header__content': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginLeft: 0,
            '& .MuiTypography-h2': {
              marginRight: theme.spacing(2),
              marginBottom: 0
            }
          }
        }
      },
      desktopAvatar: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'block',
          marginRight: theme.spacing(2)
        }
      },
      desktopHeader: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          '& .MuiTypography-h2': {
            marginRight: theme.spacing(2)
          }
        }
      },
      mobile: {
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        }
      },
      divider: {
        margin: theme.spacing(2, 0),
        [theme.breakpoints.up('lg')]: {
          margin: theme.spacing(4, 0)
        }
      },
      item: {
        '&:not(:last-child)': {
          marginBottom: theme.spacing(2)
        },
        '& .label': {
          marginBottom: theme.spacing(1),
          color: theme.palette.custom.fonts.fontThree,
          '&.condition': {
            display: 'flex',
            alignItems: 'center'
          },
          [theme.breakpoints.up('lg')]: {
            marginBottom: 0
          }
        },
        '& .condition__body': {
          justifySelf: 'flex-start'
        },
        '& p.value': {
          color: theme.palette.custom.fonts.fontTwo,
          '&.good': {
            color: theme.palette.custom.condition.one
          },
          '&.moderate': {
            color: theme.palette.custom.condition.two
          },
          '&.bad': {
            color: theme.palette.custom.condition.three
          },
          '&.condition': {
            color: theme.palette.custom.condition.zero
          }
        },
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        [theme.breakpoints.up('lg')]: {
          display: 'grid',
          gridTemplateColumns: '200px auto',
          gridGap: theme.spacing(2),
          alignItems: 'center'
        }
      },
      copyText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& svg': {
          width: '1rem',
          marginLeft: theme.spacing(1)
        }
      }
    };
  }, {
    index: 1
  })();
  return styles;
};

/***/ }),

/***/ 14403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65117);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34871);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72418);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 1799).then(__webpack_require__.bind(__webpack_require__, 91799)), {
  loadableGenerated: {
    modules: ["../screens/validator_details/components/staking/components/delegations/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 7714).then(__webpack_require__.bind(__webpack_require__, 77714)), {
  loadableGenerated: {
    modules: ["../screens/validator_details/components/staking/components/delegations/index.tsx -> " + './components/mobile']
  }
});

const Delegations = props => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useScreenSize */ .eI)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePagination */ .h0)({});
  const pageItems = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['delegations', 'data', page], props);
  const dataProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfilesRecoil */ .Gs)(pageItems.map(x => x.address));
  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      address: dataProfiles[i]
    });
  });
  const items = mergedDataWithProfiles;
  let component = null;

  if (props.delegations.loading) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Loading */ .gb, {});
  } else if (!items.length) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .NoData */ .Jd, {});
  } else if (isDesktop) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Desktop, {
      items: items
    });
  } else {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Mobile, {
      items: items
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className),
    children: [component, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .tl, {
      className: classes.paginate,
      total: props.delegations.count,
      rowsPerPage: rowsPerPage,
      page: page,
      handleChangePage: handleChangePage,
      handleChangeRowsPerPage: handleChangeRowsPerPage
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Delegations);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      paginate: {
        marginTop: theme.spacing(3)
      },
      mobile: {
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        }
      },
      desktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'flex'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 75653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mQ": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98473);
/* harmony import */ var _unbondings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40060);
/* harmony import */ var _redelegations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37463);
/* harmony import */ var _delegations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_unbondings__WEBPACK_IMPORTED_MODULE_1__, _redelegations__WEBPACK_IMPORTED_MODULE_2__, _delegations__WEBPACK_IMPORTED_MODULE_3__]);
([_unbondings__WEBPACK_IMPORTED_MODULE_1__, _redelegations__WEBPACK_IMPORTED_MODULE_2__, _delegations__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65117);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34871);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96729);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 6083).then(__webpack_require__.bind(__webpack_require__, 76083)), {
  loadableGenerated: {
    modules: ["../screens/validator_details/components/staking/components/redelegations/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 201).then(__webpack_require__.bind(__webpack_require__, 60201)), {
  loadableGenerated: {
    modules: ["../screens/validator_details/components/staking/components/redelegations/index.tsx -> " + './components/mobile']
  }
});

const Redelegations = props => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useScreenSize */ .eI)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePagination */ .h0)({});
  const pageItems = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['redelegations', 'data', page], props);
  const toProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfilesRecoil */ .Gs)(pageItems.map(x => x.to));
  const addressProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfilesRecoil */ .Gs)(pageItems.map(x => x.address));
  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      to: toProfiles[i],
      address: addressProfiles[i]
    });
  });
  const items = mergedDataWithProfiles;
  let component = null;

  if (props.redelegations.loading) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Loading */ .gb, {});
  } else if (!items.length) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .NoData */ .Jd, {});
  } else if (isDesktop) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Desktop, {
      items: items
    });
  } else {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Mobile, {
      items: items
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(props.className),
    children: [component, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .tl, {
      className: classes.paginate,
      total: props.redelegations.count,
      rowsPerPage: rowsPerPage,
      page: page,
      handleChangePage: handleChangePage,
      handleChangeRowsPerPage: handleChangeRowsPerPage,
      rowsPerPageOptions: [10, 25, 50, 100]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Redelegations);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      paginate: {
        marginTop: theme.spacing(3)
      },
      mobile: {
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        }
      },
      desktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'flex'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 98473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ tabs)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "numeral"
var external_numeral_ = __webpack_require__(88032);
var external_numeral_default = /*#__PURE__*/__webpack_require__.n(external_numeral_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/utils/allyProps.ts
var allyProps = __webpack_require__(54118);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
;// CONCATENATED MODULE: ./src/screens/validator_details/components/staking/components/tabs/styles.ts

const useStyles = () => {
  const styles = (0,styles_.makeStyles)(theme => {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      searchBar: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'block',
          width: '300px',
          '& .MuiInputBase-root': {
            width: '100%',
            background: theme.palette.custom.general.surfaceTwo,
            padding: theme.spacing(0.4, 1.2),
            borderRadius: theme.shape.borderRadius
          },
          '& .MuiInputBase-input': {
            textOverflow: 'ellipsis',
            '&::placeholder': {
              color: theme.palette.custom.fonts.fontThree
            }
          }
        }
      }
    };
  }, {
    index: 1
  })();
  return styles;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/screens/validator_details/components/staking/components/tabs/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const TabsHeader = ({
  className,
  tab,
  handleTabChange,
  tabs
}) => {
  const classes = useStyles();
  const {
    t
  } = useTranslation_default()('accounts');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()(className, classes.root),
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Tabs, {
      variant: "scrollable",
      scrollButtons: "off",
      value: tab,
      onChange: handleTabChange,
      children: tabs.map(x => {
        var _x$count;

        return /*#__PURE__*/jsx_runtime_.jsx(core_.Tab, _objectSpread({
          label: t(x.key, {
            num: external_numeral_default()((_x$count = x.count) !== null && _x$count !== void 0 ? _x$count : 0).format('0,0')
          })
        }, (0,allyProps/* a11yProps */.P)(x.id)), x.key);
      })
    })
  });
};

/* harmony default export */ const tabs = (TabsHeader);

/***/ }),

/***/ 40060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65117);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34871);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29744);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33067);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82404);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_5__]);
_components__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Desktop = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 8940).then(__webpack_require__.bind(__webpack_require__, 8940)), {
  loadableGenerated: {
    modules: ["../screens/validator_details/components/staking/components/unbondings/index.tsx -> " + './components/desktop']
  }
});
const Mobile = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 3477).then(__webpack_require__.bind(__webpack_require__, 73477)), {
  loadableGenerated: {
    modules: ["../screens/validator_details/components/staking/components/unbondings/index.tsx -> " + './components/mobile']
  }
});

const Unbondings = props => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePagination */ .h0)({});
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useScreenSize */ .eI)();
  const pageItems = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr([], ['unbondings', 'data', page], props);
  const dataProfiles = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .useProfilesRecoil */ .Gs)(pageItems.map(x => x.address));
  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return _objectSpread(_objectSpread({}, x), {}, {
      address: dataProfiles[i]
    });
  });
  const items = mergedDataWithProfiles;
  let component = null;

  if (props.unbondings.loading) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Loading */ .gb, {});
  } else if (!items.length) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .NoData */ .Jd, {});
  } else if (isDesktop) {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Desktop, {
      items: items
    });
  } else {
    component = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Mobile, {
      items: items
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(props.className),
    children: [component, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .tl, {
      className: classes.paginate,
      total: props.unbondings.count,
      rowsPerPage: rowsPerPage,
      page: page,
      handleChangePage: handleChangePage,
      handleChangeRowsPerPage: handleChangeRowsPerPage
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unbondings);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      paginate: {
        marginTop: theme.spacing(3)
      },
      mobile: {
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        }
      },
      desktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'flex'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 76047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useStaking)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "big.js"
var external_big_js_ = __webpack_require__(22575);
var external_big_js_default = /*#__PURE__*/__webpack_require__.n(external_big_js_);
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(99634);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(52167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
;// CONCATENATED MODULE: ./src/graphql/general/validator_details_documents.ts
const ValidatorDelegationsDocument =
/* GraphQL */
`
query ValidatorDelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  delegations: action_validator_delegations(address: $validatorAddress, limit: $limit, offset: $offset, count_total: $pagination){
    delegations
    pagination
  }
}
`;
const ValidatorRedelegationsDocument =
/* GraphQL */
`
query ValidatorRedelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  redelegations: action_validator_redelegations_from(address: $validatorAddress, limit: $limit, offset: $offset, count_total: $pagination){
    redelegations
    pagination
  }
}
`;
const ValidatorUndelegationsDocument =
/* GraphQL */
`
query ValidatorUndelegations ($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  undelegations: action_validator_unbonding_delegations(address: $validatorAddress, limit: $limit, offset: $offset, count_total: $pagination){
    undelegations: unbonding_delegations
    pagination
  }
}
`;
// EXTERNAL MODULE: ./src/utils/format_token.ts
var format_token = __webpack_require__(42570);
// EXTERNAL MODULE: ./src/utils/get_denom.ts
var get_denom = __webpack_require__(92076);
// EXTERNAL MODULE: ./src/configs/index.ts + 3 modules
var configs = __webpack_require__(41215);
;// CONCATENATED MODULE: ./src/screens/validator_details/components/staking/hooks.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const stakingDefault = {
  data: {},
  count: 0,
  loading: true
};
const LIMIT = 100;
const PAGE_LIMIT = 10;
const useStaking = () => {
  const router = (0,router_.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    tab: 0,
    delegations: stakingDefault,
    redelegations: stakingDefault,
    unbondings: stakingDefault
  });
  (0,external_react_.useEffect)(() => {
    getDelegations();
    getRedelegations();
    getUnbondings();
  }, [router.query.address]);

  const handleSetState = stateChange => {
    setState(prevState => external_ramda_.mergeDeepLeft(stateChange, prevState));
  };

  const handleTabChange = (_event, newValue) => {
    setState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      tab: newValue
    }));
  };

  const createPagination = data => {
    const pages = {};
    data.forEach((x, i) => {
      const selectedKey = Math.floor(i / PAGE_LIMIT);
      pages[selectedKey] = pages[selectedKey] || [];
      pages[selectedKey].push(x);
    });
    return pages;
  }; // helper function to get rest of the staking items
  // if it is over the default limit


  const getStakeByPage = async (page, query) => {
    const {
      data
    } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
      variables: {
        validatorAddress: external_ramda_.pathOr('', ['query', 'address'], router),
        offset: page * LIMIT,
        limit: LIMIT,
        pagination: false
      },
      query
    });
    return data;
  }; // =====================================
  // delegations
  // =====================================


  const getDelegations = async () => {
    try {
      const {
        data
      } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
        variables: {
          validatorAddress: external_ramda_.pathOr('', ['query', 'address'], router),
          limit: LIMIT
        },
        query: ValidatorDelegationsDocument
      });
      const count = external_ramda_.pathOr(0, ['data', 'delegations', 'pagination', 'total'], data);
      const allDelegations = external_ramda_.pathOr([], ['data', 'delegations', 'delegations'], data); // if there are more than the default 100, grab the remaining delegations

      if (count > LIMIT) {
        const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
        const remainingDelegationsPromises = [];

        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingDelegationsPromises.push(getStakeByPage(i + 1, ValidatorDelegationsDocument));
        }

        const remainingDelegations = await Promise.allSettled(remainingDelegationsPromises);
        remainingDelegations.filter(x => x.status === 'fulfilled').forEach(x => {
          const delegations = external_ramda_.pathOr([], ['value', 'data', 'delegations', 'delegations'], x);
          allDelegations.push(...delegations);
        });
      }

      handleSetState({
        delegations: {
          loading: false,
          count,
          data: createPagination(formatDelegations(allDelegations))
        }
      });
    } catch (error) {
      handleSetState({
        delegations: {
          loading: false
        }
      });
    }
  };

  const formatDelegations = data => {
    return data.map(x => {
      const address = external_ramda_.pathOr('', ['delegator_address'], x);
      const delegation = (0,get_denom/* getDenom */.C)(x.coins, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit);
      return {
        address,
        amount: (0,format_token/* formatToken */.nx)(delegation.amount, delegation.denom)
      };
    }).sort((a, b) => {
      return external_big_js_default()(a.amount.value).gt(b.amount.value) ? -1 : 1;
    });
  }; // =====================================
  // redelegations
  // =====================================


  const getRedelegations = async () => {
    try {
      const {
        data
      } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
        variables: {
          validatorAddress: external_ramda_.pathOr('', ['query', 'address'], router),
          limit: LIMIT
        },
        query: ValidatorRedelegationsDocument
      });
      const count = external_ramda_.pathOr(0, ['data', 'redelegations', 'pagination', 'total'], data);
      const allData = external_ramda_.pathOr([], ['data', 'redelegations', 'redelegations'], data); // if there are more than the default 100, grab the remaining delegations

      if (count > LIMIT) {
        const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
        const remainingPromises = [];

        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingPromises.push(getStakeByPage(i + 1, ValidatorRedelegationsDocument));
        }

        const remainingData = await Promise.allSettled(remainingPromises);
        remainingData.filter(x => x.status === 'fulfilled').forEach(x => {
          const fullfilledData = external_ramda_.pathOr([], ['value', 'data', 'redelegations', 'redelegations'], x);
          allData.push(...fullfilledData);
        });
      }

      const formattedData = formatRedelegations(allData);
      handleSetState({
        redelegations: {
          loading: false,
          count: formattedData.length,
          data: createPagination(formattedData)
        }
      });
    } catch (error) {
      handleSetState({
        redelegations: {
          loading: false
        }
      });
    }
  };

  const formatRedelegations = data => {
    const results = [];
    data.forEach(x => {
      external_ramda_.pathOr([], ['entries'], x).forEach(y => {
        results.push({
          address: external_ramda_.pathOr('', ['delegator_address'], x),
          to: external_ramda_.pathOr('', ['validator_dst_address'], x),
          amount: (0,format_token/* formatToken */.nx)(y.balance, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit),
          completionTime: external_ramda_.pathOr('', ['completion_time'], y)
        });
      });
    });
    results.sort((a, b) => {
      return a.completionTime < b.completionTime ? -1 : 1;
    });
    return results;
  }; // =====================================
  // unbondings
  // =====================================


  const getUnbondings = async () => {
    try {
      const {
        data
      } = await external_axios_default().post("https://cosmos.evtscan.com/v1/graphql", {
        variables: {
          validatorAddress: external_ramda_.pathOr('', ['query', 'address'], router),
          limit: LIMIT
        },
        query: ValidatorUndelegationsDocument
      });
      const count = external_ramda_.pathOr(0, ['data', 'undelegations', 'pagination', 'total'], data);
      const allData = external_ramda_.pathOr([], ['data', 'undelegations', 'undelegations'], data); // if there are more than the default 100, grab the remaining delegations

      if (count > LIMIT) {
        const remainingFetchCount = Math.ceil(count / LIMIT) - 1;
        const remainingPromises = [];

        for (let i = 0; i < remainingFetchCount; i += 1) {
          remainingPromises.push(getStakeByPage(i + 1, ValidatorUndelegationsDocument));
        }

        const remainingData = await Promise.allSettled(remainingPromises);
        remainingData.filter(x => x.status === 'fulfilled').forEach(x => {
          const fullfilledData = external_ramda_.pathOr([], ['value', 'data', 'undelegations', 'undelegations'], x);
          allData.push(...fullfilledData);
        });
      }

      const formattedData = formatUnbondings(allData);
      handleSetState({
        unbondings: {
          loading: false,
          count: formattedData.length,
          data: createPagination(formattedData)
        }
      });
    } catch (error) {
      handleSetState({
        unbondings: {
          loading: false
        }
      });
    }
  };

  const formatUnbondings = data => {
    const results = [];
    data.forEach(x => {
      external_ramda_.pathOr([], ['entries'], x).forEach(y => {
        results.push({
          address: external_ramda_.pathOr('', ['delegator_address'], x),
          amount: (0,format_token/* formatToken */.nx)(y.balance, configs/* chainConfig.primaryTokenUnit */.i.primaryTokenUnit),
          completionTime: external_ramda_.pathOr('', ['completion_time'], y)
        });
      });
    });
    results.sort((a, b) => {
      return a.completionTime < b.completionTime ? -1 : 1;
    });
    return results;
  };

  return {
    state,
    handleTabChange
  };
};

/***/ }),

/***/ 59983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65117);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29744);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75653);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76047);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48894);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Delegations = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 14403)), {
  loadableGenerated: {
    modules: ["../screens/validator_details/components/staking/index.tsx -> " + './components/delegations']
  }
});
const Redelgations = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 37463)), {
  loadableGenerated: {
    modules: ["../screens/validator_details/components/staking/index.tsx -> " + './components/redelegations']
  }
});
const Unbondings = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 40060)), {
  loadableGenerated: {
    modules: ["../screens/validator_details/components/staking/index.tsx -> " + './components/unbondings']
  }
});

const Staking = props => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_6__/* .useStyles */ .y)();
  const {
    state,
    handleTabChange
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useStaking */ .n)();
  const tabs = [{
    id: 0,
    key: 'delegations',
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Delegations, {
      delegations: state.delegations
    }),
    count: state.delegations.count
  }, {
    id: 1,
    key: 'redelegations',
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Redelgations, {
      redelegations: state.redelegations
    }),
    count: state.redelegations.count
  }, {
    id: 2,
    key: 'unbondings',
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Unbondings, {
      unbondings: state.unbondings
    }),
    count: state.unbondings.count
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Tabs */ .mQ, {
      tab: state.tab,
      handleTabChange: handleTabChange,
      tabs: tabs
    }), tabs.map(x => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .TabPanel */ .AY, {
        index: x.id,
        value: state.tab,
        children: x.component
      }, x.id);
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Staking);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48894:
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
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {// display: 'flex',
          // flexDirection: 'column',
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 86157:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _msg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31069);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91619);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_msg__WEBPACK_IMPORTED_MODULE_2__]);
_msg__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const LIMIT = 50;
const useTransactions = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    data: [],
    hasNextPage: false,
    isNextPageLoading: false,
    offsetCount: 0
  });

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_3__.mergeDeepLeft(stateChange, prevState));
  };

  const transactionQuery = (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__/* .useGetMessagesByAddressQuery */ .sj)({
    variables: {
      limit: LIMIT + 1,
      // to check if more exist
      offset: 0,
      address: `{${ramda__WEBPACK_IMPORTED_MODULE_3__.pathOr('', ['query', 'address'], router)}}`
    },
    onCompleted: data => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = ramda__WEBPACK_IMPORTED_MODULE_3__.uniq([...state.data, ...formatTransactions(data)]);
      const stateChange = {
        data: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
        offsetCount: state.offsetCount + LIMIT
      };
      handleSetState(stateChange);
    }
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true
    }); // refetch query

    await transactionQuery.fetchMore({
      variables: {
        offset: state.offsetCount,
        limit: LIMIT + 1
      }
    }).then(({
      data
    }) => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = ramda__WEBPACK_IMPORTED_MODULE_3__.uniq([...state.data, ...formatTransactions(data)]);
      const stateChange = {
        data: newItems,
        hasNextPage: itemsLength === 51,
        isNextPageLoading: false,
        offsetCount: state.offsetCount + LIMIT
      };
      handleSetState(stateChange);
    });
  };

  const formatTransactions = data => {
    let formattedData = data.messagesByAddress;

    if (data.messagesByAddress.length === 51) {
      formattedData = data.messagesByAddress.slice(0, 51);
    }

    return formattedData.map(x => {
      const {
        transaction
      } = x; // =============================
      // messages
      // =============================

      const messages = (0,_msg__WEBPACK_IMPORTED_MODULE_2__/* .convertMsgsToModels */ .B8)(transaction);
      return {
        height: transaction.height,
        hash: transaction.hash,
        messages: {
          count: messages.length,
          items: messages
        },
        success: transaction.success,
        timestamp: transaction.block.timestamp
      };
    });
  };

  return {
    state,
    loadNextPage
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29744);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _recoil_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80201);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2773);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86157);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__, _hooks__WEBPACK_IMPORTED_MODULE_8__]);
([_components__WEBPACK_IMPORTED_MODULE_4__, _hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Transactions = props => {
  const txListFormat = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoil_settings__WEBPACK_IMPORTED_MODULE_6__/* .readTx */ .er);
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_7__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('validators');
  const {
    state,
    loadNextPage
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useTransactions */ .n)();
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;

  const isItemLoaded = index => !state.hasNextPage || index < state.data.length;

  const itemCount = state.hasNextPage ? state.data.length + 1 : state.data.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "h2",
      children: t('transactions')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: classes.list,
      children: txListFormat === 'compact' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .TransactionsList */ .RG, {
        transactions: state.data,
        itemCount: itemCount,
        hasNextPage: state.hasNextPage,
        isNextPageLoading: state.isNextPageLoading,
        loadNextPage: loadNextPage,
        loadMoreItems: loadMoreItems,
        isItemLoaded: isItemLoaded
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .TransactionListDetails */ .hc, {
        transactions: state.data,
        itemCount: itemCount,
        hasNextPage: state.hasNextPage,
        isNextPageLoading: state.isNextPageLoading,
        loadNextPage: loadNextPage,
        loadMoreItems: loadMoreItems,
        isItemLoaded: isItemLoaded
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transactions);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2773:
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
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2)
        }
      },
      list: {
        minHeight: '500px',
        height: '50vh',
        [theme.breakpoints.up('lg')]: {
          minHeight: '65vh'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 25331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useAddress)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);


const useAddress = t => {
  const handleCopyToClipboard = value => {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(value);
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)(t('common:copied'));
  };

  return {
    handleCopyToClipboard
  };
};

/***/ }),

/***/ 87192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22575);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34871);
/* harmony import */ var _assets_icon_copy_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39071);
/* harmony import */ var _utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57875);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29744);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75657);
/* harmony import */ var _utils_go_to_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48625);
/* harmony import */ var _utils_get_validator_status__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(39143);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57195);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37509);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25331);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_8__]);
_components__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




















const ValidatorOverview = ({
  status,
  overview,
  className
}) => {
  const {
    isDesktop
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useScreenSize */ .eI)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_11__/* .useStyles */ .y)();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('validators');
  const {
    handleCopyToClipboard
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useAddress */ .S)(t);
  const statusTheme = (0,_utils_get_validator_status__WEBPACK_IMPORTED_MODULE_14__/* .getValidatorStatus */ .O)(status.status, status.jailed, status.tombstoned);
  const condition = (0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .getCondition */ .e)(status.condition, status.status);
  const statusItems = [{
    key: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "h4",
      className: "label",
      children: t('status')
    }),
    value: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .Tag */ .Vp, {
      value: t(statusTheme.status),
      theme: statusTheme.theme,
      className: classes.statusTag
    })
  }, {
    key: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "h4",
      className: "label",
      children: t('commission')
    }),
    value: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "body1",
      className: "value",
      children: `${numeral__WEBPACK_IMPORTED_MODULE_4___default()(status.commission * 100).format('0.00')}%`
    })
  }, {
    key: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "h4",
      className: "label condition",
      children: [t('condition'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .InfoPopover */ .Ob, {
        content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .ConditionExplanation */ .mK, {})
      })]
    }),
    value: status.status === 3 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
      className: "condition__body",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .InfoPopover */ .Ob, {
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
            variant: "body1",
            children: t('missedBlockCounter', {
              amount: numeral__WEBPACK_IMPORTED_MODULE_4___default()(status.missedBlockCounter).format('0,0')
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
            variant: "body1",
            children: t('signedBlockWindow', {
              amount: numeral__WEBPACK_IMPORTED_MODULE_4___default()(status.signedBlockWindow).format('0,0')
            })
          })]
        }),
        display: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
          variant: "body1",
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('value', condition),
          children: t(condition)
        })
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "body1",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('value', 'condition', condition),
      children: t(condition)
    })
  }, {
    key: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "h4",
      className: "label",
      children: t('maxRate')
    }),
    value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "body1",
      className: "value",
      children: [big_js__WEBPACK_IMPORTED_MODULE_3___default()(status.maxRate).times(100).toFixed(2), "%"]
    })
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: classes.addressRoot,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.copyText, classes.item),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
            variant: "body1",
            className: "label",
            children: t('operatorAddress')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "detail",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_assets_icon_copy_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              onClick: () => handleCopyToClipboard(overview.operatorAddress),
              className: classes.actionIcons
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
              variant: "body1",
              className: "value",
              children: !isDesktop ? (0,_utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_16__/* .getMiddleEllipsis */ .I)(overview.operatorAddress, {
                beginning: 15,
                ending: 5
              }) : overview.operatorAddress
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.copyText, classes.item),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
            variant: "body1",
            className: "label",
            children: t('selfDelegateAddress')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "detail",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_assets_icon_copy_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              className: classes.actionIcons,
              onClick: () => handleCopyToClipboard(overview.selfDelegateAddress)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(next_link__WEBPACK_IMPORTED_MODULE_9__["default"], {
              href: (0,_utils_go_to_page__WEBPACK_IMPORTED_MODULE_10__/* .ACCOUNT_DETAILS */ .e1)(overview.selfDelegateAddress),
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                variant: "body1",
                className: "value",
                component: "a",
                children: !isDesktop ? (0,_utils_get_middle_ellipsis__WEBPACK_IMPORTED_MODULE_16__/* .getMiddleEllipsis */ .I)(overview.selfDelegateAddress, {
                  beginning: 15,
                  ending: 5
                }) : overview.selfDelegateAddress
              })
            })]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {
        className: classes.divider
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
        className: classes.statusRoot,
        children: statusItems.map((x, i) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: classes.statusItem,
            children: [x.key, x.value]
          }, `status-item-${i}`);
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatorOverview);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = () => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      addressRoot: {
        [theme.breakpoints.up('md')]: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)'
        }
      },
      actionIcons: {
        '&:hover': {
          cursor: 'pointer'
        }
      },
      icons: {
        '& svg': {
          width: theme.spacing(4.5),
          height: theme.spacing(4.5)
        }
      },
      item: {
        padding: theme.spacing(2, 0),
        color: theme.palette.custom.fonts.fontTwo,
        '&:first-child': {
          paddingTop: 0
        },
        '&:last-child': {
          paddingBottom: 0
        },
        '&:not(:last-child)': {
          borderBottom: `solid 1px ${theme.palette.divider}`
        },
        '& .label': {
          marginBottom: theme.spacing(1)
        },
        '& .detail': {
          '&.MuiTypography-body1': {
            wordWrap: 'break-word'
          }
        },
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        [theme.breakpoints.up('md')]: {
          padding: 0,
          '&:not(:last-child)': {
            borderBottom: 'none'
          },
          '& .label': {
            marginBottom: 0
          }
        }
      },
      copyText: {
        '& .detail': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
          '& svg': {
            width: '1rem',
            marginLeft: theme.spacing(1)
          }
        }
      },
      statusRoot: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridGap: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: 'repeat(2, 1fr)'
        },
        [theme.breakpoints.up('lg')]: {
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)'
        }
      },
      statusItem: {
        '& .label': {
          marginBottom: theme.spacing(1),
          color: theme.palette.custom.fonts.fontThree,
          '&.condition': {
            display: 'flex',
            alignItems: 'center'
          }
        },
        '& .condition__body': {
          justifySelf: 'flex-start'
        },
        '& p.value': {
          color: theme.palette.custom.fonts.fontTwo,
          '&.good': {
            color: theme.palette.custom.condition.one
          },
          '&.moderate': {
            color: theme.palette.custom.condition.two
          },
          '&.bad': {
            color: theme.palette.custom.condition.three
          },
          '&.condition': {
            color: theme.palette.custom.condition.zero
          }
        },
        '& a': {
          color: theme.palette.custom.fonts.highlight
        }
      },
      statusTag: {
        '& .MuiTypography-body1': {
          lineHeight: 1
        }
      },
      divider: {
        margin: theme.spacing(3, 0)
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 37509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getCondition)
/* harmony export */ });
/* unused harmony export getStatusTheme */

const getStatusTheme = (/* unused pure expression or super */ null && (getValidatorStatus));
const getCondition = (condition, status) => {
  let result = 'na';

  if (status === 3) {
    if (condition > 90) {
      result = 'good';
    } else if (condition > 70 && condition < 90) {
      result = 'moderate';
    } else {
      result = 'bad';
    }
  }

  return result;
};

/***/ }),

/***/ 17669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75657);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29744);
/* harmony import */ var _utils_go_to_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48625);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95472);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_6__]);
_components__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const VotingPower = ({
  className,
  data,
  status
}) => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()('validators');
  const votingPowerPercent = status === 3 ? numeral__WEBPACK_IMPORTED_MODULE_3___default()(data.self / numeral__WEBPACK_IMPORTED_MODULE_3___default()(data.overall.value).value() * 100) : numeral__WEBPACK_IMPORTED_MODULE_3___default()(0);
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_8__/* .useStyles */ .y)(votingPowerPercent.format(0, Math.floor));
  const votingPower = status === 3 ? numeral__WEBPACK_IMPORTED_MODULE_3___default()(data.self).format('0,0') : '0';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, classes.root),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
      variant: "h2",
      children: t('votingPower')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: classes.data,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "h3",
        className: "primary__data",
        children: `${votingPowerPercent.format('0,0.00')}%`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "body1",
        children: [votingPower, ' ', "/", ' ', numeral__WEBPACK_IMPORTED_MODULE_3___default()(data.overall.value).format('0,0')]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: classes.chart,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: classes.active
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: classes.item,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "h4",
        className: "label",
        children: t('block')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: (0,_utils_go_to_page__WEBPACK_IMPORTED_MODULE_7__/* .BLOCK_DETAILS */ .b5)(data.height),
        passHref: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "body1",
          className: "value",
          component: "a",
          children: numeral__WEBPACK_IMPORTED_MODULE_3___default()(data.height).format('0,0')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: classes.item,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "h4",
        className: "label",
        children: t('votingPower')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "body1",
        className: "value",
        children: votingPower
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: classes.item,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "h4",
        className: "label",
        children: t('votingPowerPercent')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "body1",
        className: "value",
        children: `${votingPowerPercent.format('0,0.00')}%`
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VotingPower);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39105);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = percentage => {
  const styles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
    return {
      root: {
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2)
        }
      },
      data: {
        display: 'flex',
        alignItems: 'flex-end',
        '& .primary__data': {
          color: theme.palette.primary.main,
          marginRight: theme.spacing(2),
          fontSize: '2.5rem'
        }
      },
      chart: {
        display: 'flex',
        height: '8px',
        borderRadius: theme.shape.borderRadius,
        background: color__WEBPACK_IMPORTED_MODULE_1___default()(theme.palette.primary.main).alpha(0.2).string(),
        overflow: 'hidden',
        margin: theme.spacing(2, 0)
      },
      active: {
        width: `${percentage}%`,
        background: theme.palette.primary.main,
        transition: '0.3s'
      },
      item: {
        '&:not(:last-child)': {
          marginBottom: theme.spacing(2)
        },
        '& .label': {
          marginBottom: theme.spacing(1),
          color: theme.palette.custom.fonts.fontThree
        },
        '& p.value': {
          color: theme.palette.custom.fonts.fontTwo,
          '& .positive': {
            color: theme.palette.custom.tags.one
          },
          '& .negative': {
            color: theme.palette.custom.tags.three
          }
        },
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }
    };
  }, {
    index: 1
  })();
  return styles;
};

/***/ }),

/***/ 12497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useValidatorDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99634);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_format_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42570);
/* harmony import */ var _graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91619);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34871);
/* harmony import */ var _recoil_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33067);
/* harmony import */ var _utils_get_validator_condition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96515);
/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41215);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50183);
/* harmony import */ var _utils_prefix_convert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82776);











const initialTokenDenom = {
  value: '0',
  displayDenom: '',
  baseDenom: '',
  exponent: 0
};
const initialState = {
  loading: true,
  exists: true,
  desmosProfile: null,
  overview: {
    validator: '',
    operatorAddress: '',
    selfDelegateAddress: '',
    description: '',
    website: ''
  },
  status: {
    status: 0,
    jailed: false,
    tombstoned: false,
    condition: 0,
    commission: 0,
    missedBlockCounter: 0,
    signedBlockWindow: 0,
    maxRate: '0'
  },
  votingPower: {
    height: 0,
    overall: initialTokenDenom,
    self: 0
  }
};
const useValidatorDetails = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);

  const handleSetState = stateChange => {
    setState(prevState => ramda__WEBPACK_IMPORTED_MODULE_1__.mergeDeepLeft(stateChange, prevState));
  }; // ==========================
  // Desmos Profile
  // ==========================


  const {
    fetchDesmosProfile,
    formatDesmosProfile
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useDesmosProfile */ .Q0)({
    onComplete: data => {
      handleSetState({
        desmosProfile: formatDesmosProfile(data)
      });
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,_utils_prefix_convert__WEBPACK_IMPORTED_MODULE_9__/* .isValidAddress */ .A)(router.query.address)) {
      handleSetState({
        loading: false,
        exist: false
      });
    } else if (_src_configs__WEBPACK_IMPORTED_MODULE_7__/* .chainConfig.extra.profile */ .i.extra.profile) {
      const address = (0,_recoil_profiles__WEBPACK_IMPORTED_MODULE_6__/* .validatorToDelegatorAddress */ .kW)(router.query.address);
      fetchDesmosProfile(address);
    }
  }, [router.query.address]); // ==========================
  // Fetch Data
  // ==========================

  (0,_graphql_types_general_types__WEBPACK_IMPORTED_MODULE_4__/* .useValidatorDetailsQuery */ .B8)({
    variables: {
      address: router.query.address
    },
    onCompleted: data => {
      handleSetState(formatAccountQuery(data));
    }
  });

  const formatAccountQuery = data => {
    const stateChange = {
      loading: false
    };

    if (!data.validator.length) {
      stateChange.exists = false;
      return stateChange;
    } // ============================
    // overview
    // ============================


    const formatOverview = () => {
      const operatorAddress = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['validator', 0, 'validatorInfo', 'operatorAddress'], data);
      const selfDelegateAddress = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['validator', 0, 'validatorInfo', 'selfDelegateAddress'], data);
      const profile = {
        validator: operatorAddress,
        operatorAddress,
        selfDelegateAddress,
        description: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['validatorDescriptions', 0, 'details'], data.validator[0]),
        website: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('', ['validatorDescriptions', 0, 'website'], data.validator[0])
      };
      return profile;
    };

    stateChange.overview = formatOverview(); // ============================
    // status
    // ============================

    const formatStatus = () => {
      const slashingParams = _models__WEBPACK_IMPORTED_MODULE_8__/* .SlashingParams.fromJson */ .HC.fromJson(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr({}, ['slashingParams', 0, 'params'], data));
      const missedBlockCounter = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(0, ['validatorSigningInfos', 0, 'missedBlocksCounter'], data.validator[0]);
      const {
        signedBlockWindow
      } = slashingParams;
      const condition = (0,_utils_get_validator_condition__WEBPACK_IMPORTED_MODULE_10__/* .getValidatorCondition */ .W)(signedBlockWindow, missedBlockCounter);
      const profile = {
        status: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(3, ['validatorStatuses', 0, 'status'], data.validator[0]),
        jailed: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(false, ['validatorStatuses', 0, 'jailed'], data.validator[0]),
        tombstoned: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(false, ['validatorSigningInfos', 0, 'tombstoned'], data.validator[0]),
        commission: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(0, ['validatorCommissions', 0, 'commission'], data.validator[0]),
        condition,
        missedBlockCounter,
        signedBlockWindow,
        maxRate: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr('0', ['validator', 0, 'validatorInfo', 'maxRate'], data)
      };
      return profile;
    };

    stateChange.status = formatStatus(); // ============================
    // votingPower
    // ============================

    const formatVotingPower = () => {
      const selfVotingPower = ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], data.validator[0]);
      const votingPower = {
        self: selfVotingPower,
        overall: (0,_utils_format_token__WEBPACK_IMPORTED_MODULE_3__/* .formatToken */ .nx)(ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(0, ['stakingPool', 0, 'bonded'], data), _src_configs__WEBPACK_IMPORTED_MODULE_7__/* .chainConfig.votingPowerTokenUnit */ .i.votingPowerTokenUnit),
        height: ramda__WEBPACK_IMPORTED_MODULE_1__.pathOr(0, ['validatorVotingPowers', 0, 'height'], data.validator[0])
      };
      return votingPower;
    };

    stateChange.votingPower = formatVotingPower();
    return stateChange;
  };

  return {
    state
  };
};

/***/ }),

/***/ 29208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29744);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29862);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54361);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12497);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const ValidatorDetails = () => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('validators');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_4__/* .useStyles */ .y)();
  const {
    state
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useValidatorDetails */ .E)();
  const {
    desmosProfile,
    status
  } = state;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
      title: t('validatorDetails'),
      openGraph: {
        title: t('validatorDetails')
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
      navTitle: t('validatorDetails'),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .LoadAndExist */ .Wf, {
        exists: state.exists,
        loading: state.loading,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          className: classes.root,
          children: [desmosProfile ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .DesmosProfile */ .BN, _objectSpread({
            className: classes.profile
          }, desmosProfile)) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Profile */ .NZ, {
            className: classes.profile,
            profile: state.overview
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .ValidatorOverview */ .jV, {
            className: classes.address,
            overview: state.overview,
            status: state.status
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .VotingPower */ .km, {
            className: classes.votingPower,
            data: state.votingPower,
            status: status.status
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Blocks */ .no, {
            className: classes.blocks
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Staking */ .T4, {
            className: classes.staking
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Transactions */ .PU, {
            className: classes.transactions
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatorDetails);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29862:
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
      root: _objectSpread(_objectSpread({}, theme.mixins.layout), {}, {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto',
        gridGap: theme.spacing(1),
        '& a': {
          color: theme.palette.custom.fonts.highlight
        },
        [theme.breakpoints.up('lg')]: {
          gridGap: theme.spacing(2),
          gridTemplateColumns: 'repeat(2, 1fr) 500px'
        }
      }),
      address: {
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 4'
        }
      },
      status: {
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 4'
        }
      },
      profile: {
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 4'
        }
      },
      votingPower: {
        background: '#ffc93c',
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 3'
        }
      },
      blocks: {
        background: '#dbf6e9',
        [theme.breakpoints.up('lg')]: {
          gridColumn: '3 / 4'
        }
      },
      staking: {
        background: '#9ddfd3',
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 4'
        }
      },
      transactions: {
        background: '#31326f',
        [theme.breakpoints.up('lg')]: {
          gridColumn: '1 / 4'
        }
      }
    };
  })();
  return styles;
};

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 48308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 72105:
/***/ ((module) => {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ 27806:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 43349:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9848:
/***/ ((module) => {

module.exports = require("bech32");

/***/ }),

/***/ 22575:
/***/ ((module) => {

module.exports = require("big.js");

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 39105:
/***/ ((module) => {

module.exports = require("color");

/***/ }),

/***/ 68887:
/***/ ((module) => {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 45334:
/***/ ((module) => {

module.exports = require("dayjs/plugin/advancedFormat");

/***/ }),

/***/ 14195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 60811:
/***/ ((module) => {

module.exports = require("dayjs/plugin/updateLocale");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 81320:
/***/ ((module) => {

module.exports = require("dompurify");

/***/ }),

/***/ 11904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ 16641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 74137:
/***/ ((module) => {

module.exports = require("next-translate/Trans");

/***/ }),

/***/ 87462:
/***/ ((module) => {

module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ 5508:
/***/ ((module) => {

module.exports = require("next-translate/setLanguage");

/***/ }),

/***/ 60866:
/***/ ((module) => {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 60562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 64365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 88032:
/***/ ((module) => {

module.exports = require("numeral");

/***/ }),

/***/ 99634:
/***/ ((module) => {

module.exports = require("ramda");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 88041:
/***/ ((module) => {

module.exports = require("react-virtualized-auto-sizer");

/***/ }),

/***/ 80551:
/***/ ((module) => {

module.exports = require("react-window");

/***/ }),

/***/ 30353:
/***/ ((module) => {

module.exports = require("react-window-infinite-loader");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 29755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 84562:
/***/ ((module) => {

module.exports = import("jdenticon");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4289,5657,5117,1371,8625,9744,5044,9071], () => (__webpack_exec__(79450)));
module.exports = __webpack_exports__;

})();
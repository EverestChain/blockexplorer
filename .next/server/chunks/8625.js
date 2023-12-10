"use strict";
exports.id = 8625;
exports.ids = [8625];
exports.modules = {

/***/ 41215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ chainConfig),
  "C": () => (/* reexport */ general_config_namespaceObject)
});

;// CONCATENATED MODULE: ./src/configs/chain_config.testnet.json
const chain_config_testnet_namespaceObject = JSON.parse('{"title":"Everest Block Explorer","network":"evt_8848-1","icon":"/images/evt.png","logo":{"default":"/images/evt.png","deuteranopia":"/images/evt_light.png","tritanopia":"/images/evt_light.png"},"prefix":{"consensus":"evtvalcons","validator":"evtvaloper","account":"evt"},"genesis":{"time":"2021-07-13T08:00:00","height":1},"primaryTokenUnit":"aevt","votingPowerTokenUnit":"aevt","tokenUnits":{"aevt":{"display":"evt","exponent":18},"ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518":{"display":"osmo","exponent":6}},"extra":{"profile":false}}');
;// CONCATENATED MODULE: ./src/configs/chain_config.mainnet.json
const chain_config_mainnet_namespaceObject = JSON.parse('{"title":"Everest Block Explorer","network":"evt_8848-1","icon":"/images/evt.png","logo":{"default":"/images/evt.png","deuteranopia":"/images/evt_light.png","tritanopia":"/images/evt_light.png"},"prefix":{"consensus":"evtvalcons","validator":"evtvaloper","account":"evt"},"genesis":{"time":"2021-07-13T08:00:00","height":1},"primaryTokenUnit":"aevt","votingPowerTokenUnit":"aevt","tokenUnits":{"aevt":{"display":"evt","exponent":18},"ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518":{"display":"osmo","exponent":6}},"extra":{"profile":false}}');
;// CONCATENATED MODULE: ./src/configs/general_config.json
const general_config_namespaceObject = JSON.parse('{"maintainer":{"name":"Everest","url":"https://evtscan.com"},"github":{"reportIssue":"https://github.com/thr2240/Everest/issues"},"previewImage":"https://evtscan.com/images/Everest.png","version":"base-v1.1.0"}');
;// CONCATENATED MODULE: ./src/configs/index.ts



/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */

const getChainConfig = () => {
  const chainType = "testnet" || 0;

  if (chainType === 'mainnet') {
    return chain_config_mainnet_namespaceObject;
  }

  return chain_config_testnet_namespaceObject;
};

const chainConfig = getChainConfig();


/***/ }),

/***/ 48625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sd": () => (/* binding */ HOME),
/* harmony export */   "RG": () => (/* binding */ BLOCKS),
/* harmony export */   "b5": () => (/* binding */ BLOCK_DETAILS),
/* harmony export */   "Hq": () => (/* binding */ VALIDATOR_DETAILS),
/* harmony export */   "LA": () => (/* binding */ VALIDATORS),
/* harmony export */   "wO": () => (/* binding */ TRANSACTIONS),
/* harmony export */   "$J": () => (/* binding */ TRANSACTION_DETAILS),
/* harmony export */   "x1": () => (/* binding */ PROPOSALS),
/* harmony export */   "Fg": () => (/* binding */ PROPOSAL_DETAILS),
/* harmony export */   "e1": () => (/* binding */ ACCOUNT_DETAILS),
/* harmony export */   "zK": () => (/* binding */ PARAMS),
/* harmony export */   "tw": () => (/* binding */ PROFILE_DETAILS),
/* harmony export */   "Mq": () => (/* binding */ ADDRESS_DETAILS)
/* harmony export */ });
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41215);

const HOME = '/';
const BLOCKS = '/blocks';
const BLOCK_DETAILS = slot => `/blocks/${slot}`;
const VALIDATOR_DETAILS = address => `/validators/${address}`;
const VALIDATORS = '/validators';
const TRANSACTIONS = '/transactions';
const TRANSACTION_DETAILS = tx => `/transactions/${tx}`;
const PROPOSALS = '/proposals';
const PROPOSAL_DETAILS = id => `/proposals/${id}`;
const ACCOUNT_DETAILS = address => `/accounts/${address}`;
const PARAMS = '/params';
const PROFILE_DETAILS = dtag => `/${dtag}`;
/**
 * Helper to determine if we are routing to validator details or account details
 * @param address
 * @returns
 */

const ADDRESS_DETAILS = address => address.includes(_configs__WEBPACK_IMPORTED_MODULE_0__/* .chainConfig.prefix.validator */ .i.prefix.validator) ? VALIDATOR_DETAILS(address) : ACCOUNT_DETAILS(address);

/***/ })

};
;
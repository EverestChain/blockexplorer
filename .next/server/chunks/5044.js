"use strict";
exports.id = 5044;
exports.ids = [5044];
exports.modules = {

/***/ 54118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ a11yProps)
/* harmony export */ });
/**
 * Mui helper to return allyProps tabs
 * @param index the index of the tab
 * @returns an object with `id` and `aria-controls`
 */
const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

/***/ }),

/***/ 96515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getValidatorCondition),
/* harmony export */   "J": () => (/* binding */ getValidatorConditionClass)
/* harmony export */ });
/**
 * Util to get a validator's current condition
 * @param signedBlockWindow the chain's
 * @param missedBlockCounter
 * @returns number out of 100
 */
const getValidatorCondition = (signedBlockWindow, missedBlockCounter) => {
  return (1 - missedBlockCounter / signedBlockWindow) * 100;
};
/**
 * Returns the css class based on the condition percentage out of 100
 * @param condition the condition percentage
 * @returns `green` | `yellow` | `red`
 */

const getValidatorConditionClass = condition => {
  let conditionClass = '';

  if (condition > 90) {
    conditionClass = 'green';
  } else if (condition > 70 && condition < 90) {
    conditionClass = 'yellow';
  } else {
    conditionClass = 'red';
  }

  return conditionClass;
};

/***/ }),

/***/ 39143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ getValidatorStatus)
/* harmony export */ });
/**
 * Util to get the validator status and theme
 * @param status 0-3
 * @param jailed boolean
 * @returns an object with status and theme
 */
const getValidatorStatus = (status, jailed, tombstoned) => {
  const results = {
    status: 'na',
    theme: 'zero'
  }; // jailed and tombstone statuses are prioritised over their unbonding state

  if (tombstoned) {
    results.status = 'tombstoned';
    results.theme = 'two';
    return results;
  }

  if (jailed) {
    results.status = 'jailed';
    results.theme = 'two';
    return results;
  }

  if (status === 3) {
    results.status = 'active';
    results.theme = 'one';
  } else if (status === 2) {
    results.status = 'unbonding';
    results.theme = 'three';
  } else if (status === 1) {
    results.status = 'unbonded';
    results.theme = 'zero';
  } else {
    results.status = 'unknown';
    results.theme = 'zero';
  }

  return results;
};

/***/ })

};
;
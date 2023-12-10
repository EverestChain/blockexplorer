exports.id = 1371;
exports.ids = [1371];
exports.modules = {

/***/ 91371:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  // locales: ['en', 'zht'],
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home', 'blocks', 'transactions'],
    'rgx:^/@*': ['profiles', 'accounts'],
    'rgx:^/blocks': ['blocks', 'transactions', 'message_labels', 'message_contents'],
    'rgx:^/transactions': ['transactions', 'message_labels', 'message_contents'],
    'rgx:^/proposals': ['proposals'],
    'rgx:^/validators': ['validators', 'transactions', 'accounts', 'message_labels', 'message_contents'],
    'rgx:^/accounts': ['accounts', 'transactions', 'validators', 'message_labels', 'message_contents'],
    'rgx:^/params': ['params']
  },
  loadLocaleFrom: (lang, ns) => __webpack_require__(1014)(`./${lang}/${ns}.json`).then(m => m.default)
};

/***/ }),

/***/ 1014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/accounts.json": [
		95547,
		5547
	],
	"./en/blocks.json": [
		42377,
		2377
	],
	"./en/common.json": [
		23172,
		3172
	],
	"./en/home.json": [
		74243,
		4243
	],
	"./en/message_contents.json": [
		62338,
		2338
	],
	"./en/message_labels.json": [
		40996,
		996
	],
	"./en/params.json": [
		78521,
		8521
	],
	"./en/profiles.json": [
		35901,
		5901
	],
	"./en/proposals.json": [
		84851,
		4851
	],
	"./en/transactions.json": [
		62482,
		2482
	],
	"./en/validators.json": [
		78000,
		8000
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 1014;
module.exports = webpackAsyncContext;

/***/ })

};
;
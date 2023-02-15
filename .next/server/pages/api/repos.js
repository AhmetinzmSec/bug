"use strict";
(() => {
var exports = {};
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 7881:
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 5758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetch = __webpack_require__(7881);
let key1 = 'ghp_VzcC7gx0GXzOVP1';
let key2 = '7kIiTmNtBqj2sOC0S0zxD';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    let _ = await (await fetch('https://api.github.com/users/AhmetinzmSec/repos', {
        headers: {
            Authorization: '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' + key1 + key2
        }
    })).json();
    try {
        res.send([
            ..._
        ]);
    } catch  {
        res.status(500);
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5758));
module.exports = __webpack_exports__;

})();
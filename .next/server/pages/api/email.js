"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 869:
/***/ ((module) => {

module.exports = import("emailjs");;

/***/ }),

/***/ 7492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var emailjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(869);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([emailjs__WEBPACK_IMPORTED_MODULE_0__]);
emailjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const client = new emailjs__WEBPACK_IMPORTED_MODULE_0__.SMTPClient({
    user: "makszhukov1997@gmail.com",
    password: "ytngfhjkz199719971997",
    host: "smtp.gmail.com",
    port: 587,
    ssl: true
});
function handler(req, res) {
    if (req.method === "POST") {
        const { name , phone , text  } = req.body;
        client.send({
            text: text,
            from: `${name} ${phone}`,
            to: "<makszhukov1997@gmail.com>",
            subject: "\u0412\u043E\u043F\u0440\u043E\u0441 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044E"
        }, (err)=>{
            console.log(err);
            if (err) {
                res.status(400);
                return;
            }
            res.status(200);
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7492));
module.exports = __webpack_exports__;

})();
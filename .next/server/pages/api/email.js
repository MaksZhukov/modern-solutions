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
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    host: "smtp.yandex.ru",
    port: 465,
    ssl: true
});
function handler(req, res) {
    if (req.method === "POST") {
        const { name , phone , text  } = req.body;
        client.send({
            from: `<${process.env.SMTP_USER}>`,
            to: `<${process.env.SMTP_USER}>`,
            subject: "\u0412\u043E\u043F\u0440\u043E\u0441 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044E",
            attachment: [
                {
                    data: `<html><p>Имя: ${name}</p><p>Телефон: ${phone}</p><p>Коментарий: ${text}</p></html>`,
                    alternative: true
                }
            ]
        }, (err, mess)=>{
            console.log(err, mess);
            if (err) {
                res.status(400).send();
                return;
            }
            res.status(200).send();
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
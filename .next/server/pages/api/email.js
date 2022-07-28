"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/email";
exports.ids = ["pages/api/email"];
exports.modules = {

/***/ "emailjs":
/*!**************************!*\
  !*** external "emailjs" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("emailjs");;

/***/ }),

/***/ "(api)/./pages/api/email.js":
/*!****************************!*\
  !*** ./pages/api/email.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var emailjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs */ \"emailjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([emailjs__WEBPACK_IMPORTED_MODULE_0__]);\nemailjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst client = new emailjs__WEBPACK_IMPORTED_MODULE_0__.SMTPClient({\n    user: process.env.SMTP_USER,\n    password: process.env.SMTP_PASSWORD,\n    host: \"smtp.yandex.ru\",\n    port: 465,\n    ssl: true\n});\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , phone , text  } = req.body;\n        client.send({\n            from: `<${process.env.SMTP_USER}>`,\n            to: `<${process.env.SMTP_USER}>`,\n            subject: \"Вопрос руководителю\",\n            attachment: [\n                {\n                    data: `<html><p>Имя: ${name}</p><p>Телефон: ${phone}</p><p>Коментарий: ${text}</p></html>`,\n                    alternative: true\n                }, \n            ]\n        }, (err, mess)=>{\n            console.log(err);\n            if (err) {\n                res.status(500).send(err);\n                return;\n            }\n            res.status(200).send();\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsTUFBTSxHQUFHLElBQUlELCtDQUFVLENBQUM7SUFDN0JFLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7SUFDM0JDLFFBQVEsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7SUFDbkNDLElBQUksRUFBRSxnQkFBZ0I7SUFDdEJDLElBQUksRUFBRSxHQUFHO0lBQ1RDLEdBQUcsRUFBRSxJQUFJO0NBQ1QsQ0FBQztBQUVhLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDekMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQzFCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxHQUFHTCxHQUFHLENBQUNNLElBQUk7UUFDdENqQixNQUFNLENBQUNrQixJQUFJLENBQ1Y7WUFDQ0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFakIsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbENnQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUVsQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNoQ2lCLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUJDLFVBQVUsRUFBRTtnQkFDWDtvQkFDQ0MsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFVCxJQUFJLENBQUMsZ0JBQWdCLEVBQUVDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDMUZRLFdBQVcsRUFBRSxJQUFJO2lCQUNqQjthQUNEO1NBQ0QsRUFDRCxDQUFDQyxHQUFHLEVBQUVDLElBQUksR0FBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSUEsR0FBRyxFQUFFO2dCQUNSYixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNYLElBQUksQ0FBQ08sR0FBRyxDQUFDLENBQUM7Z0JBQzFCLE9BQU87YUFDUDtZQUNEYixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNYLElBQUksRUFBRSxDQUFDO1NBQ3ZCLENBQ0QsQ0FBQztLQUNGO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvYXBpL2VtYWlsLmpzPzg5MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU01UUENsaWVudCB9IGZyb20gJ2VtYWlsanMnO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgU01UUENsaWVudCh7XG5cdHVzZXI6IHByb2Nlc3MuZW52LlNNVFBfVVNFUixcblx0cGFzc3dvcmQ6IHByb2Nlc3MuZW52LlNNVFBfUEFTU1dPUkQsXG5cdGhvc3Q6ICdzbXRwLnlhbmRleC5ydScsXG5cdHBvcnQ6IDQ2NSxcblx0c3NsOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblx0aWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuXHRcdGNvbnN0IHsgbmFtZSwgcGhvbmUsIHRleHQgfSA9IHJlcS5ib2R5O1xuXHRcdGNsaWVudC5zZW5kKFxuXHRcdFx0e1xuXHRcdFx0XHRmcm9tOiBgPCR7cHJvY2Vzcy5lbnYuU01UUF9VU0VSfT5gLFxuXHRcdFx0XHR0bzogYDwke3Byb2Nlc3MuZW52LlNNVFBfVVNFUn0+YCxcblx0XHRcdFx0c3ViamVjdDogJ9CS0L7Qv9GA0L7RgSDRgNGD0LrQvtCy0L7QtNC40YLQtdC70Y4nLFxuXHRcdFx0XHRhdHRhY2htZW50OiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGF0YTogYDxodG1sPjxwPtCY0LzRjzogJHtuYW1lfTwvcD48cD7QotC10LvQtdGE0L7QvTogJHtwaG9uZX08L3A+PHA+0JrQvtC80LXQvdGC0LDRgNC40Lk6ICR7dGV4dH08L3A+PC9odG1sPmAsXG5cdFx0XHRcdFx0XHRhbHRlcm5hdGl2ZTogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdChlcnIsIG1lc3MpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufVxuIl0sIm5hbWVzIjpbIlNNVFBDbGllbnQiLCJjbGllbnQiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIlNNVFBfVVNFUiIsInBhc3N3b3JkIiwiU01UUF9QQVNTV09SRCIsImhvc3QiLCJwb3J0Iiwic3NsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJwaG9uZSIsInRleHQiLCJib2R5Iiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJhdHRhY2htZW50IiwiZGF0YSIsImFsdGVybmF0aXZlIiwiZXJyIiwibWVzcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/email.js"));
module.exports = __webpack_exports__;

})();
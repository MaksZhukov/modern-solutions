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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var emailjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs */ \"emailjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([emailjs__WEBPACK_IMPORTED_MODULE_0__]);\nemailjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst client = new emailjs__WEBPACK_IMPORTED_MODULE_0__.SMTPClient({\n    user: \"zhukoff.max2017@yandex.ru\",\n    password: \"nowfalmogwwqvwgg\",\n    host: \"smtp.yandex.ru\",\n    port: 465,\n    ssl: true\n});\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , phone , text  } = req.body;\n        client.send({\n            from: `<zhukoff.max2017@yandex.ru>`,\n            to: \"<zhukoff.max2017@yandex.ru>\",\n            subject: \"\\u0412\\u043E\\u043F\\u0440\\u043E\\u0441 \\u0440\\u0443\\u043A\\u043E\\u0432\\u043E\\u0434\\u0438\\u0442\\u0435\\u043B\\u044E\",\n            attachment: [\n                {\n                    data: `<html><p>Имя: ${name}</p><p>Телефон: ${phone}</p><p>Коментарий: ${text}</p></html>`,\n                    alternative: true\n                }\n            ]\n        }, (err, mess)=>{\n            console.log(err, mess);\n            if (err) {\n                res.status(400).send();\n                return;\n            }\n            res.status(200).send();\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsTUFBTSxHQUFHLElBQUlELCtDQUFVLENBQUM7SUFDMUJFLElBQUksRUFBRSwyQkFBMkI7SUFDakNDLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUJDLElBQUksRUFBRSxnQkFBZ0I7SUFDdEJDLElBQUksRUFBRSxHQUFHO0lBQ1RDLEdBQUcsRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVhLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxHQUFHTCxHQUFHLENBQUNNLElBQUk7UUFDdENiLE1BQU0sQ0FBQ2MsSUFBSSxDQUNQO1lBQ0lDLElBQUksRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ25DQyxFQUFFLEVBQUUsNkJBQTZCO1lBQ2pDQyxPQUFPLEVBQUUsK0dBQXFCO1lBQ1pDLFVBQVIsRUFBRTtnQkFDUjtvQkFDSUMsSUFBSSxFQUFFLENBQUMsaUJBQWMsRUFBS1QsSUFBSSxDQUFDLHVCQUFnQixFQUFTQyxLQUFLLENBQUMsNkJBQW1CO29CQUN2RVMsV0FBVyxFQUFFLElBQUk7aUJBQ3BCO2FBQ0o7U0FDSixFQUNELENBQUNDLEdBQUcsRUFBRUMsSUFBSSxHQUFLO1lBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUlELEdBQUcsRUFBRTtnQkFDTGIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDWCxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsT0FBTzthQUNWO1lBQ0ROLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1gsSUFBSSxFQUFFLENBQUM7U0FDMUIsQ0FDSixDQUFDO0tBQ0w7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvZW1haWwuanM/ODkyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTTVRQQ2xpZW50IH0gZnJvbSAnZW1haWxqcyc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBTTVRQQ2xpZW50KHtcbiAgICB1c2VyOiAnemh1a29mZi5tYXgyMDE3QHlhbmRleC5ydScsXG4gICAgcGFzc3dvcmQ6ICdub3dmYWxtb2d3d3F2d2dnJyxcbiAgICBob3N0OiAnc210cC55YW5kZXgucnUnLFxuICAgIHBvcnQ6IDQ2NSxcbiAgICBzc2w6IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHBob25lLCB0ZXh0IH0gPSByZXEuYm9keTtcbiAgICAgICAgY2xpZW50LnNlbmQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJvbTogYDx6aHVrb2ZmLm1heDIwMTdAeWFuZGV4LnJ1PmAsXG4gICAgICAgICAgICAgICAgdG86ICc8emh1a29mZi5tYXgyMDE3QHlhbmRleC5ydT4nLFxuICAgICAgICAgICAgICAgIHN1YmplY3Q6ICfQktC+0L/RgNC+0YEg0YDRg9C60L7QstC+0LTQuNGC0LXQu9GOJyxcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50OiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGA8aHRtbD48cD7QmNC80Y86ICR7bmFtZX08L3A+PHA+0KLQtdC70LXRhNC+0L06ICR7cGhvbmV9PC9wPjxwPtCa0L7QvNC10L3RgtCw0YDQuNC5OiAke3RleHR9PC9wPjwvaHRtbD5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyLCBtZXNzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCBtZXNzKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiU01UUENsaWVudCIsImNsaWVudCIsInVzZXIiLCJwYXNzd29yZCIsImhvc3QiLCJwb3J0Iiwic3NsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJwaG9uZSIsInRleHQiLCJib2R5Iiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJhdHRhY2htZW50IiwiZGF0YSIsImFsdGVybmF0aXZlIiwiZXJyIiwibWVzcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/email.js\n");

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
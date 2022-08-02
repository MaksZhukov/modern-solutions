exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 8133:
/***/ ((module) => {

// Exports
module.exports = {
	"accordion": "Accordion_accordion__AUecm",
	"accordion_expanded": "Accordion_accordion_expanded__fe2bo",
	"accordion__header": "Accordion_accordion__header__CooYW",
	"accordion__content": "Accordion_accordion__content__Tnm6h"
};


/***/ }),

/***/ 5168:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__30ukX"
};


/***/ }),

/***/ 5302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8631);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_names__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8133);
/* harmony import */ var _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Accordion = ({ title , content  })=>{
    const { 0: isExpanded , 1: setIsExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleClickHeader = ()=>{
        setIsExpanded(!isExpanded);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: class_names__WEBPACK_IMPORTED_MODULE_1___default()((_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accordion), {
            [(_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accordion_expanded)]: isExpanded
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: handleClickHeader,
                className: (_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accordion__header),
                children: title
            }),
            isExpanded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accordion__content),
                children: content
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ 6065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8631);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_names__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5168);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ children , className , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        className: class_names__WEBPACK_IMPORTED_MODULE_1___default()((_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button), className),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;
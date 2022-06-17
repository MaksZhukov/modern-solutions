(() => {
var exports = {};
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 7276:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__30ukX"
};


/***/ }),

/***/ 1458:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__lvORT"
};


/***/ }),

/***/ 8783:
/***/ ((module) => {

// Exports
module.exports = {
	"textarea": "Textarea_textarea__ReAB6"
};


/***/ }),

/***/ 5902:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "contacts_title__7pXGr",
	"subtitle": "contacts_subtitle__JL9BR",
	"content__info": "contacts_content__info__oz6cG",
	"content": "contacts_content__2ygLK",
	"content__left": "contacts_content__left__tBT7o",
	"content__right": "contacts_content__right__fpg6O",
	"phone": "contacts_phone__CLKpn",
	"phone__text": "contacts_phone__text__9OU0N",
	"phone__tel": "contacts_phone__tel__6eO7E",
	"email__title": "contacts_email__title__ghKa_",
	"email__value": "contacts_email__value__jAdwB",
	"form": "contacts_form__5A5H5",
	"form__title": "contacts_form__title__7NjoI",
	"form__control": "contacts_form__control__YUd54",
	"form__policy": "contacts_form__policy__K8M12"
};


/***/ }),

/***/ 9486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8631);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_names__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7276);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ children , className , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        className: class_names__WEBPACK_IMPORTED_MODULE_1___default()((_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button), className),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 4088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contacts),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./layouts/Layout.jsx
var Layout = __webpack_require__(4526);
// EXTERNAL MODULE: ./pages/contacts/contacts.module.scss
var contacts_module = __webpack_require__(5902);
var contacts_module_default = /*#__PURE__*/__webpack_require__.n(contacts_module);
// EXTERNAL MODULE: ./components/Container/Container.jsx
var Container = __webpack_require__(5093);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Input/Input.module.scss
var Input_module = __webpack_require__(1458);
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);
;// CONCATENATED MODULE: ./components/Input/Input.jsx


const Input = ({ placeholder , value , onChange  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        className: (Input_module_default()).input,
        placeholder: placeholder,
        value: value,
        onChange: onChange,
        type: "text"
    });
};
/* harmony default export */ const Input_Input = (Input);

// EXTERNAL MODULE: ./components/Textarea/Textarea.module.scss
var Textarea_module = __webpack_require__(8783);
var Textarea_module_default = /*#__PURE__*/__webpack_require__.n(Textarea_module);
;// CONCATENATED MODULE: ./components/Textarea/Textarea.jsx


const Textarea = ({ placeholder , value , onChange , rows  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
        className: (Textarea_module_default()).textarea,
        placeholder: placeholder,
        value: value,
        rows: rows,
        onChange: onChange
    });
};
/* harmony default export */ const Textarea_Textarea = (Textarea);

// EXTERNAL MODULE: ./components/Button/Button.jsx
var Button = __webpack_require__(9486);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/contacts/index.js









function Contacts() {
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)("");
    const { 0: comment , 1: setComment  } = (0,external_react_.useState)("");
    const handleSubmit = async ()=>{
        await external_axios_default().post("api/email", {
            name,
            phone,
            text: comment
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (contacts_module_default()).title,
                    children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (contacts_module_default()).subtitle,
                    children: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 1C \u043D\u0430 \u0412\u0430\u043C\u0435\u043C \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0438"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (contacts_module_default()).content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (contacts_module_default()).content__left,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (contacts_module_default()).phone,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (contacts_module_default()).phone__text,
                                            children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:+375257402263",
                                            className: (contacts_module_default()).phone__tel,
                                            children: "+375 (25) 740-22-63"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: (contacts_module_default()).phone__img,
                                            src: "phone.jpg",
                                            alt: "Phone"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (contacts_module_default()).email,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (contacts_module_default()).email__title,
                                            children: "E-MAIL:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "mailto:it-cooperation@yandex.by",
                                            className: (contacts_module_default()).email__value,
                                            children: [
                                                "it-cooperation",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "@"
                                                }),
                                                "yandex.by"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (contacts_module_default()).content__right,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (contacts_module_default()).form,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (contacts_module_default()).form__title,
                                        children: "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044E"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (contacts_module_default()).form__control,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Input_Input, {
                                            onChange: ({ target: { value  }  })=>setName(value)
                                            ,
                                            placeholder: "\u0418\u043C\u044F"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (contacts_module_default()).form__control,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Input_Input, {
                                            onChange: ({ target: { value  }  })=>setPhone(value)
                                            ,
                                            placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (contacts_module_default()).form__control,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Textarea_Textarea, {
                                            onChange: ({ target: { value  }  })=>setComment(value)
                                            ,
                                            placeholder: "\u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                                            rows: "10"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (contacts_module_default()).form__policy,
                                        children: '\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 "\u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443" \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.'
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (contacts_module_default()).form__control,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            onClick: handleSubmit,
                                            children: "\u041F\u041E\u0414\u0410\u0422\u042C \u0417\u0410\u042F\u0412\u041A\u0423"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
async function getStaticProps() {
    return {
        props: {}
    };
}


/***/ }),

/***/ 8631:
/***/ ((module) => {

"use strict";
module.exports = require("class-names");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,526], () => (__webpack_exec__(4088)));
module.exports = __webpack_exports__;

})();
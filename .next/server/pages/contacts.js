(() => {
var exports = {};
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 5168:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__30ukX"
};


/***/ }),

/***/ 6488:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__lvORT"
};


/***/ }),

/***/ 1049:
/***/ ((module) => {

// Exports
module.exports = {
	"textarea": "Textarea_textarea__ReAB6"
};


/***/ }),

/***/ 6233:
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
	"form__policy": "contacts_form__policy__K8M12",
	"success": "contacts_success__QRJzk",
	"error": "contacts_error__mv_rG"
};


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


/***/ }),

/***/ 4240:
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
var Layout = __webpack_require__(9470);
// EXTERNAL MODULE: ./pages/contacts/contacts.module.scss
var contacts_module = __webpack_require__(6233);
var contacts_module_default = /*#__PURE__*/__webpack_require__.n(contacts_module);
// EXTERNAL MODULE: ./components/Container/Container.jsx
var Container = __webpack_require__(6416);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Input/Input.module.scss
var Input_module = __webpack_require__(6488);
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
var Textarea_module = __webpack_require__(1049);
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
var Button = __webpack_require__(6065);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/contacts/index.js









function Contacts() {
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)("");
    const { 0: comment , 1: setComment  } = (0,external_react_.useState)("");
    const { 0: emailStatus , 1: setEmailStatus  } = (0,external_react_.useState)("");
    const handleSubmit = async ()=>{
        try {
            await external_axios_default().post("api/email", {
                name,
                phone,
                text: comment
            });
            setEmailStatus("success");
        } catch (err) {
            setEmailStatus("error");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (contacts_module_default()).title,
                children: "Контакты"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (contacts_module_default()).subtitle,
                children: "Позвоните или напишите нам, чтобы узнать больше о внедрении продуктов 1C на Вамем предприятии"
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
                                        children: "Телефон:"
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
                        children: emailStatus === "success" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (contacts_module_default()).success,
                            children: "Вопрос был отправлен руководителю"
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (contacts_module_default()).form,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (contacts_module_default()).form__title,
                                    children: "Задать вопрос руководителю"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (contacts_module_default()).form__control,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Input_Input, {
                                        onChange: ({ target: { value  }  })=>setName(value),
                                        placeholder: "Имя"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (contacts_module_default()).form__control,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Input_Input, {
                                        onChange: ({ target: { value  }  })=>setPhone(value),
                                        placeholder: "Телефон"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (contacts_module_default()).form__control,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Textarea_Textarea, {
                                        onChange: ({ target: { value  }  })=>setComment(value),
                                        placeholder: "Ваш комментарий",
                                        rows: "10"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (contacts_module_default()).form__policy,
                                    children: 'Нажимая на кнопку "Подать заявку" вы соглашаетесь на обработку персональных данных.'
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (contacts_module_default()).form__control,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        onClick: handleSubmit,
                                        children: "ПОДАТЬ ЗАЯВКУ"
                                    })
                                }),
                                emailStatus === "error" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (contacts_module_default()).error,
                                    children: [
                                        "Ошибка отправки письма, обратитесь на почту",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: (contacts_module_default()).email__value,
                                            href: "mailto:it-cooperation@yandex.by",
                                            children: "it-cooperation@yandex.by"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

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

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ }),

/***/ 6135:
/***/ ((module) => {

"use strict";
module.exports = require("use-onclickoutside");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,470], () => (__webpack_exec__(4240)));
module.exports = __webpack_exports__;

})();
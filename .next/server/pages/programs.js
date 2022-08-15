(() => {
var exports = {};
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 5168:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__30ukX"
};


/***/ }),

/***/ 4110:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "programs_title__nt7_O",
	"programs__item": "programs_programs__item__yLmRf",
	"programs__img": "programs_programs__img__zoDYS",
	"programs__content": "programs_programs__content___L8LR"
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

/***/ 517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Programs),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6065);
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6416);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9470);
/* harmony import */ var _programs_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4110);
/* harmony import */ var _programs_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_programs_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const programs = [
    {
        name: "1С:Бухгалтерия 8 для Беларуси",
        description: "\xab1С:Бухгалтерия 8\xbb — это профессиональный инструмент для ведения учета, подготовки и сдачи обязательной отчетности. \n Понятный учет в соответствии с законодательством Республики Беларусь потребностями бизнеса, экономия времени при проведении расчетов с контрагентами, оформлении документов и хозяйственных операций, эффективная поддержка пользователей в сочетании с высоким комфортом работы — лишь некоторые ключевые особенности \xab1С:Бухгалтерии 8\xbb.",
        url: "program-bookkeeping.webp",
        href: "programs/accounting"
    },
    {
        name: "1С:Управление торговлей для Беларуси",
        description: "Прикладное решение \xab1С:Управление торговлей для Беларуси\xbb предназначено для ведения оперативного и управленческого учета, включая управление продажами, поставками, заказами, товарооборотом и другими процессами, связанными с хозяйственной деятельностью предприятия. Продукт позволяет планировать деятельность компании, проводить анализ и отслеживать динамику реализации.",
        url: "program-manage-trade.webp",
        href: "programs/trade-management"
    },
    {
        name: "1С:Управление компанией для Беларуси",
        description: "Продукт позволяет автоматизировать типовые процессы предприятий оптовой и розничной торговли (не сетевых магазинах, использующих несколько касс), интернет-магазинов и компаний сферы услуг, подрядных организаций и небольших производственных компаний.",
        url: "program-manage-company.webp",
        href: "programs/company-management"
    },
    {
        name: "1С:Розница для Беларуси",
        description: "\xab1С:Розница 8 для Беларуси\xbb помогает комплексно автоматизировать все основные бизнес-процессы как отдельного магазина, так и розничной сети. Программа подходит для работы с торговым оборудованием и системами маркировки, настраивается индивидуально под задачи любой сферы торговли и помогает повысить эффективность работы магазина.",
        url: "program-retail.webp",
        href: "programs/retail"
    }
];
function Programs() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_programs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                children: "Используемые нами типовые решения 1С"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_programs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().programs),
                children: programs.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_programs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().programs__item),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_programs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().programs__img),
                                src: item.url,
                                alt: item.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_programs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().programs__content),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_programs_module_scss__WEBPACK_IMPORTED_MODULE_5___default().programs__desc),
                                        children: item.description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: item.href,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: "Подробнее"
                                        })
                                    })
                                ]
                            })
                        ]
                    }, item.name))
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
var __webpack_exports__ = __webpack_require__.X(0, [952,61,470], () => (__webpack_exec__(517)));
module.exports = __webpack_exports__;

})();
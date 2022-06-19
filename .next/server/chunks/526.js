exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 7512:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__B3zyu"
};


/***/ }),

/***/ 840:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Layout_header__nK_1B",
	"header__content": "Layout_header__content__BNmDp",
	"main": "Layout_main__SOsyQ",
	"logo-menu-container": "Layout_logo-menu-container__jE8K4",
	"logo": "Layout_logo__46N8m",
	"logo__text": "Layout_logo__text__flvhY",
	"logo__img": "Layout_logo__img__6laYb",
	"list": "Layout_list__cihU_",
	"list__item": "Layout_list__item___ii4j",
	"list__item_active": "Layout_list__item_active__dwxBQ",
	"list_closed": "Layout_list_closed__lOYcR",
	"contacts": "Layout_contacts__WBxxj",
	"contacts__link": "Layout_contacts__link__F4Utu",
	"footer": "Layout_footer__oMKej",
	"menu-button-container": "Layout_menu-button-container__pIcil",
	"menu-button": "Layout_menu-button__W0_xY",
	"menu-button_active": "Layout_menu-button_active__kvcYb"
};


/***/ }),

/***/ 5093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8631);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_names__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7512);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Container_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Container = ({ children , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: class_names__WEBPACK_IMPORTED_MODULE_1___default()((_Container_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container), className),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 4526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(840);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5093);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var use_onclickoutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6135);
/* harmony import */ var use_onclickoutside__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_onclickoutside__WEBPACK_IMPORTED_MODULE_7__);









const menu = [
    {
        path: "/",
        name: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
    },
    {
        path: "/programs",
        name: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"
    },
    {
        path: "/prices",
        name: "\u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442"
    },
    {
        path: "/services",
        name: "\u0423\u0441\u043B\u0443\u0433\u0438"
    },
    {
        path: "/contacts",
        name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
    },
    {
        path: "/reviews",
        name: "\u041E\u0442\u0437\u044B\u0432\u044B"
    }, 
];
function Layout({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const { 0: isOpenedMobileMenu , 1: setIsOpenedMobileMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const handleClickOutside = ()=>{
        setIsOpenedMobileMenu(false);
    };
    use_onclickoutside__WEBPACK_IMPORTED_MODULE_7___default()(ref, handleClickOutside);
    const handleClickMobileMenu = ()=>{
        setIsOpenedMobileMenu(!isOpenedMobileMenu);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header__content),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["logo-menu-container"]),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: "/logo.jpg",
                                            width: 256,
                                            height: 36,
                                            alt: "Logo",
                                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo__img)
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: handleClickMobileMenu,
                                    className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["menu-button-container"]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["menu-button"]), {
                                            [(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["menu-button_active"])]: isOpenedMobileMenu
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        ref: ref,
                                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().list), {
                                            [(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().list_closed)]: !isOpenedMobileMenu
                                        }),
                                        children: menu.map((item)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().list__item), {
                                                    [(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().list__item_active)]: router.pathname == item.path
                                                }),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: item.path,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["list__item-content"]),
                                                        children: item.name
                                                    })
                                                })
                                            }, item.path);
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contacts),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contacts__link),
                                    href: "tel:+375257402263",
                                    children: "+375 (25) 740-22-63"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contacts__link),
                                    href: "mailto:it-cooperation@yandex.by",
                                    children: "it-cooperation@yandex.by"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main),
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer__content),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().about),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().about__title),
                                children: "\u041E \u041D\u0410\u0421"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().about__description),
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum quod quis amet autem consectetur voluptatibus et ut aspernatur sequi ducimus atque voluptate laudantium, eaque odit quo hic rem cumque."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().about__reg),
                                children: "\u0412 \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u043C \u0440\u0435\u0435\u0441\u0442\u0440\u0435 \u0441 17 \u043C\u0430\u044F 2017, \u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0433\u043E\u0441. \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u2116191646728, 20.12.2011 \u0432\u044B\u0434\u0430\u043D\u043E \u041C\u0438\u043D\u0433\u043E\u0440\u0438\u0441\u043F\u043E\u043B\u043A\u043E\u043C\u043E\u043C"
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ })

};
;
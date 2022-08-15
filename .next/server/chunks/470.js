exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 8989:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__B3zyu"
};


/***/ }),

/***/ 2652:
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
	"footer__content": "Layout_footer__content__YsKB3",
	"footer__col": "Layout_footer__col__Z2Ahh",
	"menu-button-container": "Layout_menu-button-container__pIcil",
	"menu-button": "Layout_menu-button__W0_xY",
	"menu-button_active": "Layout_menu-button_active__kvcYb"
};


/***/ }),

/***/ 6416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8631);
/* harmony import */ var class_names__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_names__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8989);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Container_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Container = ({ children , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: class_names__WEBPACK_IMPORTED_MODULE_1___default()((_Container_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container), className),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 9470:
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
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2652);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6416);
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
        name: "Главная"
    },
    {
        path: "/programs",
        name: "Программы"
    },
    {
        path: "/prices",
        name: "Прайс-лист"
    },
    {
        path: "/services",
        name: "Услуги"
    },
    {
        path: "/contacts",
        name: "Контакты"
    },
    {
        path: "/reviews",
        name: "Отзывы"
    }, 
];
function Layout({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const { 0: isOpenedMobileMenu , 1: setIsOpenedMobileMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const twoLevelPath = router.pathname.split("/").length === 3;
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
                                            src: `${twoLevelPath ? ".." : ""}/logo.jpg`,
                                            width: 256,
                                            height: 36,
                                            alt: "Logo",
                                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo__img)
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                    ref: ref,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: handleClickMobileMenu,
                                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["menu-button-container"]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["menu-button"]), {
                                                    [(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["menu-button_active"])]: isOpenedMobileMenu
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
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
                                    ]
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
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer__content),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer__col),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "ОРГАНИЗАЦИЯ "
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "Наименование организации: Индивидуальный предприниматель Жлобо Андрей Игоревич, ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "УНП: 692076880, ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " Юридический адрес организации: Минская обл., ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " Минский р-н., д. Пильница, ул. Центральная, д. 6, ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " ",
                                        "Индивидуальный предприниматель: Жлобо Андрей Игоревич, ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " БИК банка: UNBSBY2X, IBAN: BY48UNBS30131441300000001933, ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        ' Банк: ЗАО "БСБ Банк".'
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer__col),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "О НАС"
                                }),
                                "В торговом реестре с 17 мая 2017,",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Свидетельство о гос. регистрации №191646728,",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "20.12.2011 выдано Мингорисполкомом ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Все права защищены \xa9 2017-",
                                new Date().getFullYear()
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer__col),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: "КОНТАКТЫ"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "Руководитель: Жлобо Андрей Игоревич",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contacts__link),
                                            href: "tel:+375257402263",
                                            children: "+375 (25) 740-22-63"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contacts__link),
                                            href: "mailto:it-cooperation@yandex.by",
                                            children: "it-cooperation@yandex.by"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ })

};
;
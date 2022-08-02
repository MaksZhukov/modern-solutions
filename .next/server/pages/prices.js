(() => {
var exports = {};
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 6390:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "Table_table__svHvy",
	"table__head": "Table_table__head___2SIu",
	"table__cell": "Table_table__cell__nOvMq",
	"table__cell_right": "Table_table__cell_right__u7cxT"
};


/***/ }),

/***/ 4681:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "prices_title__hoH4q",
	"last-table": "prices_last-table__y66WH"
};


/***/ }),

/***/ 9725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Prices),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Container/Container.jsx
var Container = __webpack_require__(6416);
// EXTERNAL MODULE: ./layouts/Layout.jsx
var Layout = __webpack_require__(9470);
// EXTERNAL MODULE: ./pages/prices/prices.module.scss
var prices_module = __webpack_require__(4681);
var prices_module_default = /*#__PURE__*/__webpack_require__.n(prices_module);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Table/Table.module.scss
var Table_module = __webpack_require__(6390);
var Table_module_default = /*#__PURE__*/__webpack_require__.n(Table_module);
;// CONCATENATED MODULE: ./components/Table/Table.jsx




const Table = ({ columns , data , className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
        className: external_classnames_default()((Table_module_default()).table, className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                className: (Table_module_default()).table__head,
                children: /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                    children: columns.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: external_classnames_default()((Table_module_default()).table__cell, {
                                [(Table_module_default()).table__cell_right]: item.align === "right"
                            }),
                            children: item.name
                        }, item.name))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                children: data.map((item, indexItem)=>{
                    let values = Object.values(item);
                    return /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                        children: values.map((value, index)=>{
                            let { width , align  } = columns[index];
                            return /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                width: width,
                                className: external_classnames_default()((Table_module_default()).table__cell, {
                                    [(Table_module_default()).table__cell_right]: align === "right"
                                }),
                                children: typeof value === "number" ? value.toFixed(2) : value
                            }, value);
                        })
                    }, indexItem);
                })
            })
        ]
    });
};
/* harmony default export */ const Table_Table = (Table);

;// CONCATENATED MODULE: ./pages/prices/index.js







function Prices() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (prices_module_default()).title,
                children: "Прайс-лист"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Table_Table, {
                columns: [
                    {
                        name: "Программы"
                    },
                    {
                        name: "Цена руб.коп.",
                        width: 150,
                        align: "right"
                    }, 
                ],
                data: config/* programs */.O2
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Table_Table, {
                columns: [
                    {
                        name: "Лицензии на рабочие места"
                    },
                    {
                        name: "Цена руб.коп.",
                        width: 150,
                        align: "right"
                    }, 
                ],
                data: config/* workPlaceLicenses */.Ny
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Table_Table, {
                columns: [
                    {
                        name: "Лицензии на сервер"
                    },
                    {
                        name: "Цена руб.коп.",
                        width: 150,
                        align: "right"
                    }, 
                ],
                data: config/* serverLicenses */.Lo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Table_Table, {
                className: (prices_module_default())["last-table"],
                columns: [
                    {
                        name: "Сервисы ИТС"
                    },
                    {
                        name: "Цена руб.коп.",
                        width: 150,
                        align: "right"
                    }, 
                ],
                data: config/* servicesITS */.uD
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
var __webpack_exports__ = __webpack_require__.X(0, [952,61,470,838], () => (__webpack_exec__(9725)));
module.exports = __webpack_exports__;

})();
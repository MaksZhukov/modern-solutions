(() => {
var exports = {};
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 1248:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "Table_table__svHvy",
	"table__head": "Table_table__head___2SIu",
	"table__cell": "Table_table__cell__nOvMq",
	"table__cell_right": "Table_table__cell_right__u7cxT"
};


/***/ }),

/***/ 5844:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "prices_title__hoH4q",
	"table": "prices_table__EsFmG",
	"table__head": "prices_table__head__gvqn3",
	"table__cell": "prices_table__cell__tqBhl",
	"table__cell_center": "prices_table__cell_center__M99of"
};


/***/ }),

/***/ 6265:
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
var Container = __webpack_require__(5093);
// EXTERNAL MODULE: ./layouts/Layout.jsx
var Layout = __webpack_require__(4526);
// EXTERNAL MODULE: ./pages/prices/prices.module.scss
var prices_module = __webpack_require__(5844);
var prices_module_default = /*#__PURE__*/__webpack_require__.n(prices_module);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(3346);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Table/Table.module.scss
var Table_module = __webpack_require__(1248);
var Table_module_default = /*#__PURE__*/__webpack_require__.n(Table_module);
;// CONCATENATED MODULE: ./components/Table/Table.jsx




const Table = ({ columns , data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
        className: (Table_module_default()).table,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                className: (Table_module_default()).table__head,
                children: /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                    children: columns.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("td", {
                            className: external_classnames_default()((Table_module_default()).table__cell, {
                                [(Table_module_default()).table__cell_right]: item.align === "right"
                            }),
                            children: item.name
                        }, item.name)
                    )
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
    console.log("hello");
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (prices_module_default()).title,
                    children: "\u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Table_Table, {
                    columns: [
                        {
                            name: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"
                        },
                        {
                            name: "\u0426\u0435\u043D\u0430 \u0440\u0443\u0431.\u043A\u043E\u043F.",
                            width: 150,
                            align: "right"
                        }, 
                    ],
                    data: config/* programs */.O2
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Table_Table, {
                    columns: [
                        {
                            name: "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043C\u0435\u0441\u0442\u0430"
                        },
                        {
                            name: "\u0426\u0435\u043D\u0430 \u0440\u0443\u0431.\u043A\u043E\u043F.",
                            width: 150,
                            align: "right"
                        }, 
                    ],
                    data: config/* workPlaceLicenses */.Ny
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Table_Table, {
                    columns: [
                        {
                            name: "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440"
                        },
                        {
                            name: "\u0426\u0435\u043D\u0430 \u0440\u0443\u0431.\u043A\u043E\u043F.",
                            width: 150,
                            align: "right"
                        }, 
                    ],
                    data: config/* serverLicenses */.Lo
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Table_Table, {
                    columns: [
                        {
                            name: "\u0421\u0435\u0440\u0432\u0438\u0441\u044B \u0418\u0422\u0421"
                        },
                        {
                            name: "\u0426\u0435\u043D\u0430 \u0440\u0443\u0431.\u043A\u043E\u043F.",
                            width: 150,
                            align: "right"
                        }, 
                    ],
                    data: config/* servicesITS */.uD
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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,526,346], () => (__webpack_exec__(6265)));
module.exports = __webpack_exports__;

})();
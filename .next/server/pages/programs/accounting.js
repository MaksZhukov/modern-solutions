(() => {
var exports = {};
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 8453:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "accounting_title__t6_B2",
	"intro": "accounting_intro__8K_y_",
	"intro__left": "accounting_intro__left__Mlils",
	"desc": "accounting_desc__luQNQ",
	"desc__img": "accounting_desc__img__2lbwm"
};


/***/ }),

/***/ 9375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accounting),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5302);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6065);
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6416);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9470);
/* harmony import */ var _accounting_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8453);
/* harmony import */ var _accounting_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_accounting_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const functionalities = [
    {
        title: "Учет по документам",
        content: "Основным способом отражения хозяйственных операций в учете является ввод документов программы, соответствующих первичным бухгалтерским документам. Кроме того, допускается непосредственный ввод отдельных проводок."
    },
    {
        title: "Поддержка систем налогообложения",
        content: "В программе для коммерческих организаций поддерживается общая и специальные системы налогообложения."
    },
    {
        title: "Учет материально-производственных запасов",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Реализован учет товаров, материалов и готовой продукции. Поддерживаются следующие способы оценки материально-производственных запасов при их выбытии:",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "по средней себестоимости,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "по себестоимости первых по времени приобретения материально-производственных запасов (способ ФИФО)."
                        })
                    ]
                }),
                "Для поддержки способов оценки ФИФО на счетах учета материально-производственных запасов ведется партионный учет. Различные способы оценки могут применяться независимо для каждой организации. В бухгалтерском и налоговом учете организации способы оценки МПЗ совпадают."
            ]
        })
    },
    {
        title: "Складской учет",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "По складам может вестись количественный или количественно-суммовой учет. В первом случае оценка товаров и материалов для целей бухгалтерского и налогового учета не зависит от того, с какого склада они получены. Складской учет может быть отключен, если в нем нет необходимости.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "В информационной базе можно отразить результаты инвентаризации, которые автоматически сверяются с данными учета. На основании инвентаризации отражается выявление излишков и списание недостач."
            ]
        })
    },
    {
        title: "Учет торговых операций",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Автоматизирован учет операций поступления и реализации товаров и услуг. При продаже товаров выписываются счета на оплату, оформляются накладные, счета-фактуры. Все операции по оптовой торговле учитываются в разрезе договоров с покупателями и поставщиками. Для импортных товаров учитываются данные о стране происхождения и номере таможенной декларации.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Для розничной торговли поддерживается как оперативное отражение розничной реализации, так и отражение продаж по результатам инвентаризации. Товары в рознице могут учитываться по покупным или по продажным ценам. Для розничных продаж поддерживается оплата банковскими кредитами и использование платежных карт.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Автоматизировано отражение возвратов товаров от покупателя.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "В конфигурации поддерживается использование нескольких типов цен, например: оптовая, мелкооптовая, закупочная и т. п. Это упрощает отражение операций поступления и реализации."
            ]
        })
    },
    {
        title: "Учет комиссионной торговли",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Автоматизирован учет комиссионной торговли как в отношении товаров, взятых на комиссию (у комитента), так и переданных для дальнейшей реализации (комиссионеру). Поддерживается отражение операций по передаче товаров на субкомиссию. При формировании отчета комитенту или регистрации отчета комиссионера можно сразу произвести расчет и отразить удержание комиссионного вознаграждения.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "В дополнение к комиссионной торговле товарами в программе поддерживается учет по агентским договорам на продажу и на закупку.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Автоматизирован учет продажи товаров и услуг через агента. Автоматизирован учет агентских услуг со стороны агента (оказание услуг от своего имени, но за счет принципала) и со стороны принципала (оказание услуг через агента).",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Автоматизирован учет операций по агентской закупке товаров и услуг, как на стороне агента, так и на стороне принципала. Учтена специфика оформления документов по учету НДС при таких операциях."
            ]
        })
    },
    {
        title: "Учет операций с тарой",
        content: "Автоматизированы операции по учету возвратной многооборотной тары. Учтена специфика налогообложения таких операций и расчетов с поставщиками и покупателями."
    },
    {
        title: "Учет банковских и кассовых операций",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Реализован учет движения наличных и безналичных денежных средств и валютных операций. Поддерживается ввод и печать платежных поручений и требований, приходных и расходных кассовых ордеров в национальной и иностранных валютах.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                'Учет движения безналичных денежных средств и валютных операций реализован следующим образом: прежде всего, формируется документ "Платежное поручение" или "Платежное требование", которые не формируют проводок, а служат для печати платежных инструкций и подготовки передачи документов в программу "Клиент банка", затем на основании документов "Платежное поручение" или "Платежное требование" отражаются документы поступления или списания с банковского счета.',
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "На основании кассовых документов формируется кассовая книга установленного образца.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Автоматизированы операции по расчетам с поставщиками, покупателями и подотчетными лицами (включая перечисление денежных средств на банковские карты сотрудников или корпоративные банковские карты), внесение наличных на расчетный счет и получение наличных по денежному чеку, приобретение, продажа и конверсия иностранной валюты. При отражении операций суммы платежей автоматически разбиваются на аванс и оплату."
            ]
        })
    },
    {
        title: "Учет расчетов с контрагентами",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "На счетах расчетов с контрагентами ведется аналитический учет в разрезе контрагентов, договоров, документов расчетов. Поддерживается автоматический зачет аванса как по договору в целом, так и по конкретному документу взаиморасчетов. Способ погашения задолженности по договору можно указать непосредственно в документах оплаты. Способ зачета авансов указывается в документах поступления и реализации.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Учет расчетов с поставщиками и покупателями можно вести в рублях, условных единицах и иностранной валюте. Курсовые разницы по каждой операции рассчитываются автоматически."
            ]
        })
    },
    {
        title: "Учет основных средств и нематериальных активов",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Автоматизированы основные операции по учету основных средств: поступление, принятие к учету, начисление амортизации, модернизация, переоценка, передача, списание, инвентаризация. Возможно распределение сумм начисленной амортизации за месяц в учете между несколькими счетами или объектами аналитического учета.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Поддерживается учет нематериальных активов и НИОКТР: поступление, принятие к учету, начисление амортизации, передача, списание."
            ]
        })
    },
    {
        title: "Учет основного и вспомогательного производства",
        content: "Автоматизирован расчет себестоимости продукции и услуг, выпускаемых основным и вспомогательным производством, учет переработки давальческого сырья, учет спецодежды, спецоснастки, временных сооружений, инвентаря и хозяйственных принадлежностей. В течение месяца учет выпущенной готовой продукции ведется по плановой себестоимости. В конце месяца рассчитывается фактическая себестоимость выпущенной продукции и оказанных услуг."
    },
    {
        title: "Учет полуфабрикатов",
        content: "Для сложных технологических процессов, предполагающих промежуточные стадии с выпуском полуфабрикатов, поддерживается складской учет полуфабрикатов и автоматический расчет их себестоимости."
    },
    {
        title: "Учет косвенных расходов",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "В программе предоставляется возможность учета косвенных расходов. В конце месяца производится автоматическое списание косвенных расходов.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                'Для учета общехозяйственных затрат поддерживается применение метода "директ-костинг". Этот метод предусматривает, что общехозяйственные затраты списываются в месяце их возникновения и полностью относятся на расходы текущего периода.',
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "При списании общепроизводственных затрат производства возможно применение различных методов распределения по номенклатурным группам продукции (услуг). Для косвенных расходов возможны различные базы распределения."
            ]
        })
    },
    {
        title: "Учет НДC",
        content: "Автоматизировано заполнение книги покупок и налоговой декларации по НДС, выставление электронных счетов-фактур по НДС. Для целей учета НДС ведется раздельный учет операций, облагаемых НДС и не подлежащих налогообложению. Отслеживаются сложные хозяйственные ситуации в учете НДС при реализации с применением ставки НДС 0%, а также при исполнении организацией по уплате НДС за нерезидента."
    },
    {
        title: "Учет заработной платы и персонифицированный учет",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "В программе ведется учет расчетов с персоналом по заработной плате. Обеспечивается формирование печатных форм для кадрового учета.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Автоматизированы следующие операции:",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "начисление зарплаты работникам предприятия по окладу с возможностью указать способ отражения в учете отдельно для каждого вида начисления;"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "учет удержаний;"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "ведение взаиморасчетов с работниками вплоть до выплаты зарплаты;"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "депонирование;"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "исчисление регламентированных законодательством налогов и взносов, облагаемой базой которых служит заработная плата работников организаций;"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "формирование соответствующих отчетов (по подоходному налогу, отчислениям (взносам) с ФОТ), включая подготовку отчетности для системы персонифицированного учета."
                        })
                    ]
                }),
                "При выполнении расчетов учитывается наличие на предприятии налоговых нерезидентов."
            ]
        })
    },
    {
        title: "Налоговый учет по налогу на прибыль",
        content: "Налоговый учет по налогу на прибыль ведется на тех же счетах, что и бухгалтерский учет. Это упрощает сопоставление данных бухгалтерского и налогового учета и выполнение требований по ведению налогового учета. Формируются регистры налогового учета. По данным налогового учета автоматически формируется налоговая декларация по налогу на прибыль."
    },
    {
        title: "Завершающие операции месяца",
        content: "Автоматизированы регламентные операции, выполняемые по окончании месяца, в том числе переоценка валюты, списание расходов будущих периодов, определение финансовых результатов и другие. Помощник закрытия месяца позволяет определить необходимые регламентные операции закрытия месяца и выполнить их в правильной последовательности и без ошибок. В ходе выполнения регламентной операции выполняются дополнительные проверки корректности учета и в случае обнаружения учетных ошибок выводятся сообщения с подробным описанием ошибки, указанием документов или настроек, которые потребуется изменить для решения проблемы."
    },
    {
        title: "Стандартные отчеты",
        content: "Конфигурация предоставляет пользователю набор стандартных отчетов, которые позволяют анализировать данные по остаткам, оборотам счетов и по проводкам в самых различных разрезах. При формировании отчетов есть возможность настройки группировки, отбора и сортировки информации, выводимой в отчет, исходя из специфики деятельности организации и выполняемых пользователем функций."
    },
    {
        title: "Регламентированная отчетность",
        content: "В программу включены обязательные (регламентированные) отчеты, предназначенные для представления собственникам организации и контролирующим государственным органам, включая формы бухгалтерской отчетности, налоговые декларации, отчеты для государственных фондов."
    },
    {
        title: "Сервисные возможности",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Программа также включает следующие сервисные возможности:",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "полнотекстовый поиск данных – поиск произвольного текста по всем объектам конфигурации (документам, справочникам и т. д.);"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "загрузка курса валют из Интернета;"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "загрузка классификаторов (адресных, основных средств и пр.) и другие."
                        })
                    ]
                })
            ]
        })
    }
];
function Accounting() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_accounting_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                children: "1С:Бухгалтерия 8 для Беларуси"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_accounting_module_scss__WEBPACK_IMPORTED_MODULE_5___default().intro),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_accounting_module_scss__WEBPACK_IMPORTED_MODULE_5___default().intro__left),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "../program-bookkeeping.webp",
                            alt: "Бухгалтерия 1с"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_accounting_module_scss__WEBPACK_IMPORTED_MODULE_5___default().intro__right),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    " ",
                                    "\xab1С:Бухгалтерия 8\xbb — это профессиональный инструмент для ведения учета, подготовки и сдачи обязательной отчетности.",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Понятный учет в соответствии с законодательством Республики Беларусь потребностями бизнеса, экономия времени при проведении расчетов с контрагентами, оформлении документов и хозяйственных операций, эффективная поддержка пользователей в сочетании с высоким комфортом работы — лишь некоторые ключевые особенности \xab1С:Бухгалтерии 8\xbb."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_accounting_module_scss__WEBPACK_IMPORTED_MODULE_5___default().desc),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Описание"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_accounting_module_scss__WEBPACK_IMPORTED_MODULE_5___default().desc__img),
                        src: "../accounting-belarus.png",
                        alt: "Бухгалтерия"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Конфигурация может использоваться в любой коммерческой структуре, вне зависимости от рода деятельности и масштаба — от небольших предприятий до многопрофильных холдингов. \xab1С:Бухгалтерия 8\xbb позволяет вести учет в компаниях, занимающихся оптовой, розничной, комиссионной и Интернет-торговлей, выполнением подрядных работ, оказанием профессиональных и бытовых услуг, производством."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Состав счетов, организация аналитического, валютного, количественного учета на счетах соответствуют требованиям законодательства Республики Беларуси по ведению бухгалтерского учета и отражению данных в отчетности. При необходимости пользователи могут самостоятельно создавать дополнительные субсчета и разрезы аналитического учета."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "План счетов в конфигурации реализован в соответствии с национальными стандартами бухгалтерского учета Республики Беларусь и международными стандартами финансовой отчетности."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "В программе предусмотрена гибкая настройка под индивидуальные особенности бизнеса и принятые в компании принципы учета. Программа позволяет создавать новые справочники и изменять формы документов, текстовых, табличных и графических отчетов."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_blank",
                href: "http://by.demo.1c.eu/accounting",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: "Демо-версия конфигурации"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Функционал"
            }),
            functionalities.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    title: item.title,
                    content: item.content
                }, item.title))
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,470,122], () => (__webpack_exec__(9375)));
module.exports = __webpack_exports__;

})();
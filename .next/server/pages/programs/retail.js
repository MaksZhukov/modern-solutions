(() => {
var exports = {};
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 6154:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "retail_title__zd2td",
	"intro": "retail_intro__5Ljot",
	"intro__left": "retail_intro__left__WyiAd"
};


/***/ }),

/***/ 5484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Retail),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5302);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6065);
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6416);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9470);
/* harmony import */ var _retail_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6154);
/* harmony import */ var _retail_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_retail_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const functionalities = [
    {
        title: "Учет себестоимости товаров",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "В конфигурации поддерживаются ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "следующие способы учета себестоимости"
                }),
                ":",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "упрощенный (автономный учет) — в качестве себестоимости признается цена последней закупки;"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "средняя взвешенная оценка (автономный учет) — рассчитывается по цене документов поступления за отчетный месяц."
                        })
                    ]
                }),
                "Себестоимость рассчитывается в разрезе магазинов. Для автономных способов учета себестоимости доступна опция настройки распределения дополнительных услуг, оказанных при поставке или перемещении товаров."
            ]
        })
    },
    {
        title: "Учет товародвижения",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Поддерживается учет операций с товарами:",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "заказ поставщику,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "заказ на перемещение,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "поступление от поставщика,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "реализация в розницу и мелким оптом,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "перемещение товаров между магазинами,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "перемещение между складами одного магазина,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "инвентаризация,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "оприходование,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "списание,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "передача между организациями."
                        })
                    ]
                }),
                "Документы поступления и реализации могут оформляться с использованием ордерной схемы в соответствии с настройками магазина.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Реализовано автоматическое распределение поступившего в магазин товара по отделам на основе предварительно сделанных настроек."
            ]
        })
    },
    {
        title: "Регистрация движения товаров в разрезе аналитики хозяйственной деятельности",
        content: "Конфигурация позволяет проводить анализ любых складских операций. Регистрация возвратов от покупателя и возврат поставщику, списание товара могут производиться с указанием причины производимого действия. Отчет по хозяйственным операциям предоставляет пользователю детальную информацию о размерах и причинах потерь при торговых операциях."
    },
    {
        title: "Управление ассортиментом сети",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "В программе предоставляется возможность управления мультиформатной сетью. Управление ассортиментом магазинов производится на уровне формата — совокупности магазинов со сходными характеристиками. Предоставляется возможность назначения плановых количественных показателей широты и глубины ассортимента и контроля исполнения закупок.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Поддерживается ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "управление жизненным циклом товара"
                }),
                " в сети: от момента начала закупок до выведения из ассортимента. Осуществляется контроль поступлений и продаж товаров, не включенных в ассортимент магазина."
            ]
        })
    },
    {
        title: "Назначение розничных цен",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "В конфигурации \xabРозница для Беларуси\xbb поддерживаются различные способы управления розничными ценами в торговой сети. Центральный офис сети может назначать розничные цены как для всей сети в целом, так и для групп магазинов или каждого магазина отдельно. На отдельные группы номенклатуры розничные цены могут также назначаться менеджером магазина.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "При вводе информации о поступлении товара пользователь может контролировать изменение цены закупки товара и принимать решение о назначении новой розничной цены. Система предоставляет удобный сервис расчета цены с учетом величины изменений цен закупки.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Реализовано ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "отложенное применение розничной цены"
                }),
                ", при котором можно применить назначенные в офисе новые цены для всей или части номенклатуры в любой технологически обусловленный момент времени.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "В конфигурации \xabРозница для Беларуси\xbb ценники и этикетки можно формировать и печатать как из документа ценообразования, так и из специального интерфейса."
            ]
        })
    },
    {
        title: "Анализ продаж и заказ поставщику",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Анализ продаж производится в указанных пользователем аналитических разрезах. Складской учет товарных остатков ведется как в разрезе товарных позиций, так и в разрезе характеристик товара. На основе анализа продаж и текущих остатков товаров в магазине пользователь может создать заказ поставщику, спланировать дату поступления товара и оплату поставки.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Предоставляется возможность формирования календаря наличных выплат из кассы магазина на основании плана оплат поставок и заявок на выплату. Контроль своевременности оплаты может производиться с помощью отчетов или визуально: символы просрочки поставки и оплаты выводятся в интерфейс программы."
            ]
        })
    },
    {
        title: "Контроль поставок по заказу поставщику",
        content: "Поступление товара может оформляться вручную на основе накладной поставщика или на основании заказа поставщику. В последнем случае пользователю представляется отчет об исполнительности поставщика, в котором для каждого поставщика выводится информация о расхождениях при поставке товара или несвоевременности поступления товара."
    },
    {
        title: "Заказы покупателя",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Предоставляется возможность регистрации заказов покупателей. Поддерживается резервирование товаров из остатков магазина, заказ недостающих товаров поставщику и на склад управляющей системы. Поддерживается продажа по заказу покупателя в режиме РМК (рабочего места кассира). Осуществляется контроль исполнения заказов, регистрация и анализ причины отказа покупателя от заказанного товара.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Предусмотрен ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "режим совместной работы"
                }),
                " розничного предприятия и интернет-магазина, при котором покупатель может заказать товар на сайте магазина и забрать покупку в одном из магазинов сети, указанных в качестве точки самовывоза. Оплата заказа производится на кассе магазина. Обмен с сайтом может производиться в ручном режиме или автоматически по расписанию, заданному для данного узла."
            ]
        })
    },
    {
        title: "Продажа в розницу",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Конфигурация \xabРозница для Беларуси\xbb предоставляет пользователю специализированный интерфейс рабочего места кассира (РМК) для оформления розничных продаж. Интерфейс РМК поддерживает работу в режиме тонкого и веб-клиента, адаптирован для использования на дисплеях небольшого размера, а также для работы с программируемой клавиатурой. Интерфейс РМК позволяет настроить только нужные кассиру операции и ограничить его возможности. Конфигурация позволяет кассиру регистрировать продажу товара на разные организации и печатать чеки на соответствующем организации фискальном регистраторе или принтере.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "В форме РМК в управляемом режиме добавлена форма подбора номенклатуры в табличную часть. Поддерживается контекстный поиск в списке номенклатуры по части наименования, кода, артикула, штрих кода и по полному коду SKU, опционально отображаются остатки товара на складах текущего магазина, резервы и розничные цены на выбранный в списке товар.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Предоставляется возможность протоколирования действий кассира в интерфейсе РМК. Протокол ведется в соответствии с предварительными настройками. Протоколируется ручное заполнение доступных полей, заполнение выбором из справочника, изменение значения, считывание с помощью оборудования, а также операции кассира, связанные с оформлением чека: аннулирование, откладывание и продолжение чека, пробитие и т. п.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Поддерживается учет различных видов оплаты: оплата наличными, платежной картой, банковским кредитом и подарочными сертификатами. Расширены возможности учета денежных средств: система позволяет учитывать денежные средства, внесенные в кассу ККМ для размена, и частичную выемку денежных средств из кассы ККМ. Поддерживается инкассирование денежных средств в банк из операционной кассы магазина."
            ]
        })
    },
    {
        title: "Управление скидками",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Конфигурация \xabРозница для Беларуси\xbb предоставляет широкие возможности управления скидками с установленной розничной цены в зависимости от различных условий:",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "количества товара в чеке,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "суммы чека,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "времени покупки,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "вида дисконтной карты покупателя,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "личных данных покупателя,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "процента от суммы по товарной строке,"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "при покупке набора товаров (\xabкупи-получи\xbb)."
                        })
                    ]
                }),
                "Условия предоставления скидки вынесены в отдельный справочник. Это позволяет предоставлять скидку при одновременном выполнении нескольких разнородных условий. Поддерживаются",
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "накопительные пороговые схемы"
                }),
                " как с заменой, так и без замены дисконтных карт покупателя при пересечении порога суммы покупок.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Скидки предоставляются в виде уменьшения суммы покупки или подарка. При выполнении условий можно настроить вывод сообщения кассиру на экран и реализовать запрет продаж алкоголя в определенное время. Поддержана функциональность ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "начисления бонусных баллов"
                }),
                " на счете бонусной карты покупателя при продаже и списания баллов при оплате последующей покупки. Поддерживается автоматическое начисление премиальных баллов по событиям, не связанным с продажей.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Поддерживается получение данных в режиме online о накоплениях по дисконтным картам и на бонусном счете посредством запросов к веб-сервису дисконтного сервера, расположенному в главном узле РИБ. В режиме РМК предоставляется возможность проверки накоплений покупателя при предъявлении карты. Поддерживается вывод в чек параметров скидки и бонусной программы.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "В программе предусмотрена возможность ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "настройки информационной рассылки"
                }),
                " о маркетинговых акциях по e-mail или SMS. Поддерживается формирование персональных сообщений по шаблону, в котором могут использоваться значения параметров информационной базы.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Реализован ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "учет подарочных сертификатов"
                }),
                " как простых, так и с серийными номерами. Поддерживается складской учет сертификатов, контроль продаж и оплат с помощью сертификатов. По завершении периода обращения сертификата возможна его повторная активация для участия в последующих акциях."
            ]
        })
    },
    {
        title: "Управление персоналом магазина",
        content: "Поддерживается планирование и регистрация фактического рабочего времени сотрудников магазина, а также оформление продаж с указанием продавца, обслужившего покупателя. Это позволяет контролировать работников и применять прозрачную систему мотивации продавцов."
    },
    {
        title: "Анализ деятельности предприятия",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                'В конфигурации " Розница для Беларуси\xbb формируется около 100 видов отчетов, которые позволяют контролировать процессы предприятия и анализировать результаты деятельности. Представлены абсолютные значения показателей за период, средние значения, динамика показателей с течением времени и относительные показатели эффективности торговых операций. Особое внимание уделено анализу продаж, как в разрезе товарных групп, так и групп покупателей, оценке эффективности применяемых скидок, распродаж.',
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Предоставляется возможность настройки рассылки пользователям отчетов, сформированных в соответствии с персональными настройками."
            ]
        })
    },
    {
        title: "Работа с торговым оборудованием",
        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Конфигурация \xabРозница для Беларуси\xbb позволяет работать с фискальными регистраторами, доступными на местном рынке, предоставляя в соответствии с законодательством все необходимые отчеты по кассовой смене.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "При формировании табличной части документов поддерживается работа с подключенным оборудованием — сканерами штрих кодов, терминалами сбора данных, весами.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Поддерживается работа и с другими видами используемого в розничной торговле оборудования: дисплеями покупателей, считывателями магнитных карт, а также оборудованием, работающим в режиме offline — кассами ККМ и весами с возможностью печати этикеток.",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "Поддерживается система генерации внутренних штрих-кодов для весовых и штучных товаров как на уровне сети в целом, так и для каждого магазина отдельно."
            ]
        })
    }
];
function Retail() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_retail_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                children: "1С:Розница 8 для Беларуси"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_retail_module_scss__WEBPACK_IMPORTED_MODULE_5___default().intro),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_retail_module_scss__WEBPACK_IMPORTED_MODULE_5___default().intro__left),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "../program-retail.webp",
                            alt: "Розница"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_retail_module_scss__WEBPACK_IMPORTED_MODULE_5___default().intro__right),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "\xab1С:Розница 8 для Беларуси\xbb помогает комплексно автоматизировать все основные бизнес-процессы как отдельного магазина, так и розничной сети. Программа подходит для работы с торговым оборудованием и системами маркировки, настраивается индивидуально под задачи любой сферы торговли и помогает повысить эффективность работы магазина."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Описание"
            }),
            "\xab1С:Розница 8\xbb позволяет автоматизировать управление розничной торговлей, а также оптимизировать следующие процессы:",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "приход товаров на склады магазинов;"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "реализация услуг и товаров контрагенту;"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "торговля комплектами товаров, которые могут быть созданы для продажи как заранее, так непосредственно в момент продажи;"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "перемещение товаров между внутренними складами магазинов, между магазинами, а также между складами и магазинами торгового предприятия;"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "инвентаризация товарных запасов;"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "возврат товаров от покупателей, в том числе после закрытия кассовой смены;"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "оформление чеков продажи, а также сводного отчета по кассовой машине с учетом возвращенных за смену товаров;"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "оформление приходно-расходных кассовых ордеров в магазинах;"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "перемещение денежных средств между внутренними кассами магазинов, магазинами сети, кассами и магазинами торгового предприятия;"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "использование дисконтных карт для предоставления процентных скидок (фиксированные и накопительные), скидок по контрагентам, с разделением скидок по магазинам, по времени действия, на сумму чека, по виду оплаты и по количеству товара."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Программа может применяться как автономно, в том числе в качестве кассовой программы, так и в связке с программами \xab1С:Бухгалтерия 8\xbb, \xab1С:Управление торговлей 8\xbb и \xab1С:Управление компанией\xbb."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Обмен данными с той или иной программой 1С настраивается под конкретные задачи. Например, совместное использование с программой \xab1С:Управление торговлей\xbb поддерживает централизованный заказ поставщику на всю торговую сеть и последующее снабжение магазинов с распределительного центра, помогает оперативно обмениваться информацией с центральным офисом и получать актуальные данные об остатках в каждом магазине."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "При настроенном обмене данных программы \xab1С:Розница 8\xbb с \xab1С:Бухгалтерией 8\xbb удобно контролировать работу кассиров, вести учет выручки и остатков товара в магазине, проверять и корректировать отчетную документацию и получать сводную информацию обо всех операциях и участках для оценки эффективности результатов работы."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_blank",
                href: "http://by.demo.1c.eu/retail",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: "Демо-версия конфигурации"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Функционал"
            }),
            functionalities.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    title: item.title,
                    content: item.content
                }))
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
var __webpack_exports__ = __webpack_require__.X(0, [952,61,470,122], () => (__webpack_exec__(5484)));
module.exports = __webpack_exports__;

})();
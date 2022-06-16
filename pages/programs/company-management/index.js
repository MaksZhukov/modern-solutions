import Accordion from '../../../components/Accordion/Accordion';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import Layout from '../../../layouts/Layout';
import styles from './company-management.module.scss';

const functionalities = [
	{
		title: 'Выполнение работ, оказание услуг, производство продукции',
		content: (
			<>
				«1С:Управление компанией для Беларуси» поддерживает управление
				процессами <b>производства продукции</b>,{' '}
				<b>выполнения работ, оказания услуг.</b>
				<br></br>
				<br></br>
				Управление данными о составе и технологии выполняемых работ и
				производимой продукции осуществляется с помощью спецификаций.
				<br></br>
				<br></br>
				<b>План-график производства</b> продукции формируется заказами
				на производство; план-график выполнения работ, оказания услуг —
				заказами на производство и заказами-нарядами.
				<br></br>
				<br></br>
				Планирование загрузки ресурсов предприятия осуществляется
				заказами на производство и заказами-нарядами.
				<br></br>
				<br></br>
				Регистрируемые заказы на производство имеют следующие
				особенности:
				<ul>
					<li>
						могут являться источниками обеспечения потребностей по
						заказам покупателей;
					</li>
					<li>
						по заказам на производство рассчитывается потребность в
						материалах и комплектующих;
					</li>
					<li>
						в открытых заказах на производство могут быть размещены
						потребности, образованные новыми заказами покупателей.
					</li>
				</ul>
				«1С:Управление компанией для Беларуси» позволяет регистрировать
				факт изготовления продукции. Выпуск может быть оформлен как в
				производственном подразделении, так и на складе (например,
				фасовка, сборка комплектов). Продукция числится за выпустившей
				ее структурной единицей и может быть перемещена в другую
				структурную единицу — например, на склад для последующей продажи
				или в следующий цех по технологическому маршруту.
				<br></br>
				<br></br>
				Факт выполнения работы (оказания услуги) и сдача ее заказчику
				отражаются актом выполненных работ, а также непосредственно в
				заказах-нарядах. Для подбора услуг и работ в документах можно
				использовать сканера штрихкодов.
				<br></br>
				<br></br>
				Для <b>планирования работ сотрудников</b> служат две функции:
				<ul>
					<li>
						сдельные наряды — используются для выдачи заданий на
						выполнение технологических операций производственного
						цикла исполнителям со сдельной оплатой труда; наряды
						могут быть индивидуальными и бригадными;
					</li>
					<li>
						задания на работу — используются для планирования
						загрузки сотрудников в рамках внутренних или внешних
						проектов.
					</li>
				</ul>
				Предусматривается регистрация фактических сведений о выполнении
				работ по нарядам и заданиям. Эта информация может быть
				использована в дальнейшем при расчете заработной платы, а также
				для оценки эффективности работы и проведения план-фактного
				анализа работы персонала.
				<br></br>
				<br></br>
				Для учета затрат предприятия и расчета фактической себестоимости
				поддерживаются следующие функции:
				<ul>
					<li>
						учет фактических затрат — ведется в необходимых разрезах
						в стоимостном и натуральном измерении;
					</li>
					<li>
						распределение материальных и нематериальных затрат,
						понесенных на выпуск, — может быть произведено как за
						указанный период, так и на основании конкретного
						документа выпуска;
					</li>
					<li>
						регламентный расчет фактической себестоимости выпуска
						при закрытии периода;
					</li>
					<li>
						отчет о себестоимости выпущенной продукции и выполненных
						работ.
					</li>
				</ul>
				Реализован простой механизм выполнения работ и оказания услуг в
				небольших фирмах с использованием заказов-нарядов (документов,
				совмещающих в себе функции заказа покупателя, счета на оплату,
				акта выполненных работ и расходной накладной для сферы сервисных
				услуг).
			</>
		),
	},
	{
		title: 'Маркетинг и продажи',
		content: (
			<>
				«1С:Управление компанией для Беларуси» поддерживает{' '}
				<b>
					ведение товарного ассортимента, цен и скидок предприятия,
					планирование продаж, а также работу с покупателями и
					заказчиками.
				</b>
				<br></br> <br></br>В программе автоматизированы операции с:
				<ul>
					<li>товарным ассортиментом;</li>
					<li>
						регистрацией и хранением номенклатуры товаров и услуг
						предприятия;
					</li>
					<li>
						регистрацией, хранением различных видов цен
						номенклатуры, прайс-листов предприятия;
					</li>
					<li>
						регистрацией видов скидок, наценок, дисконтных карт;
					</li>
					<li>
						установкой и изменением цены, расчетом цены по базовому
						виду цен, ценам номенклатуры или ценам контрагента,
						округлением, пересчетом цен с использованием
						настраиваемых формул.
					</li>
				</ul>
				Также в программе поддерживаются:
				<ul>
					<li>
						хранение способа расчета цены, поддержка динамических и
						расчетных цен;
					</li>
					<li>
						хранение формата для вида цен номенклатуры,
						используемого при выводе цены в прайс-лист;
					</li>
					<li>
						хранение информации о пользователе, изменившем цену
						номенклатуры.
					</li>
				</ul>
				<b>Планы продаж</b> могут формироваться в натуральном и
				стоимостном выражении и составляться по предприятию в целом или
				по отдельным подразделениям.
				<br></br>
				<br></br>
				Для <b>анализа эффективности</b> продаж формируется план-фактный
				анализ продаж по отдельным подразделениям, номенклатурным
				группам и товарам.
				<br></br>
				<br></br>
				Подготовка продаж и работа с клиентами в «1С:Управление
				компанией для Беларуси» осуществляются операциями:
				<ul>
					<li>
						регистрация и хранение контактной информации клиентов;
					</li>
					<li>регистрация договоров с покупателями;</li>
					<li>
						регистрация и хранение списка контактных лиц
						контрагентов и их контактной информации;
					</li>
					<li>
						регистрация событий при взаимодействии с покупателями и
						заказчиками — входящие и исходящие звонки, письма,
						встречи, массовые рассылки почты, sms и прочее;
					</li>
					<li>
						регистрация событий, заданий на работу и произвольных
						записей каждого сотрудника в персональном календаре;
					</li>
					<li>
						регистрация заказов покупателей (заказ фактически
						является спецификацией к договору, в котором отражены
						виды товаров, работ, сроки поставки/выполнения, а также
						стоимость);
					</li>
					<li>
						регистрация заказов-нарядов (заказ-наряд является
						одновременно документом планирования выполнения работ и
						оказания услуг, а также фактическим документом,
						подтверждающим факт выполнения работ, оказания услуг,
						продажи товаров, учета материальных и трудовых затрат);
					</li>
					<li>объединение заказов покупателей в проекты;</li>
					<li>
						формирование графика отгрузки товаров, выполнения работ,
						оказания услуг;
					</li>
					<li>
						обеспечение потребности в товарах, работах, услугах,
						образуемой заказами покупателей путем резервирования
						свободных остатков товаров на складах, размещения в
						заказах поставщикам и/или заказах на производство;
					</li>
					<li>
						отслеживание обеспечения заказа покупателя товарами,
						продукцией, работами и услугами.
					</li>
				</ul>
				В «1С:Управление компанией для Беларуси" поддерживаются
				следующие <b>схемы продаж</b>:
				<ul>
					<li>продажа со склада и под заказ;</li>
					<li>отгрузка в кредит или по предоплате;</li>
					<li>реализация товаров, принятых на комиссию;</li>
					<li>передача товаров на реализацию комиссионеру.</li>
				</ul>
				Документальное оформление продаж продукции, работ и услуг
				осуществляется товарными накладными или актами выполненных
				работ, а также в заказах-нарядах. На основании документов продаж
				формируются счета-фактуры.
			</>
		),
	},
	{
		title: 'Розничные продажи',
		content: (
			<>
				«1С:Управление компанией для Беларуси» может использоваться в
				автоматизированных и неавтоматизированных розничных торговых
				точках. Поддерживается ведение количественно-суммового или
				суммового учета.
				<br></br>
				<br></br>
				Предусмотрено формирование следующих отчетов:
				<ul>
					<li>
						отчет по движениям и остаткам товара в розничных ценах,
					</li>
					<li>отчет по продажам в розничных ценах.</li>
				</ul>
				Поддерживается подключение торгового оборудования, формирование
				и печать этикеток и ценников.
				<br></br>
				<br></br>
				Предусмотрено Рабочее Место Кассира (РМК). Профиль «Рабочее
				место кассира» содержит справочник номенклатуры и контрагентов,
				форму для работы с подбором и созданием чеков, а также все
				необходимые журналы для работы с розницей. Форма предназначена
				для быстрой и удобной регистрации продаж (в т. ч. по заказам),
				расчета сдачи, работы с возвратами и закрытия смены.
			</>
		),
	},
	{
		title: 'Снабжение и закупки',
		content: (
			<>
				«1С:Управление компанией для Беларуси» обеспечивает поддержку
				процесса управления запасами предприятия.
				<br></br>
				<br></br>
				Реализовано оперативное предоставление информации для
				определения и обеспечения внутренних и внешних потребностей в
				товарах и услугах: о наличии необеспеченных потребностей в
				товарно-материальных запасах, работах и услугах, о фактических
				закупках, об открытых заказах поставщикам и заказах на
				производство.
				<br></br>
				<br></br>
				Обеспечение потребностей осуществляется резервированием товаров
				в свободном остатке в местах хранения, а также размещением в
				заказах поставщикам и в заказах на производство.
				<br></br>
				<br></br>
				Для обеспечения процесса закупок товаров, услуг и работы с
				поставщиками автоматизированы операции:
				<ul>
					<li>регистрация поставщиков и контактной информации;</li>
					<li>
						хранение цен поставщиков и конкурентов, печать
						прайс-листа контрагента;
					</li>
					<li>хранение вида цен контрагента по договору;</li>
					<li>
						хранение информации о пользователе, изменившем цену
						номенклатуры контрагента;
					</li>
					<li>
						регистрация и хранение списка контактных лиц
						контрагентов и их контактной информации;
					</li>
					<li>
						регистрация событий при взаимодействии с поставщиками и
						подрядчиками — входящие и исходящие звонки, письма,
						встречи и прочее;
					</li>
					<li>
						оформление заказов поставщикам и контроль их исполнения;
					</li>
					<li>формирование графиков поставок;</li>
					<li>
						расчет потребностей в запасах, определение дефицита
						запасов, формирование рекомендаций на пополнение запасов
						путем формирования заказов на производство или заказов
						поставщикам.
					</li>
				</ul>
				Поступление товарно-материальных запасов на предприятие может
				отражаться по различным схемам:
				<ul>
					<li>поступление за плату от контрагента,</li>
					<li>приобретение подотчетным лицом,</li>
					<li>прием на реализацию от комиссионера,</li>
					<li>
						получение давальческого сырья и материалов в
						переработку.
					</li>
				</ul>
				Поддерживается функция регистрации поступления дополнительных
				расходов на приобретение товарно-материальных запасов.
			</>
		),
	},
	{
		title: 'Запасы и склад',
		content: (
			<>
				Для ведения учета запасов предприятия на множестве складов
				предусмотрены следующие возможности:
				<ul>
					<li>
						раздельный учет запасов — собственных товаров,
						материалов, продукции, а также товаров, принятых и
						переданных на комиссию, и материалов, принятых и
						переданных в переработку;
					</li>
					<li>
						учет произвольных характеристик номенклатуры (цвет,
						размер и т. д.), а также партий запасов;
					</li>
					<li>
						учет в разрезе ячеек мест хранения (зоны, стеллажи,
						полки и т. п.);
					</li>
					<li>
						перемещение запасов (между местами хранения, выдача в
						эксплуатацию и возврат из эксплуатации, списание на
						внутренние нужды);
					</li>
					<li>
						резервирование запасов (учет запасов и затрат в разрезе
						заказов покупателей);
					</li>
					<li>
						использование ордерной схемы учета запасов (приходные
						складские ордера, расходные складские ордера);
					</li>
					<li>печать этикеток и ценников.</li>
				</ul>
				Поддерживаются функции инвентаризации запасов и отражения
				результатов инвентаризации — оприходование и списание запасов.
				<br></br>
				<br></br>
				«1С:Управление компанией для Беларуси» обеспечивает поддержку
				процесса управления запасами предприятия.
				<br></br>
				<br></br>
				Поступление товарно-материальных запасов на предприятие может
				отражаться по различным схемам:
				<ul>
					<li>поступление за плату от контрагента,</li>
					<li>приобретение подотчетным лицом,</li>
					<li>прием на реализацию от комиссионера,</li>
					<li>
						получение давальческого сырья и материалов в
						переработку.
					</li>
				</ul>
				Поддерживается функция регистрации поступления дополнительных
				расходов на приобретение товарно-материальных запасов.
			</>
		),
	},
	{
		title: 'Денежные средства',
		content: (
			<>
				«1С:Управление компанией для Беларуси» позволяет вести учет
				денежных средств, а также формировать оперативный платежный
				календарь.
				<br></br>
				<br></br>
				Управление денежными средствами включает:
				<ul>
					<li>
						учет движения денежных средств в кассе и на банковских
						счетах,
					</li>
					<li>
						учет операций по платежным картам (операции эквайринга),
					</li>
					<li>оформление первичных документов по банку и кассе,</li>
					<li>расчеты с подотчетными лицами,</li>
					<li>формирование платежного календаря,</li>
					<li>интеграция с системой «Клиент банка»,</li>
					<li>
						учет полученных кредитов и выданных займов сотрудникам.
					</li>
				</ul>
				Реализовано Рабочее место «Банк и касса», для работы в одной
				форме с банковскими и кассовыми документами. В рабочем месте
				собраны все необходимые инструменты для удобной работы —
				добавления, поиска, выгрузки и фильтрации документов.
			</>
		),
	},
	{
		title: 'Внеоборотные активы',
		content: (
			<>
				«1С:Управление компанией для Беларуси» обеспечивает ведение
				учета имущества (внеоборотных активов) — основных средств и
				нематериальных активов организации:
				<ul>
					<li>принятие к учету, изменение параметров,</li>
					<li>расчет амортизации,</li>
					<li>продажа и списание.</li>
				</ul>
			</>
		),
	},
	{
		title: 'Финансы',
		content: (
			<>
				В программе «1С:Управление компанией Беларуси» реализована
				возможность ведения управленческого учета, получения
				управленческого баланса, формирования и анализа финансового
				результата. Для этих целей в системе предусмотрен управленческий
				план счетов и механизм формирования управленческих проводок
				документов.
				<br></br>
				<br></br>
				Благодаря наличию таких отчетов, как оборотно-сальдовая
				ведомость, денежные средства, доходы и расходы, прикладное
				решение позволяет формировать финансовую отчетность за
				произвольный период времени.
				<br></br>
				<br></br>
				Для учета доходов и расходов используется метод начисления либо
				метод начисления и кассовый метод.
				<br></br>
				<br></br>
				Аналитический учет доходов и расходов методом начисления ведется
				в разрезе направлений деятельности, подразделений, заказов
				покупателей, статей (счетов) доходов и расходов.
				<br></br>
				<br></br>
				По данным управленческого учета пользователь получает
				возможность формировать основные финансовые отчеты:
				<ul>
					<li>управленческий баланс,</li>
					<li>отчет о прибылях и убытках,</li>
					<li>отчет о движении денежных средств.</li>
				</ul>
				В системе существует возможность регистрации финансовых планов
				(бюджетов):
				<ul>
					<li>прогнозный баланс,</li>
					<li>бюджет прибылей и убытков,</li>
					<li>бюджет движения денежных средств.</li>
				</ul>
				Также в разделе предусмотрены средства для начисления налогов,
				ввода и распределения прочих расходов, вызов процедуры закрытия
				месяца.
				<br></br> <br></br>
				Для контроля деятельности предприятия со стороны руководителя
				предназначен «Монитор руководителя», в котором сведены основные
				показатели:
				<ul>
					<li>
						остатки денежных средств на счетах и в кассах
						предприятия;
					</li>
					<li>дебиторская задолженность — общая, просроченная;</li>
					<li>кредиторская задолженность — общая, просроченная;</li>
					<li>прибыли и убытки;</li>
					<li>
						просроченные обязательства перед покупателями и
						заказчиками по отгрузке товаров и оказанию услуг;
					</li>
					<li>
						просроченные обязательства поставщиков и подрядчиков по
						поставке товаров и оказанию услуг.
					</li>
				</ul>
				Дополнительно можно получить следующую информацию:
				<ul>
					<li>
						общие показатели: продажи, доходы и расходы, состояние
						оборотных средств (денежных средств, запасов и
						дебиторской задолженности);
					</li>
					<li>
						денежные средства: остатки и движение денежных средств в
						разрезе статей, за период;
					</li>
					<li>
						дебиторская задолженность: остатки и динамика за период,
						по срокам долга;
					</li>
					<li>
						кредиторская задолженность: остатки и динамика за
						период, по срокам долга.
					</li>
				</ul>
			</>
		),
	},
	{
		title: 'Кадры и расчеты с поставщиками',
		content: (
			<>
				Реализовано оперативное предоставление информации для
				определения и обеспечения внутренних и внешних потребностей в
				товарах и услугах: о наличии необеспеченных потребностей в
				товарно-материальных запасах, работах и услугах, о фактических
				закупках, об открытых заказах поставщикам и заказах на
				производство.
				<br></br>
				<br></br>
				Обеспечение потребностей осуществляется резервированием товаров
				в свободном остатке в местах хранения, а также размещением в
				заказах поставщикам и в заказах на производство.
				<br></br>
				<br></br>
				Для обеспечения процесса закупок товаров, услуг и работы с
				поставщиками автоматизированы операции:
				<ul>
					<li>регистрация поставщиков и контактной информации;</li>
					<li>
						хранение цен поставщиков и конкурентов, печать
						прайс-листа контрагента;
					</li>
					<li>хранение вида цен контрагента по договору;</li>
					<li>
						хранение информации о пользователе, изменившем цену
						номенклатуры контрагента;
					</li>
					<li>
						регистрация и хранение списка контактных лиц
						контрагентов и их контактной информации;
					</li>
					<li>
						регистрация событий при взаимодействии с поставщиками и
						подрядчиками — входящие и исходящие звонки, письма,
						встречи и прочее;
					</li>
					<li>
						оформление заказов поставщикам и контроль их исполнения;
					</li>
					<li>формирование графиков поставок.</li>
				</ul>
				расчет потребностей в запасах, определение дефицита запасов,
				формирование рекомендаций на пополнение запасов путем
				формирования заказов на производство или заказов поставщикам.
			</>
		),
	},
];

export default function CompanyManagement() {
	return (
		<Layout>
			<Container>
				<h2 className={styles.title}>
					1С:Управление компанией для Беларуси
				</h2>
				<div className={styles.intro}>
					<div className={styles.intro__left}>
						<img
							src='../program-manage-company.webp'
							alt='Управление компанией'
						/>
					</div>
					<div className={styles.intro__right}>
						<p>
							Продукт позволяет автоматизировать типовые процессы
							предприятий оптовой и розничной торговли (не сетевых
							магазинах, использующих несколько касс),
							интернет-магазинов и компаний сферы услуг, подрядных
							организаций и небольших производственных компаний.
						</p>
					</div>
				</div>
				<div className={styles.desc}>
					<h2>Описание</h2>
					<ul>
						<li>
							Дает возможность пользователям повысить
							эффективность работы компании, предоставляя
							владельцам и руководителям широкий спектр
							инструментов для управления, а сотрудникам — новые
							возможности для продуктивной работы;
						</li>
						<li>
							Все самое необходимое для оперативного учета,
							контроля, анализа и планирования;
						</li>
						<li>
							Не перегружено функционалом и легко адаптируется к
							особенностям организации управления и учета в
							компании — это обеспечивает возможность «быстрого
							старта» и удобство ежедневной работы;
						</li>
						<li>
							Разработана специально для рынка Республики
							Беларусь.
						</li>
					</ul>
					<a
						target='_blank'
						href='http://by.demo.1c.eu/companymanagement'>
						<Button>Демо-версия конфигурации</Button>
					</a>
				</div>
				<h2>Функционал</h2>
				<p>
					Прикладное решение «1С:Управление компанией для Беларуси»
					предоставляет пользователям возможность автоматизировать
					следующие участки деятельности:
				</p>
				{functionalities.map((item) => (
					<Accordion
						title={item.title}
						content={item.content}></Accordion>
				))}
			</Container>
		</Layout>
	);
}

export async function getStaticProps() {
	return { props: {} };
}

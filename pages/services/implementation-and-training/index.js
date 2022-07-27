import classNames from 'class-names';
import Container from '../../../components/Container/Container';
import styles from './implementation-and-training.module.scss';

export default function ImplementationAndTraining() {
	return (
		<Container>
			<h2 className={styles.title}>
				Адаптируем программы 1С под специфику и бизнес-процессы вашей
				компании.
			</h2>
			<div>
				<img
					alt={'Integration'}
					className={styles.img}
					src={'../implementation.png'}></img>
				<div>
					Программные продукты «1С:Предприятие 8» имеют широкий
					функционал и множество особенностей использования.
					Профессиональное внедрение программ «1С» позволит создать
					автоматизированную систему, которая будет максимально точно
					соответствовать особенностям бизнес-процессов конкретной
					компании. Благодаря опыту сотрудников компании каждому
					клиенту гарантируется качественный и полный инструктаж по
					эксплуатации и особенностях выбранного программного
					продукта.
					<br></br>
					<br></br>
					Для создания эффективно работающей системы недостаточно
					просто установить прикладное решение на рабочее место.
					Результат достигается в рамках внедрения 1С 8, включающего
					настройку и подготовку системы в соответствии с задачами
					компании и особенностями сферы деятельности. Часто для этого
					требуется доработка типового функционала программы, перенос
					данных и интеграция с другими учетными системами, обучение
					пользователей.
				</div>
			</div>
			<h2 className={styles['title']}>
				В каких случаях требуется внедрение 1С
			</h2>
			<div className={classNames(styles.list, styles.list_cases)}>
				<div className={styles.list__item}>
					<div className={styles.list__num}>1</div>
					<div>
						<div className={styles.list__title}>
							Купили программу, но так и не пользуетесь
						</div>
						<div>
							Вы купили программу 1С, но так и не установили, а
							коробка служит напоминанием. Обращайтесь! — Поможем
							начать работу в 1С правильно: установим и настроим
							программу, доработаем функционал, обучим
							сотрудников.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div className={styles.list__num}>2</div>
					<div>
						<div className={styles.list__title}>
							Меняется бизнес - меняются процессы
						</div>
						<div>
							Бизнес вырос или организационная структура стала
							более сложной и вам уже не хватает имеющегося
							функционала. Изучим бизнес, найдем проблемные
							участки, разработаем функционал, настроим и внедрим
							ПО.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div className={styles.list__num}>3</div>
					<div>
						<div className={styles.list__title}>
							Стало неудобно работать в 1С
						</div>
						<div>
							Возникают нестыковки, приходится многие задачи
							решать вручную, участились ошибки. Обследуем
							систему, выявим ошибки, разработаем и внедрим
							удобное для вас решение.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div className={styles.list__num}>4</div>
					<div>
						<div className={styles.list__title}>
							Не подходит типовое решение
						</div>
						<div>
							У организации есть отраслевая специфика. Требуются
							индивидуальные доработки. Не проблема — наши
							специалисты разработают и внедрят необходимый
							функционал, проведут обучение сотрудников.
						</div>
					</div>
				</div>
			</div>
			<h2 className={styles['title']}>Основные этапы внедрения</h2>
			<div className={classNames(styles.list, styles.list_stages)}>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						1
					</div>
					<div>
						<div className={styles.list__title}>
							Обследование и анализ
						</div>
						<div>
							На этом этапе мы разбираемся, что работает не так и
							чего не хватает.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						2
					</div>
					<div>
						<div className={styles.list__title}>
							Выбор программы
						</div>
						<div>
							Подбираем программу и, в случае необходимости,
							разрабатываем индивидуальное решение.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						3
					</div>
					<div>
						<div className={styles.list__title}>
							Демонстрация решения
						</div>
						<div>
							Показываем вам, как будет работать наше решение.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						4
					</div>
					<div>
						<div className={styles.list__title}>
							Смета и график работ
						</div>
						<div>
							Расчитываем стоимость внедрения и составляем
							план-график работ.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						5
					</div>
					<div>
						<div className={styles.list__title}>
							Установка и настройка
						</div>
						<div>
							Устанавливаем и настраивам программу на сервере и
							компьютерах сотрудников. Настраиваем резервное
							копирование и быстродействие программы. При
							необходимости, переносим данные из прежней системы.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						6
					</div>
					<div>
						<div className={styles.list__title}>
							Новый функционал
						</div>
						<div>
							Разрабатываем индивидуальный функционал, если есть
							такая потребность.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						7
					</div>
					<div>
						<div className={styles.list__title}>
							Обучение сотрудников
						</div>
						<div>
							Учим ваших сотрудников пользоваться программой
							правильно и эффективно.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						8
					</div>
					<div>
						<div className={styles.list__title}>
							Определение прав пользователей
						</div>
						<div>
							Разделяем права пользователей в программе в целях
							безопасности и, чтобы сотрудникам были доступны
							только нужные им в работе модули.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						9
					</div>
					<div>
						<div className={styles.list__title}>
							Обеспечиваем поддержку системы
						</div>
						<div>
							Постоянная поддержка сотрудников, обновления
							программы, поддержание стабильной работы системы.
						</div>
					</div>
				</div>
			</div>
			<h2 className={styles['title']}>
				Какие выгоды принесет внедрение 1С
			</h2>
			<div className={classNames(styles.list, styles.list_advantages)}>
				<div className={styles.list__item}>
					<div className={styles.list__num}>1</div>
					<div>
						<div className={styles.list__title}>
							Рост производительности
						</div>
						<div>
							Правильно настройка позволит задействовать полный
							потенциал программы, сократить временные затраты на
							выполнение основного функционала и, соответственно,
							повысить производительность вашей компании.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div className={styles.list__num}>2</div>
					<div>
						<div className={styles.list__title}>
							Оптимизация бизнес-процессов
						</div>
						<div>
							Мы настроим функционал программы в соответствии с
							бизнес-процессами компании. Задействуем только
							нужные блоки системы и уберем все лишнее, чтобы
							увеличить быстродействие. Система будет работать так
							быстро, насколько это возможно.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div className={styles.list__num}>3</div>
					<div>
						<div className={styles.list__title}>
							Рост эффективности сотрудников
						</div>
						<div>
							Внедрение 1С предполагает обучение сотрудников
							работе в программе. Мы научим ваших людей
							использовать программу максимально эффективно.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div className={styles.list__num}>4</div>
					<div>
						<div className={styles.list__title}>
							Управленческий контроль
						</div>
						<div>
							Настроим необходимые отчеты, чтобы руководители
							всегда знали что происходит в компании и принимали
							только взвешанные решения, онованные на данных.
						</div>
					</div>
				</div>
			</div>
			<h2 className={styles['title']}>
				Почему внедрять 1С следует с нами
			</h2>
			<div className={classNames(styles.list, styles.list_advantages)}>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						1
					</div>
					<div>
						<div className={styles.list__title}>Рекомендации</div>
						<div className={styles.list__subtitle}>
							Большинство клиентов приходят по рекомендации
						</div>
						<div>
							Клиенты рекомендуют нас друзьям, знакомым и коллегам
							по бизнесу, что свидетельствует об их
							удовлетворенности и нашем профессионализме.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						2
					</div>
					<div>
						<div className={styles.list__title}>Сотрудничество</div>
						<div className={styles.list__subtitle}>
							Средний срок сотрудничества с клиентами 5 лет
						</div>
						<div>
							Мы уверены, что это всецело заслуга нашего
							приветливого и профессионального коллектива.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						3
					</div>
					<div>
						<div className={styles.list__title}>Доверие</div>
						<div className={styles.list__subtitle}>
							Бухгалтеры продолжают работать с нами даже после
							смены места работы
						</div>
						<div>
							Бухгалтеры доверяют нам, повторно заключая договор
							на новом месте работы. Мы считаем, все потому, что
							им снами комфортно работать.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						4
					</div>
					<div>
						<div className={styles.list__title}>
							Индивидуальный подход
						</div>
						<div className={styles.list__subtitle}>
							Стараемся идти на встречу клиентам
						</div>
						<div>
							Поэтому готовы рассматривать индивидуальные условия
							сотрудничества. Просто расскажите, чего бы вам
							хотелось, а мы подумаем, как это реализовать.
						</div>
					</div>
				</div>

				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						5
					</div>
					<div>
						<div className={styles.list__title}>Поддержка</div>
						<div className={styles.list__subtitle}>
							Сотрудники поддержки — к вашим услугам
						</div>
						<div>
							Решим все проблемы, ответим на все вопросы с
							понедельника по пятницу, с 9 до 19 часов по Минску.
						</div>
					</div>
				</div>
				<div className={styles.list__item}>
					<div
						className={classNames(
							styles.list__num,
							styles.list__num_filled
						)}>
						6
					</div>
					<div>
						<div className={styles.list__title}>Гарантия</div>
						<div className={styles.list__subtitle}>
							12 месяцев на все работы и услуги
						</div>
						<div>
							Несем ответственность за свою работу и ее результат.
							И в негарантийных случаях мы вас не оставим.
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

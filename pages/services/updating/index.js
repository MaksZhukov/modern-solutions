import Container from '../../../components/Container/Container';
import styles from './updating.module.scss';

export default function Updating() {
	return (
		<Container>
			<h2 className={styles.title}>Установка программ 1С</h2>
			Программный комплекс 1С - широко востребованное средство для ведения
			бухгалтерского учета. Своевременное{' '}
			<b>обновление программного обеспечения</b> необходимо для
			поддержания системы в соответствующем законодательным требованиям
			состоянии, а также для оснащения современными функциональными
			возможностями, без которых любой бизнес будет терять позиции,
			отставая от конкурирующих компаний.
			<div className={styles.services}>
				<div className={styles.services__item}>
					<img
						className={styles.services__img}
						src={'/updating-1.svg'}></img>
					<div className={styles.services__content}>
						<b>Обновляем</b> типовые, отраслевые и
						специализированные прикладные решения
					</div>
				</div>
				<div className={styles.services__item}>
					<img
						className={styles.services__img}
						src={'/updating-2.svg'}></img>
					<div className={styles.services__content}>
						<b>Выполняем</b> обновление версии 1С до последнего
						релиза программы
					</div>
				</div>
				<div className={styles.services__item}>
					<img
						className={styles.services__img}
						src={'/updating-3.svg'}></img>
					<div className={styles.services__content}>
						<b>Консультируем</b> и оказываем техническую поддержку
						по продуктам 1С
					</div>
				</div>
				<div className={styles.services__item}>
					<img
						className={styles.services__img}
						src={'/updating-4.svg'}></img>
					<div className={styles.services__content}>
						<b>Настраиваем</b> создание резервных копий рабочей базы
						с нужной частотой
					</div>
				</div>
				<div className={styles.services__item}>
					<img
						className={styles.services__img}
						src={'/updating-5.svg'}></img>
					<div className={styles.services__content}>
						<b>Оперативно исправляем</b> ошибки в текущей версии
						программы
					</div>
				</div>
			</div>
			Компания оказывает услуги по обновлению конфигураций 1С. Наши
			эксперты обеспечивают корректную установку релизов и бесперебойную
			работу программ.
			<br></br>
			<br></br>
			Систематическое обновление баз 1С — это полноценная безопасная и
			уверенная эксплуатация системы:
			<ul>
				<li>актуальные формы документов и отчетности;</li>
				<li>исправление зарегистрированных в программе ошибок;</li>
				<li>
					соответствие учета последним законодательным требованиям;
				</li>
				<li>
					новые функциональные возможности, механизмы и инструменты;
				</li>
				<li>комфортная, быстрая и эффективная работа с программами;</li>
				<li>
					сохранение информационной базы и минимальный риск потери
					данных.
				</li>
			</ul>
			Своевременно получать обновления конфигураций можно только при
			наличии договора на 1С:ИТС. Услуги по настройке и сопровождению
			программ оказывают официальные партнеры.
			<br></br>
			<br></br>
			Установка новых релизов прикладных решений входит в 1С:ИТС. Типовые
			конфигурации 1С:Предприятия 8 могут обновляться пользователями
			самостоятельно при доступа к порталу и в автоматическом режиме.
		</Container>
	);
}

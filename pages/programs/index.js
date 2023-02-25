import Link from 'next/link';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Layout from '../../layouts/Layout';
import styles from './programs.module.scss';

const programs = [
    {
        name: '1С:Бухгалтерия 8 для Беларуси',
        description:
            '«1С:Бухгалтерия 8» — это профессиональный инструмент для ведения учета, подготовки и сдачи обязательной отчетности. \n Понятный учет в соответствии с законодательством Республики Беларусь потребностями бизнеса, экономия времени при проведении расчетов с контрагентами, оформлении документов и хозяйственных операций, эффективная поддержка пользователей в сочетании с высоким комфортом работы — лишь некоторые ключевые особенности «1С:Бухгалтерии 8».',
        url: 'program-bookkeeping.webp',
        href: 'programs/accounting'
    },
    {
        name: '1С:Управление торговлей для Беларуси',
        description:
            'Прикладное решение «1С:Управление торговлей для Беларуси» предназначено для ведения оперативного и управленческого учета, включая управление продажами, поставками, заказами, товарооборотом и другими процессами, связанными с хозяйственной деятельностью предприятия. Продукт позволяет планировать деятельность компании, проводить анализ и отслеживать динамику реализации.',
        url: 'program-manage-trade.webp',
        href: 'programs/trade-management'
    },
    {
        name: '1С:Управление компанией для Беларуси',
        description:
            'Продукт позволяет автоматизировать типовые процессы предприятий оптовой и розничной торговли (не сетевых магазинах, использующих несколько касс), интернет-магазинов и компаний сферы услуг, подрядных организаций и небольших производственных компаний.',
        url: 'program-manage-company.webp',
        href: 'programs/company-management'
    },
    {
        name: '1С:Розница для Беларуси',
        description:
            '«1С:Розница 8 для Беларуси» помогает комплексно автоматизировать все основные бизнес-процессы как отдельного магазина, так и розничной сети. Программа подходит для работы с торговым оборудованием и системами маркировки, настраивается индивидуально под задачи любой сферы торговли и помогает повысить эффективность работы магазина.',
        url: 'program-retail.webp',
        href: 'programs/retail'
    }
];

export default function Programs() {
    return (
        <Container>
            <h2 className={styles.title}>Используемые нами типовые решения 1С</h2>
            <div className={styles.programs}>
                {programs.map((item) => (
                    <div key={item.name} className={styles.programs__item}>
                        <img className={styles.programs__img} src={item.url} alt={item.name}></img>

                        <div className={styles.programs__content}>
                            <h2>{item.name}</h2>
                            <p className={styles.programs__desc}>{item.description}</p>
                            {/* <Link href={item.href}>
                                <Button>Подробнее</Button>
                            </Link> */}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export async function getStaticProps() {
    return { props: {} };
}

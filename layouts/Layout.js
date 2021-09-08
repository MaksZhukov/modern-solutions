import Link from 'next/link';

const menu = [
    { path: '/', name: 'Главная' },
    { path: '/prices', name: 'Цены' },
    { path: '/programs', name: 'Программы' },
];

export default function Layout({ children }) {
    return (
        <>
            <header>
                header
                <nav>
                    <ul>
                        {menu.map((item) => {
                            return <Link href={item.path}>{item.name}</Link>;
                        })}
                    </ul>
                </nav>
            </header>
            {children}
            <footer>footer</footer>
        </>
    );
}

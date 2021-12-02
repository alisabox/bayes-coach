import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
        <h1 className="header__title">Обзор матча</h1>
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-item">
                    <a href="#/">Сводка</a>
                </li>
                <li className="header__nav-item">
                    <a href="#/">Составы</a>
                </li>
                <li className="header__nav-item header__nav-item--active">
                    <a href="#/">Подробная статистика</a>
                </li>
                <li className="header__nav-item">
                    <a href="#/">Анализ матча</a>
                </li>
            </ul>
        </nav>
        <a className="header__user" href="#/">
            <img src="img/userpic.png"  height="30" width="30" alt="" />
        </a>
    </header>
  )
}

export default Header;

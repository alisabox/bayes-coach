import './side-menu.scss';

const SideMenu = (): JSX.Element => {
  return (
    <aside className="side-menu">
        <picture className="side-menu__logo">
            <source media="(min-width: 1280px)" srcSet="img/logo_full.svg" />
            <img src="img/logo.svg" width="29" height="36" alt="Баес коуч" />
        </picture>
        <div className="side-menu__section">
            <h2 className="side-menu__subtitle">Меню</h2>
            <ul className="side-menu__menu-list">
                <li className="side-menu__menu-item">
                    <a href="#/" title="Обзор команды">
                        <img src="img/icons/home.svg" height="18" width="18" alt="" />
                        <h3>Обзор команды</h3>
                    </a>
                </li>
                <li className="side-menu__menu-item side-menu__menu-item--active">
                    <a href="#/" title="Обзор матча">
                        <img src="img/icons/field.svg" height="18" width="18" alt="" />
                        <h3>Обзор матча</h3>
                    </a>
                </li>
                <li className="side-menu__menu-item">
                    <a href="#/" title="Сравнение игроков">
                        <img src="img/icons/chart.svg" height="18" width="18" alt="" />
                        <h3>Сравнение игроков</h3>
                    </a>
                </li>
                <li className="side-menu__menu-item">
                    <a href="#/" title="Отчеты">
                        <img src="img/icons/download.svg" height="18" width="18" alt="" />
                        <h3>Отчеты</h3>
                    </a>
                </li>
            </ul>
        </div>
        <div className="side-menu__section">
            <h2 className="side-menu__subtitle">Текущий клуб</h2>
            <img className="side-menu__current-club-img" src="img/spartak_logo.png" width="63" height="41" alt="" />
            <p className="side-menu__current-club-name">Спартак Москва</p>
            <ul className="side-menu__clubs-list">
                <li className="side-menu__clubs-item">
                    <img src="img/icons/star.svg" width="22" alt="" />
                    <h3>Избранные клубы</h3>
                </li>
                <li className="side-menu__clubs-item">
                    <img src="img/spartak_logo.png" width="22" alt="" />
                    <p>Спартак Москва</p>
                </li>
                <li className="side-menu__clubs-item">
                    <img src="img/sochi_logo.png" width="22" alt="" />
                    <p>Сочи</p>
                </li>
                <li className="side-menu__clubs-item">
                    <img src="img/fc_krasnodar_logo.png" width="22" alt="" />
                    <p>Краснодар</p>
                </li>
            </ul>
            <button className="side-menu__refresh-button">
                <img src="img/icons/refresh.svg" alt="" />
                <p>Выбрать другой клуб</p>
            </button>
        </div>
        <div className="side-menu__section">
            <button className="side-menu__chat-button">
                <img src="img/icons/chat.svg" alt="" />
                <p>Дать обратную связь</p>
            </button>
        </div>
    </aside>
  )
}

export default SideMenu;

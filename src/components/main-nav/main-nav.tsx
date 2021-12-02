import { memo } from 'react';

const MainNav = (): JSX.Element => {
  return (
    <div className="main-nav">
        <ul className="main-nav__list">
            <li className="main-nav__item"><a href="#/">Атака</a></li>
            <li className="main-nav__item"><a href="#/">Оборона</a></li>
            <li className="main-nav__item"><a href="#/">Пасы</a></li>
            <li className="main-nav__item main-nav__item--active"><a href="#/">BT Score</a></li>
        </ul>
    </div>
  )
}
export default memo(MainNav);
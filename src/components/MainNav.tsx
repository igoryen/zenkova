import "../styles/mainStyle.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { switchToPage } from "../features/mainNav/mainNavSlice";


const menuItems = [
    { itemId: 'home', itemName: 'Главная', itemLink: '' },
    { itemId: 'services', itemName: 'Услуги', itemLink: 'services' },
    { itemId: 'contacts', itemName: 'Контакты', itemLink: 'contacts' },
];


export function MainNav() {

    const currentPageIs = useSelector((state: any) => state.mainNav.currentPage);
    const dispatch = useDispatch();

    return (
        <div>
            <nav className="main-nav">
                <ul>
                    {menuItems.map(menuItem =>
                        <li key={menuItem.itemId} className={currentPageIs === menuItem.itemId ? ('link active ' + menuItem.itemId) : ('link inactive ' + menuItem.itemId)}>
                            <Link
                                to={menuItem.itemLink}
                                onClick={() => dispatch(switchToPage(menuItem.itemId))}
                            >
                                {menuItem.itemName}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

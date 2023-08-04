import React from "react";
import styles from "./app-header.module.css";
import { Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export default class AppHeader extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <header className={"m-10 " + styles.header}>
                <nav className={"m-4 " + styles.navigation}>

                    <div className={styles.navigationUnits}>
                        <div className={"pt-4 pr-5 pb-4 pl-5 " + styles.navigationUnit}>
                            <a href="#" className={styles.link}>
                            <BurgerIcon type="primary" className={styles.icon}/>
                            <p className="ml-2 text text_type_main-default">Конструктор</p>
                            </a>
                        </div>
                        <div className={"pt-4 pr-5 pb-4 pl-5 " + styles.navigationUnit}>
                            <ListIcon type="secondary" className={styles.icon}/>
                            <p className="ml-2 text text_type_main-default text_color_inactive">Лента заказов</p>
                        </div>
                    </div>
                    <div className={"pt-4 pr-5 pb-4 pl-5 " + styles.navigationUnit}>
                        <ProfileIcon type="secondary" className={styles.icon}/>
                        <p className="ml-2 text text_type_main-default text_color_inactive">Личный кабинет</p>
                    </div>
                    
                </nav>
                <div className={styles.logo}><Logo/></div>
            </header>
        );
    };
};
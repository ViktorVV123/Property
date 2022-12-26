import React from 'react';
import '../Main.css'

export const PanelTwo = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown"  style={{color:'black'}}>
                                    Квартира
                                </a>
                                <ul className="dropdown-menu "
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Квартиру</a></li>
                                    <li><a className="dropdown-item" href="#">Комнату</a></li>
                                    <li><a className="dropdown-item" href="#">Дом</a></li>
                                    <li><a className="dropdown-item" href="#">Гараж или машиноместо</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
                                    Выпадающий список
                                </a>
                                <ul className="dropdown-menu "
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Действие</a></li>
                                    <li><a className="dropdown-item" href="#">Другое действие</a></li>
                                    <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
                                    Выпадающий список
                                </a>
                                <ul className="dropdown-menu "
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Действие</a></li>
                                    <li><a className="dropdown-item" href="#">Другое действие</a></li>
                                    <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
                                    Выпадающий список
                                </a>
                                <ul className="dropdown-menu "
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Действие</a></li>
                                    <li><a className="dropdown-item" href="#">Другое действие</a></li>
                                    <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};


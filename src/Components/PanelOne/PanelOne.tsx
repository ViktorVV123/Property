import React from 'react';
import './PanelOne.css'

export const PanelOne = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg ">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown"  style={{color:'black'}}>
                                    Купить
                                </a>
                                <ul className="dropdown-menu "
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Кваритру</a></li>
                                    <li><a className="dropdown-item" href="#">Комнату</a></li>
                                    <li><a className="dropdown-item" href="#">Гараж</a></li>
                                    <li><a className="dropdown-item" href="#">Дом или коттедж</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
                                    Снять
                                </a>
                                <ul className="dropdown-menu "
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Кваритру</a></li>
                                    <li><a className="dropdown-item" href="#">Комнату</a></li>
                                    <li><a className="dropdown-item" href="#">Гараж</a></li>
                                    <li><a className="dropdown-item" href="#">Дом или коттедж</a></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
                                    Комерческая
                                </a>
                                <ul className="dropdown-menu "
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Продажа</a></li>
                                    <li><a className="dropdown-item" href="#">Аренда</a></li>

                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
                                    Ипотека
                                </a>
                                <ul className="dropdown-menu "
                                    aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Ипотечная программа</a></li>
                                    <li><a className="dropdown-item" href="#">Ипотечный калькулятор</a></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};


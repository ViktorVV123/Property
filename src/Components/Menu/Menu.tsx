import React from 'react';
import './Menu.css'


export const Menu = () => {
    return (
        <div className={'container'}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Недвижимость</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Выбрать регион
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Москва</a></li>
                                    <li><a className="dropdown-item" href="#">Москвоская область</a></li>
                                    <li><a className="dropdown-item" href="#">Жуковский</a></li>
                                </ul>
                            </li>

                        </ul>
                        <div>
                            <div className={'liStyle'}>
                            <a className="nav-link active" href="#">Поддержка</a>
                            <a className="nav-link active" href="#">Добавить объявление</a>
                            <a className="nav-link active" href="#">Личный кабинет</a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};


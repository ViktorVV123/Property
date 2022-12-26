import React from 'react';
import {PanelTwo} from "./PanelTwo/PanelTwo";
import './Main.css'
import {BuyRoom} from "./BuyRoom/BuyRoom";
import {BuyApartment} from "./BuyApartment/BuyApartment";
import {BuyParking} from "./BuyParking/BuyParking";


export const Main = () => {
    return (
        <div className={'container'}>
            <div className={'block'}>
                <div className={'block1'}>
                    <div className={'block3'}>

                        <div>
                            <button>Купить</button>
                            <button>Снять</button>
                        </div>
                        <div><PanelTwo/></div>
                        <button style={{marginLeft:'500px'}}>Показать объявление</button>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <BuyApartment/>
            <BuyRoom/>
            <BuyParking/>

        </div>
    );
};


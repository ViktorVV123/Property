import React from 'react';
import './BuyParking.css'
import parking from '../../../picture/parking.jpg'

export const BuyParking = () => {
    return (
        <div className={'container'}>
            <div className={'parkingAll'}>

                <div >
                    <img className={'imgParking'} src={parking}/>
                </div>

                <div className={'parkingA'}>
                    <h3>Гаражи</h3>
                    <a href={'/'}>Купить гараж </a>
                    <a href={'/'}>Снять гараж </a>


                </div>

            </div>
        </div>
    );
};

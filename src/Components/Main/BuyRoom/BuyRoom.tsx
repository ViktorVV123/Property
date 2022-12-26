import React from 'react';
import './BuyRoom.css'
import room1 from '../../../picture/room1.jpg'
import room2 from '../../../picture/room2.jpg'

export const BuyRoom = () => {
    return (
        <div className={'container'}>

            <div className={'roomAll'}>
                <div >

                    <div><img className={'imgRoom'} src={room1}/></div>
                     <h4>Cнять квартиру</h4>
                    <div>
                        <div>
                            <a href={'/'}>stud</a>
                        </div>
                        <div>
                            <a href={'/'}>1</a>
                        </div>
                        <div>
                            <a href={'/'}>2</a>
                        </div>

                    </div>

                </div>
                <div>

                    <div><img className={'imgRoom'} src={room2}/></div>
                    <h4>Cнять посуточно</h4>
                    <div>
                        <div>
                            <a href={'/'}>квартира </a>
                        </div>
                        <div>
                            <a href={'/'}>комната</a>
                        </div>
                        <div>
                            <a href={'/'}>дом</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};


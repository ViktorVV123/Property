import React from 'react';
import './Footer.css'

export const Footer = () => {
    return (
<div className={'footer'}>
            <div className={'footerAll'}>

                <div className={'footerA'}>
                    <a href={'/'}>Купить гараж </a>
                    <a href={'/'}>Купить гараж </a>
                    <a href={'/'}>Купить гараж </a>

                </div>

                <div>
                    <div style={{display:"flex"}}>
                        <div style={{marginRight:"7px"}} className="material-symbols-outlined">call</div>
                        <div >8 (800)-888-88-88</div>
                    </div>
                    <div style={{display:"flex"}}>
                        <div style={{marginRight:"7px"}} className="material-symbols-outlined">home</div>
                        <div >Slavakia 1k2</div>
                    </div>
                    <div style={{display:"flex"}}>
                        <div style={{marginRight:"7px"}} className="material-symbols-outlined">mail</div>
                        <div > amzn@mail.ru</div>
                    </div>
                </div>

            </div>
    <div style={{textAlign:'center' ,color:'#999'}} >© 2022 Мой сайт</div>
</div>
    );
};

/*
<div className='container-fluid' style={{backgroundColor:'#353535'}} >
    <div className="card-group">
        <div className="col"  >
            <div className="card" style={{backgroundColor:'#353535', color:'white'}} >
                <div className="card-body" style={{ textAlign:'left' }}>
                    <h5 className="card-title">Услуги</h5>
                    <ul style={{ listStyleType:'none' }}>
                        <li>Планирование бизнеса</li>
                        <li>Финансовое планирование</li>
                        <li>Налоги и аудит</li>
                        <li>Инвестиции</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="col"  >
            <div className="card" style={{backgroundColor:'#353535', color:'white'}} >
                <div className="card-body" style={{ textAlign:'left' }}>
                    <h5 className="card-title">Connect</h5>
                    <ul style={{ listStyleType:'none' }}>
                        <div style={{display:"flex"}}>
                            <div style={{marginRight:"7px"}} className="material-symbols-outlined">call</div>
                            <div >8 (800)-888-88-88</div>
                        </div>
                        <div style={{display:"flex"}}>
                            <div style={{marginRight:"7px"}} className="material-symbols-outlined">home</div>
                            <div >Slavakia 1k2</div>
                        </div>
                        <div style={{display:"flex"}}>
                            <div style={{marginRight:"7px"}} className="material-symbols-outlined">mail</div>
                            <div > amzn@mail.ru</div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    <div style={{textAlign:'center' ,color:'white'}} >© 2022 Мой сайт</div>
</div>*/

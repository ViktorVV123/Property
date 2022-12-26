import React from 'react';
import './BuyApartment.css'
import stud from '../../../picture/студия.jpeg'
import two from '../../../picture/двушка.jpeg'
import one from '../../../picture/однушка.jpeg'
import third from '../../../picture/трешка.jpeg'


export const BuyApartment = () => {
    return (
        <div className={'container'}>
            <h1 style={{marginTop:'20px',marginBottom:'20px'}}>Купить квартиру</h1>
            <div className={'allApart'}>
                <div className={'twoApart'}>
                    <div>
                        <img className={'imgApart'} src={stud}/>
                        <h5>cтудия</h5>
                    </div>

                    <div>
                        <img className={'imgApart'} src={one}/>
                        <h5>1 комнатные</h5>
                    </div>
                </div>
                <div className={'fourApart'}>
                    <div>
                        <img className={'imgApart'} src={two}/>
                        <h5> 2 комнатные </h5>
                    </div>
                    <div>
                        <img className={'imgApart'} src={third}/>
                        <h5>3 комнатные</h5 >
                    </div>
                </div>
            </div>
        </div>
    );
};
/*

<h1 style={{marginTop:'20px',marginBottom:'20px'}}>Купить квартиру</h1>
<div className={'cardStyle'}>
    <div className="card mb-3" style={{maxWidth: "540px;"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={stud} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"><a className="nav-link active" href="#">Студии</a></h5>
                    <p className="card-text"></p>
                    <p className="card-text"><small className="text-muted"></small>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" style={{maxWidth: "540px;"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={one} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"><a className="nav-link active" href="#">1 - комнатные</a></h5>

                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" style={{maxWidth: "540px;"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={two} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"><a className="nav-link active" href="#">2 - комнатные</a> </h5>

                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" style={{maxWidth: "540px;"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={third} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"><a className="nav-link active" href="#">3 - комнатные</a></h5>

                </div>
            </div>
        </div>
    </div>
</div>*/

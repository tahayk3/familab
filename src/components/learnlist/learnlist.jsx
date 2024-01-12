import './learnlist.css';
import {datos} from './data';
import React from 'react';


export default function ListElements(){

    return(
            <div className="container-listlearn">
                <h3 className="title">¿Qué aprenderas con nosotros en tan solo un año?</h3>
                <ul className="lista">
                    {datos.map(data =>
                    (
                        <li key={data.id}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <p className='signo'>?</p>
                                    </div>
                                    <div className="flip-card-back">
                                    <p>{data.texto}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                    )}
                </ul>
            </div>
    );
}
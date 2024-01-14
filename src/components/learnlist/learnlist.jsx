import './learnlist.css';
import {datos} from './data';
import React from 'react';
import Fade from "react-reveal";

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
                                    <Fade right>
                                        <p className='signo'>?</p>
                                    </Fade>
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
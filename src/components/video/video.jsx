import react from "react";
import video from './video.mp4';
import img1 from './img1.png';
import img2 from './img2.png';
import './video.css';

export default function Video(){
    return(
        <div className="main-container-video">
            <h3 className="video-title">
            ¡Tu futuro en el mundo de la salud comienza aquí!
            </h3>
            <div className="container-video">
                <img className="img-video" src={img1} alt="" />

                <video className="video-video" autoplay="autoplay" loop="loop" controls="controls" muted="true">
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta este tipo de video
                </video>

                <img className="img-video" src={img2} alt="" />
            </div>
        </div>
    );
}
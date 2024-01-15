
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
                <iframe width="394" height="700" src="https://www.youtube.com/embed/D8rrlG7uiz8?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img className="img-video" src={img2} alt="" />
            </div>
        </div>
    );
}
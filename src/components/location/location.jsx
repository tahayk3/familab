import react, {useState,useEffect}  from "react";
import './location.css';
import gif from './gif.gif';
import imagen from './imagen.png';
import Roll from 'react-reveal/Roll';


export default function Location(){

    const [tamanio, setTamanio] = useState({
        ancho: window.innerWidth,
        alto: window.innerHeight
        });
    
    useEffect(() => {
        const actualizarTamanio = () => {
        setTamanio({
            ancho: window.innerWidth,
            alto: window.innerHeight
          });
        };
    
    // Agregar un event listener para actualizar el tamaño cuando cambia la ventana
    window.addEventListener('resize', actualizarTamanio);
    
    return () => {
        window.removeEventListener('resize', actualizarTamanio);
        };
    }, []); 


    //Variables con dos tipos de mapas de diferentes tamaños 
    const map1 = <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1178.7676621399794!2d-91.54302400572047!3d14.85802088438376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDUxJzI4LjgiTiA5McKwMzInMzMuOCJX!5e1!3m2!1ses-419!2sgt!4v1705175815952!5m2!1ses-419!2sgt" width="700" height="700"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
    const map2 = <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d589.3840572614654!2d-91.54277!3d14.857938!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDUxJzI4LjgiTiA5McKwMzInMzMuOCJX!5e1!3m2!1ses-419!2sgt!4v1705176004910!5m2!1ses-419!2sgt" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
    return (
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                        
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ubicación</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                            6 avenida 0-38 zona 9, La Floresta, Quetzaltenango 🌎📌
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <img className="gift-location" src={gif} alt="" />
                                <img className="img-location" src={imagen} alt="" />
                            </dl>
                        </div>
                        </div>
                        <Roll left>
                        {tamanio.ancho <650 ? map2: map1 }
                        </Roll>
                    </div>
                </div>
            </div>
    );
}



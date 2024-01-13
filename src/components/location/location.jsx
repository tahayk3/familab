import react, {useState,useEffect}  from "react";
import './location.css';

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
    const map1 = <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1178.7676621399794!2d-91.54302400572047!3d14.85802088438376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDUxJzI4LjgiTiA5McKwMzInMzMuOCJX!5e1!3m2!1ses-419!2sgt!4v1705175815952!5m2!1ses-419!2sgt" width="1000" height="1200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
    const map2 = <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d589.3840572614654!2d-91.54277!3d14.857938!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDUxJzI4LjgiTiA5McKwMzInMzMuOCJX!5e1!3m2!1ses-419!2sgt!4v1705176004910!5m2!1ses-419!2sgt" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
    return (
        <div className="container-map">   
            {tamanio.ancho <650 ? map2: map1 }
        </div>
    );
}



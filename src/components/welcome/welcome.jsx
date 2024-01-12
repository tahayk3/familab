import './welcome.css';
import foto from './welcome.jpg';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';

export default function Welcome(){
    return (
      <div className='container'>
        <div className='texto'>
          <Flip left>
            <h1 className='titulo'>Escuela Técnica de Laboratorio Clínico </h1>
            <p className='parrafo'>
              ¡Abre las puertas a tu futuro en salud! 🌐🔬 ¡Inscripciones abiertas para la carrera de Técnico en Laboratorio Clínico en Familab! 📚✨ Avalado por el Ministerio de Salud, con clases impartidas por Químicos Biólogos expertos. 🎓💉 En tan solo un año, transforma tu camino y sé parte del mundo de la salud. ¡El cambio comienza contigo! 🚀👩‍🔬👨‍🔬
            </p>
          </Flip>
        </div>

        <Roll >
          <img className='imagen' src={foto} alt="" />
        </Roll>

      </div>
    );
}



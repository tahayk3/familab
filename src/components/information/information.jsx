import react from "react";
import './information.css';
import logo from './img.png';
import imagen from '../gallery/1.jpg';
import Zoom from 'react-reveal/Zoom';


export default function Information(){
    return(
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Quiénes somos?</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                  Somos profesionales que cuentan con experiencia de más de 30 años en laboratorio clínico.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                 <img src={imagen} alt="" />
                  </dl>
                </div>
              </div>
              <Zoom left>
              <img
                src={logo}
                alt="Product screenshot"
                width={800}
                height={1}
              />
              </Zoom>
            </div>
          </div>
        </div>

        );
}
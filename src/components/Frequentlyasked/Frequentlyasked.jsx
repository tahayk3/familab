import react from "react";
import logo from '../welcome/logo.png'; 
import {features} from './features.js';

export default function Frequentlyasked(){
    return(
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Recuerda que puedes comunicarte con nosotros por medio de nuestras redes sociales</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Preguntas frecuentes</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Se ofrece aquí respuesta a una selección de las preguntas más frecuentes planteadas
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={logo}
            alt="Product screenshot"
            width={400}
            height={1}
          />
        </div>
      </div>
    </div>
    );
}
import './contact.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Fade from "react-reveal";

function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vhrc19i', 'template_ab4pvqr', form.current, 'NkfgxMIhCn1GbxMHZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  const people = [
    {
      name: 'Facebook',
      role: 'Visitar',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg',
      url: 
        'https://www.facebook.com/escuelatecnicadelaboratorioclinicofamilab',
    },
    {
        name: 'Instagram',
        role: 'Visitar',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
        url: 
        'https://www.instagram.com/escuela_familab',
      },
      {
        name: 'Tiktok',
        role: 'Visitar',
        imageUrl:
          'https://get-picto.com/wp-content/uploads/2023/02/logo-tiktok.webp',
        url: 
        'https://www.tiktok.com/@escuela_familab',
      },
      {
        name: 'Whatsapp',
        role: 'Visitar',
        imageUrl:
          'https://cdn.icon-icons.com/icons2/3685/PNG/512/whatsapp_logo_icon_229310.png',
        url: 
        'https://api.whatsapp.com/send?phone=50258078310',
      },
  ]

    return (

<div className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contáctate con nosotros</h2>
                <form className="formulario-contact" ref={form} onSubmit={sendEmail}>
                    <div class="relative z-0 w-full mb-12 group">
                        <input type="text" name="user_name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre y apellido</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="email" name="user_email" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electronico</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="message" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Consulta</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:black-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                </form>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        
            {people.map((person) => (
            <li key={person.name}>
                <div className="flex items-center gap-x-6">
                <Fade right>
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                </Fade>
                <div>
                    <Fade right>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    </Fade>
                    <Fade right>
                      <a href={person.url}><p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p></a>
                    </Fade>
                </div>
                </div>
            </li>
            ))}
        </ul>
    </div>
</div>

    );
}

export default Contact;
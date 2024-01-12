import React from 'react'
import Section from './comon/Section'

import commerce from '../assets/commerce.png'
import research from '../assets/research.png'
import web from '../assets/web.png'
import mobile from '../assets/mobile.png'

function Services() {

    const services = [
        {
            id : 1,
            image :commerce,
            title: "E-Commerce Website"
        },
        {
            id : 2,
            image :web,
            title: "Web Development"
        },
        {
            id : 3,
            image :mobile,
            title: "Mobile Development"
        },
        {
            id : 4,
            image :research,
            title: "Reach & Development"
        },
    ];
  return (
    <Section title='Services em'
    subtitle='orem ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime est in eius 
    maiores recusandae error, dicta earum non vitae omnis ipsam temporibus voluptate cum facere. Natus 
    dolores distinctio pariatur quisquam unde aut sapiente harum eveniet ut rem quas error, possimus 
    voluptatibus ullam architecto ab. Quo inventore quasi ab quod.'>

        <div className='grid gap-10 lg:grid-cols-2'>
            {
                services.map(({id, image, title})=>(
                    <div key={id} className=' flex flex-col items-center justify-center p-5 shadow-lg 
                     dark:shadow-gray-100 rounded-xl duration-300 ease-out hover:scale-105'>
                        <img src={image} alt={title} className=' w-36 h-36 md:w-44 md:h-44 object-contain'/>
                        <h3 className=' mt-5 text-base'>{title}</h3>
                    </div>
                ))
            }
        </div>
        
        
    </Section>
  )
}

export default Services
import React from 'react'
import Section from './comon/Section'
import avatar from '../assets/avatar.png'

function Testimonials() {

    const TESTIMONIALS =[
        {
            id:1,
            Image: avatar,
            name: 'Noorul Ain',
            comment:"Something obeny from this pallas reven such nights, marvelled i fowl rare this i,said tinkled soul door sir nobbed",
        },
        {
            id:2,
            Image: avatar,
            name: 'Hitesh',
            comment:"Shriked is and serephism and of my lining from and this, only bends it was shore for then , there said",
        },
    {
        id:3,
        Image: avatar,
        name: 'Purva',
        comment:"Rapping suddenly that she i was with my she of. If more the heard sculptured fiery no, what till gloating",
    },
    {
        id:4,
        Image: avatar,
        name: 'Rymeins',
        comment:"She is so cute & said that i was with my bestie of. If more the heard sculptured fiery no, what till gloating",
    },
];

  return (
    <Section title='Testimonials 💬' subtitle='This is what my other clients have to say about me. I
    accept clients from all around the world'>

        <div className=' max-w-xl flex flex-col gap-2'>
            {TESTIMONIALS.map(({id, Image, name, comment})=>(
                <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                    <div key={id} className=' w-1/3'> 
                        <img src={Image} alt="" 
                        className=' w-20 h-20 object-cover object-top pt-2'/>
                    </div>

                    <div className=' w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className=' text-xl font-semibold'>{name}</h3>
                        <p className=' text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
            ))}
        </div>

    </Section>
  )
}

export default Testimonials
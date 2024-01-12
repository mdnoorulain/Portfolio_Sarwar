import React from 'react'
import Section from './comon/Section'
import{FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import contact from '../assets/mobile.png'

function Contact() {

    const SOCIAL =[
        {
            id :1,
            link: "https://facebook.com",
            icon : <FaFacebook />,
        },
        {
            id :2,
            link: "https://instagram.com",
            icon : <FaInstagram />,
        },
        {
            id :3,
            link: "https://linkedin.com",
            icon : <FaLinkedin />,
        },
        
    ];
  return (
    <Section title="Contact em" subtitle='There are a ways you can get in touch with me. Hope to hear from you soon:)'
    >
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div >
                <img src={contact} alt="contact info" className=' w-32 h-32' />
            </div>

            <div>
                <p className=' max-w-xs md:max-w-lg font-extralight'>
                    I am open to talk regarding freelancing or full-time opportunities. fell free contact me using
                    your prefered medium.
                </p>
            </div>

            <div className=' flex w-full items-center justify-evenly text-3xl'>
                {SOCIAL.map(({id, link, icon})=>(
                    <a href={link} target="_blank" rel='noopener noreferrer'
                    className=' duration-200 ease-out hover:text-rose-600'>
                        {icon}</a>
                ))}
            </div>

            <div className='p-8 text-left w-full'>
                <form action="" method='POST'>
                    <div className=' gap-4 w-full'>
                        <div className='flex flex-col my-2'>
                            <label className=' capitalize text-sm py-2 font-extralight'>Name :</label>
                            <input type="text" name='name' className=' border-2 rounded-lg p-3 flex focus:outline-none
                             border-gray-400 dark:bg-gray-900 dark:text-white' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className=' capitalize text-sm py-2 font-extralight'>Phone :</label>
                            <input type="text" name='phone' className=' border-2 rounded-lg p-3 flex focus:outline-none
                             border-gray-400 dark:bg-gray-900 dark:text-white' />
                        </div>

                        <div className='flex flex-col my-2'>
                            <label className=' capitalize text-sm py-2 font-extralight'>Email :</label>
                            <input type="text" name='email' className=' border-2 rounded-lg p-3 flex focus:outline-none
                             border-gray-400 dark:bg-gray-900 dark:text-white' />
                        </div>

                        <div className='flex flex-col my-2'>
                            <label className=' capitalize text-sm py-2 font-extralight'>Message :</label>
                            <textarea name="message" rows="10" className=' border-2 rounded-lg p-3 flex focus:outline-none
                             border-gray-400 dark:bg-gray-900 dark:text-white resize-none'>

                            </textarea>
                            
                        </div>

                    </div>
                    <div className=' flex items-center justify-center'>
                        <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3
                        font-bold uppercase rounded-md'>
                            send message
                        </button>
                    </div>

                </form>
            </div>
        </div>

    </Section>
  )
}

export default Contact
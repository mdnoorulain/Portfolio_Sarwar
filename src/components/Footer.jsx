import React from 'react'

function Footer() {
  return (
    <section className=' max-h-fit flex flex-col justify-start items-center py-16 px-5 text-center'>
        <p className=' max-w-xl font-light text-gray-500 mb-10'>
        © 2024  <a href="https://github.com/mdnoorulain" 
        className=' pl-1 cursor-pointer hover:text-gray-400'
        target='_blank' rel='noopener noreferrer'>
              Noorul Ain</a>    </p>
    </section>
  )
}

export default Footer
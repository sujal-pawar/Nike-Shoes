import React from 'react'
import footerLogo from '../assets/images/footer-logo.svg'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'
import { copyrightSign } from '../assets/icons'

const footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} alt="footerlogo" 
            width={150}
            height={46}/>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get Shoe ready for the new term at your nearest Nike Store</p>

          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon)=>(
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
          </div>

          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-6'>
              {footerLinks.map((section)=>(
                <div key={section}>
                  <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                  <ul>
                    {section.links.map((link)=>(
                      <li key={link.name}  className='mt-3 font-montserrat text-base leading-normal'>
                        <a href="/" className=' hover:text-slate-gray cursor-pointer text-white-400'>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center gap-2'>
              <div className='flex flex-1 justify-start'> 
                <img src={copyrightSign} alt="copyright" width={20} height={20} className='rounded-full m-0' />
                <p className='px-4'>Copyright. All rights reserved.</p>
              </div>
              <p className='font-montserrat text-white'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default footer

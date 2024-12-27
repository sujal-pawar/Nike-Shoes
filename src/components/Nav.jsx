import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    function toggleSidebar () {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className='padding-x py-4 absolute z-10 w-full shadow-lg bg-white'>
                <nav className='flex justify-between items-center max-container'>
                    <a href="/">
                        <img src={headerLogo} alt="Logo" width={130} height={29} />
                    </a>

                    <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden max-md:block' onClick={toggleSidebar}>
                        <img src={hamburger} alt="hamburger" width={25} height={25}/>
                    </div>
                </nav>
            </header>
            {isSidebarOpen && (
                <aside className='fixed top-0 right-0 w-60 max-md:w-43 h-full bg-slate-300 shadow-lg z-10'>
                    <button onClick={toggleSidebar} className='absolute top-4 right-9'>
                        <span className='text-2xl text-red-500'>X</span> 
                    </button>
                    <ul className='flex flex-col mt-10 justify-center items-center p-4'>
                        {navLinks.map((item) => (
                            <li key={item.label} className='m-5'>
                                <a href={item.href} className='font-montserrat font-medium tracking-tighter hover:text-red-600  leading-normal text-lg text-slate-gray'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </>
    )
}

export default Nav

import React,{useContext} from 'react'
import {MdDarkMode,MdLightMode} from 'react-icons/md'
import { ThemeContext } from '../context/ThemeContext';
import {Link} from 'react-router-dom'
const Navbar = () => {
    const {mode,theme,changeMode}=useContext(ThemeContext)
    return ( 
        <section className={`flex flex-row justify-between items-center md:px-20 px-4 py-5  shadow-md`} style={{backgroundColor:theme.elemntBackground,color:theme.titleColor}}>
           <Link to={'/'}>
            <div className=''>
                <p className="md:text-2xl text-lg font-bold">Where in the World?</p>
            </div>
            </Link>
            <div>
              <div className=' flex flex-row gap-4 items-center'>
                <button className='scale-[2] rounded-full hover:bg-[#8C8C8C33] p-[2px]' onClick={changeMode}>
                    {mode === 'dark' ? <MdDarkMode></MdDarkMode> : <MdLightMode></MdLightMode>}
                </button>
                <div className='font-[600]'>
                    {mode === 'dark' ? <p>Dark Mode</p>:<p>Light Mode</p>}
                </div>
              </div>
            </div>
        </section>
     );
}
 
export default Navbar;
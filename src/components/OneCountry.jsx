import { ThemeContext } from '../context/ThemeContext';
import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import { AllcountriesContext } from '../context/AllcountriesContext';
const OneCountry = ({country}) => {
    const {theme} = useContext(ThemeContext);
    const {selectedCountry,setSelectedCountry}=useContext(AllcountriesContext)
    return ( 
    <Link to='/countryDetails' onClick={()=> setSelectedCountry(country)}>
    <article >
             <div className='w-full shadow-lg' style={{background:theme.elemntBackground}}>
                <div>
                    <img className='w-full xl:h-[200px] h-[170px] ' src={country.flag} alt="flag" />
                </div>
                <div className='px-4 py-6 pb-12 xl:h-[20vw] h-[250px]'>
                    <h2 className=' text-3xl font-bold mb-4' style={{color:theme.titleColor}}>{country.name.commonName}</h2>
                    <div>
                        <h3 className=' font-semibold text-lg' style={{color:theme.titleColor}}>Population : <span className=' font-normal text-base opacity-90' style={{color:theme.textColor}}>{country.population.toLocaleString()}</span></h3>
                        <h3 className=' font-semibold text-lg' style={{color:theme.titleColor}}>Region : <span className=' font-normal text-base opacity-90' style={{color:theme.textColor}}>{country.region.main}</span></h3>
                        <h3 className=' font-semibold text-lg' style={{color:theme.titleColor}}>Capital : <span className=' font-normal text-base opacity-90' style={{color:theme.textColor}}>{country.capital}</span></h3>
                    </div>
                </div>
             </div>
        </article>
    </Link>
     ); 
    }
export default OneCountry;
import React,{useContext,useState} from 'react'
import { AllcountriesContext } from '../context/AllcountriesContext';
import { ThemeContext } from '../context/ThemeContext';
import {MdExpandMore} from 'react-icons/md'
const FilterForm = () => {
  const { theme } = useContext(ThemeContext);
  const { regionSelected,setRegionSelected } = useContext(AllcountriesContext);
  const [isList,setIsList]=useState(false);
  const handleClick=()=>{
    setIsList(!isList)
  }
    return ( 
        <section className="md:w-[250px] h-full relative" >
                <button className='flex flex-row items-center justify-between w-full px-3 py-2 rounded-sm shadow-lg' style={{backgroundColor:theme.elemntBackground,color:theme.titleColor}} onClick={handleClick}>
                    <div><p>{regionSelected}</p></div>
                    <div className='' style={{rotate:!isList?undefined:'180deg'}}><MdExpandMore></MdExpandMore></div>
                </button>
                {isList && 
                (
                    <div className="choices mt-2 absolute w-full shadow-lg">
                    <button className='w-full px-3 py-2 text-left rounded-t-md hover:brightness-125 ' style={{backgroundColor:theme.elemntBackground,color:theme.titleColor}} onClick={()=>{setRegionSelected('Africa'); setIsList(false)}}>Africa</button>
                    <button className='w-full px-3 py-2 text-left  hover:brightness-125' style={{backgroundColor:theme.elemntBackground,color:theme.titleColor}} onClick={()=>{setRegionSelected('Americas'); setIsList(false)}}>Americas</button>
                    <button className='w-full px-3 py-2 text-left  hover:brightness-125' style={{backgroundColor:theme.elemntBackground,color:theme.titleColor}} onClick={()=>{setRegionSelected('Europe'); setIsList(false)}}>Europe</button>
                    <button className='w-full px-3 py-2 text-left  hover:brightness-125' style={{backgroundColor:theme.elemntBackground,color:theme.titleColor}} onClick={()=>{setRegionSelected('Asia'); setIsList(false)}}>Asia</button>
                    <button className='w-full px-3 py-2 text-left rounded-b-md hover:brightness-125' style={{backgroundColor:theme.elemntBackground,color:theme.titleColor}} onClick={()=>{setRegionSelected('Oceania'); setIsList(false)}}>Oceania</button>
                    <button className='w-full px-3 py-2 text-left rounded-b-md hover:brightness-125' style={{backgroundColor:theme.elemntBackground,color:theme.titleColor}} onClick={()=>{setRegionSelected('Antarctic'); setIsList(false)}}>Antarctic</button>
                    <button className='w-full px-3 py-2 text-left rounded-b-md hover:brightness-125' style={{backgroundColor:theme.elemntBackground,color:theme.titleColor}} onClick={()=>{setRegionSelected('Filtered by region'); setIsList(false)}}>disable Filter</button>
                </div>
                )}
        </section>
     );
}
 
export default FilterForm;
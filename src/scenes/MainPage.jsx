import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import SearchForm from '../components/SearchForm';
import FilterForm from '../components/FilterForm';
import OneCountry from '../components/OneCountry';
import { AllcountriesContext } from '../context/AllcountriesContext';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
const MainPage = () => {
    const {mode,theme,changeMode}=useContext(ThemeContext)
    const {countriesList}=useContext(AllcountriesContext)
    console.log('here how the list come ',countriesList)
    return ( 
        <section className="pt-5">
            <section className='flex md:flex-row flex-col gap-y-4 justify-between px-8'>
            <SearchForm></SearchForm>
            <FilterForm></FilterForm>
            </section>
            <section className='mx-14 mt-20 grid md:grid-cols-4 grid-cols-1 gap-8'>
                {countriesList.map((country)=>{
                    return <OneCountry country={country} key={uuidv4()}></OneCountry>
                })}
            </section>
        </section>
     );
}
 
export default MainPage;
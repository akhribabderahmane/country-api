import React,{useContext} from "react";
import MainPage from "./scenes/MainPage";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";
import AllcountriesContextProvider from "./context/AllcountriesContext";
import CountryDetails from "./scenes/CountryDetails";
import {Routes,Route} from 'react-router-dom'


function App() {
  const {theme}=useContext(ThemeContext)
  return (
    <div className="app min-h-screen min-w-full pb-10 " style={{backgroundColor:theme.background}}>
     <Navbar></Navbar>
     <AllcountriesContextProvider>
      <Routes>
        <Route path="/country-api" element={<MainPage />} />
        <Route  path="/countryDetails" element={<CountryDetails />}/>
      </Routes>
     </AllcountriesContextProvider>
     </div>
  );
}
export default App;

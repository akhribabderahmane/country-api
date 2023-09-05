import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext";
import { AllcountriesContext } from "../context/AllcountriesContext";

const SearchForm = () => {
  const { theme } = useContext(ThemeContext);
  const { searchName,setSearchName } = useContext(AllcountriesContext);
  const handleChange=(e)=>{
    e.preventDefault();
    setSearchName(e.target.value)
  }
  return (
    <section className="md:w-[400px] w-full">
      <article
        className=" flex flex-row items-center  shadow-lg px-2 py-2  rounded-sm"
        style={{
          backgroundColor: theme.elemntBackground,
          color: theme.titleColor,
        }}
      >
        <div>
          <AiOutlineSearch className=" scale-125" />
        </div>
        <div>
          <input
            type="text"
            className=" outline-none ml-2 font-semibold w-full"
            placeholder="Search for Country..."
            style={{
              backgroundColor: theme.elemntBackground,
              color: theme.textColor,
            }}
            value={searchName}
            onChange={(e)=>handleChange(e)}
          />
        </div>
      </article>
    </section>
  );
};

export default SearchForm;

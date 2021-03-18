import React, { useState } from "react";
import "./ImageSearch.css"

const ImageSearch = ({ getRes }) => {

    const [value, setValue] = useState("");           

    function handleSubmit(e) {

        e.preventDefault();

        getRes(value);
    }
  
    return (
    <div className="wrapper">
      
      <form onSubmit={handleSubmit} className="imgform">
      
        <span className="box">
        
          <input
            autoComplete="off"
            name="searchValue"
            placeholer=" Search for an image"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
          
        </span>
        
        <button> Search</button>
      
      </form>
    
    </div>
  );
};

    
export default ImageSearch;
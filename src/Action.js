import React from 'react'
import { useState } from "react";
import './App.css';

function MyForm() {
    const [Data, input] = useState("");
  
    return (
        <div className='container' >
     
          <input
            type="text" 
            value={Data}
            onChange={(e) => input(e.target.value)}
          />
       
        <br></br>

       
          <input
            type="text" 
            value={Data}
            onChange={(e) => input(e.target.value)}
          />
        </div>
    )
  }
  export default MyForm;
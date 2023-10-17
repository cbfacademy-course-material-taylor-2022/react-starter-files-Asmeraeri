import React from "react";
import Header from './components/Header;
import {Link} from 'react-router-dom';


function header {
  return <>   
    <h1> My Bookcase</h1>
    <Link to= "/"> Home </Link>
    <Link to="/bookcase" className="bookLink"> Bookcase</Link>

</>

}

export default header
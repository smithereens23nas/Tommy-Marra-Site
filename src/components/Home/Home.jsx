import React from "react";
import "./styles.css";
import { FaTicketAlt } from "react-icons/fa";
import {Link} from 'react-scroll'
 

const Home = () => {

  return (
    <div className="cover-pg-container">
      <img className="cover-img-2" src={"/Guitar-sunset.png"} alt="Guitar" />
      <button
        className="btn btn-position"
        
      >
        <Link to="tickets" smooth="true">Buy Tickets</Link>
        <FaTicketAlt className="icon-pos" />
      </button>
    </div>
  );
};

export default Home;

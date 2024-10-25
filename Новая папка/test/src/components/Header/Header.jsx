import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsBasket } from "react-icons/bs";
import './header.css';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className='container-header' onClick={toggleMenu}>
      <h1 className='header-h1'>text</h1>
      <div className="parent-search">
      </div>

      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`parent-link ${isOpen ? 'open' : ''}`}>
          <>
       
          </>
          <>
     
          </>
      </div>
    </div>
  );
}

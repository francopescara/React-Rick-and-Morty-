import React, { useState } from 'react'

export const Footer = () => {
  const [clicks,setClicks] = useState(0);
  const year=new Date().getFullYear();
  const companyName="franco.sa";

  const handleClick=()=>{
    setClicks(clicks + 1);
    
  }
  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; {year} {companyName} Clicks={clicks} </p>
         <span
            className="d-flex align-itms-center mb-2 mb-lg-0 text-white text-decoration-none"
              onClick={handleClick}
          >              <img className="App-logo" 
               height="15" 
               src="perro.jpg" 
               alt="perro-giratorio" 
              />
          </span>
    
          
        <ul className="nav col-md-4 justify-content-end"/>
        
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
        
      </ul>
    </footer>
  </div>
  )
}



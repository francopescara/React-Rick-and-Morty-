import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({mascota}) => {
  
  return (
    <div className="col">
                <div className="card shadow-sm">
                  <img  width="100%"  src={mascota.image} alt="imagen" />
                  <h3 className='mb-0 text-dark '>{mascota.name}</h3>
                  <div className="card-body">
                    <p className="card-text"> {mascota.origin.name} 
                    {mascota.origin.dimension}
                    </p>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button 
                        type="button" 
                        className="btn btn-sm btn-outline-secondary">
                          <Link to={`/details/${mascota.id}`} className="nav-link">
                            
                          Detalle
                            </Link>
                          </button>
                        
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Card

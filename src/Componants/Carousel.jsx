import React from 'react'

export default function Carousel() {
  return (
    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{dataBsInterval:"5000"}}>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <div className="row">
                        <div className="col-md-4">
                        <img className="w-100 imgcarousel" src="/Images/Laptop.png" alt="..."/>
                        </div>
                        <div className="col-md-8" style={{background:"gray",color:"white"}}>
                            <div className="row mt-5">
                                <div className="col-md-2"></div>
                                <div className="col-md-6">
                                <p style={{fontSize:"30px"}}>The PassBox® Is India’s Largest Online Store For Medical Devices, Equipment & Consumables</p><br/>
                            <p style={{fontSize:"20px"}}>Single Window For Procurement Of Medical Devices Required At Hospitals & Home</p>
                            <button className='btn btn-warning w-50' style={{borderRadius:"50px",color:"white"}}>Shop Now</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                 
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                <div className="row">
                        <div className="col-md-4">
                        <img className="w-100 imgcarousel" src="/Images/seller1.jpeg" alt="."/>
                        </div>
                        <div className="col-md-8" style={{background:"gray",color:"white"}}>
                            <div className="row mt-5">
                                <div className="col-md-2"></div>
                                <div className="col-md-6">
                                <p style={{fontSize:"30px"}}>The PassBox® Is Largest Network Of Manufacturers, Wholesalers, Distributors & Re-Sellers In India</p><br/>
                            <p style={{fontSize:"20px"}}>Nexus Worth To Share Their Products At Affordable Rates Across Nation</p>
                            <button className='btn btn-warning w-50' style={{borderRadius:"50px",color:"white"}}>Register Now</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                 
                    
                </div>
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
  )
}

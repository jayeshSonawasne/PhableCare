import React from 'react'
import ReactPlayer from 'react-player'

export default function Sixth() {
  return (
    <div className='container py-5'>
        <div className="row">
            <div className="col-md-4">

            </div>
            <div className="col-md-5  text-center">
                <h2>2M+ Indians are getting better care, everyday.</h2>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8"> <p>Embrace the future and join our growing community.</p></div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-1"></div>
         
            <div className="col-md-10">   
                    <ReactPlayer width='100%' controls url="https://youtu.be/LhtIOcbXQKg"/>
            </div>
            
            <div className="col-md-1"></div>
                </div>


                <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://www.phablecare.com/assets/img/svg/video-section/ej-man-img-1.svg" alt="" />
                            </div>
                            <div className="col-md-9">
                            <b>Venkobachar</b><br/>ISCHEMIC HEART DISEASE
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://www.phablecare.com/assets/img/svg/video-section/ej-lady-img-2.svg" alt="" />
                            </div>
                            <div className="col-md-9">
                            <b>Umamaheshwari</b><br/>HYPERTENSION CARE
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://www.phablecare.com/assets/img/svg/video-section/ej-lady-img-1.svg" alt="" />
                            </div>
                            <div className="col-md-9">
                            <b>Shashikala</b><br/>HYPERTENSION CARE
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://www.phablecare.com/assets/img/svg/video-section/ej-man-img-2.svg" alt="" />
                            </div>
                            <div className="col-md-9">
                            <b>Jayachandra Pai</b><br/>DIABETES CARE
                            </div>
                        </div>

                    </div>
                </div>
    </div>
  )
}

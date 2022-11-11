import React from 'react'
import './Scrolling.css'

export default function Seller() {
  return (
    <div className='container mt-5'>
            <div className="row justify-content-center" >
                <div className="col-md-4">
                <img src="https://www.phablecare.com/assets/img/doctor-consultation/ej-doc-cons-sec-4-col-2-phn-banr.png" className='position-absolute' alt="..."  width={195}/>
                <img src="/Images/as-a-seller.gif" width={195} alt="..." />                    
                </div>
                <div className="col-md-6  scrollbardiv overflow-auto" style={{height:"410px"}}>
                <div>                    
                    <h3>How to register to sell your products on The PassBox®? <br/>You can quickly register your business with The PassBox® by filling few of important information of your business.</h3>
                    <p>Create your account. <br/>Fill the details and get it auto verified by system, like PAN, GST, and Bank Details etc.<br/> Attach relevant documents to get eligibility to sell medical devices.<br/> Login with your login id and password.</p>
                </div>
                <div style={{marginTop:"160px"}}>
                    <h3>Upload your products… </h3>
                    <p>Go to Seller’s dashboard. <br/>Select product option. <br/>Add new product. <br/>Fill the required details.<br/> Add product’s detailed specifications.Add the high quality photos and videos of your product for more visibility.<br/>Fill the pricing and other ommercials. <br/>Upload the inventory.<br/> ere we go! After approval your product ready to go live…</p>
                </div>
                <div style={{marginTop:"220px"}}>
                    
                    <h3>Get orders for your product.</h3>
                    <p>Order placed for your product will be served to you only, and not to others. You will get direct intimation about your order. Accept your order and dispatch it soon to nearest The PassBox® warehouse. After the waiting period for return is over, get your payment</p>
                </div>
                <div style={{marginTop:"270px"}}>
                    <h3>Fast payment option </h3>
                    <p>fter the waiting period is over (i.e. 7 days), you will receive your payment in no delay than 7 days.</p>                
                </div>
                </div>
            </div>
        </div>
  )
}

import React from 'react'
import './Scrolling.css'

export default function Buyer() {
  return (
    <div className='container mt-5'>
            <div className="row justify-content-center " >              
                <div className="col-md-6  scrollbardiv overflow-auto" style={{height:"410px"}}>
                <div>                    
                    <h3>How to register to buy products?<br/> As a buyer you can easily buy any product from The PassBox® as a guest checkout option</h3>
                    <p>Just select product.<br/> Add it to cart. <br/>Go to Cart. <br/>Select your desired quantity.<br/> Make secure and safe payment. <br/>And it’s done.<br/> Your order is placed.</p>
                </div>
                <div style={{marginTop:"160px"}}>
                    <h3>If you are doctor or hospital or corporates or even seller (as a buyer), then you can avail an option of registering  ourself by providing few details.</h3>
                    <p>Generate your Login ID & Password.<br/> Login with your details.<br/> Select product. <br/>Add it to cart. <br/>Go to Cart.<br/> Show gif of this  process Select your desired quantity. <br/>Put / edit your shipping address. <br/>Make secure and safe payment. <br/>And it’s done.<br/> Your order is placed. </p>
                </div>
                <div style={{marginTop:"220px"}}>                    
                    <h3>Track your order </h3>
                    <p>You can track your order through every step of action, with unique Order ID. Just click on “My Account” And check the status.</p>
                </div>
                <div style={{marginTop:"270px"}}>
                    <h3>Easy Return & Refund </h3>
                    <p>Now you can easily return the product and get your 100% money refund quickly. You can return the product at its original condition and with original packing material within 7 days from the date of receipt of product. </p>                
                </div>
                </div>
                <div className="col-md-4">
                    <img src="https://www.phablecare.com/assets/img/doctor-consultation/ej-doc-cons-sec-4-col-2-phn-banr.png" className='position-absolute' alt="..."  width={195}/>
                <img src="/Images/As-a-buyer.gif"  width={195} alt="..." />                    
                </div>
            </div>
        </div>
  )
}

import React from 'react'
import './contact.css'
import {SlLocationPin,SlPhone} from 'react-icons/sl'
import {TfiEmail} from 'react-icons/tfi'


const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-content'>
            <div className='contact-heading'>
                <h1>Have some questions, proposals or want to work together ?</h1>
                <h3>Shoot a  message</h3>
            </div>
            <form action="" className='form'>
                <div className="form-group">
                    <div>
                        <label htmlFor="">Full Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email"/>
                    </div>
                </div>
                <div className='textarea-group'>
                    <label htmlFor="">Message</label>
                    <textarea className='textarea'></textarea>
                </div>
                <div className='input-box'>
                    <button type='submit'>Shoot <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg></button>
                  
                </div>
                <hr />
                <div className="contact-information">
                    <h3>Contact information</h3>
                    <div><SlLocationPin/> Stupska 19, Sarajevo</div>
                    <div><SlPhone/> +387 63 463 589</div>
                    <div><TfiEmail/> amir.celjo2@gmail.com</div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact

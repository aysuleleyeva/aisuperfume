import React from 'react'
import './Footer';
import './Style.css';
import {Link} from 'react-router-dom';
import { ReactComponent as Instagram } from '../instagram.svg';
import {ReactComponent as Facebook} from '../facebook2.svg';
import {ReactComponent as Whatsapp} from '../whatsapp.svg';
import {ReactComponent as Twitter} from '../twitter2.svg';
import { FontSizeOutlined } from '@ant-design/icons';
const Contacts = () => {
  return (
    <div>
       <h1>CONTACT US</h1>
       <div className='formContact'>
        
        <form>
        
          <ul>
          
         <li><input placeholder=' Name' className='input-contact' type='text' required/></li>
      
        
        
          <li><input placeholder=' Surname' className='input-contact' type='text'required/></li>
        
        
    
         <li><input placeholder=' Number' className='input-contact'type='number'required/></li> 
       
    
         <li><input placeholder=' Email' className='input-contact'type='email'required/></li> 
        
        
        <li><input placeholder=' Message' className=' topic' type='text'required/></li> 
       
       
       <li><input  type="submit" value="Send Request" className='submit' /></li>
          </ul>
          </form>
          <div>
      <h3 id='h3'>CONTACT DETAILS</h3>
      
      <p className='contactDetail'>Gmail : aisuperfume@gmail.com</p>
      <p className='contactDetail'> Phone : +994 55 551 60 02</p>
      <p className='contactDetail'> Phone : +994 55 551 60 01</p>
      <p className='contactDetail'> Phone : +994 55 551 60 00</p>
      <div className='svg-logos'>
      <Link to="https://www.instagram.com/aysu_llyva?igsh=cmMweTJoYnNkZ25o">  <Instagram/></Link>      
       <Facebook/>
       <Whatsapp/>
       <Twitter/>
      </div>
      
      {/* 
            
      <FontAwesomeIcon icon={faTwitter} style={{margin:10}} />
      <FontAwesomeIcon icon={faFacebook} style={{margin:10}} />
      <FontAwesomeIcon icon={faWhatsapp} style={{color:'black',margin:10}} /> */}
     </div>
       </div>
     
    </div>
  )
}

export default Contacts

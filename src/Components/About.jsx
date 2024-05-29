import React from 'react'
import foto1 from './image/perfume11.jpg';
import foto2 from './image/perfume14.jpg';
import './Style.css';
const About = () => {
  return (
    <div>
        <div className='about-div1'>
            <img src={foto1} alt="parfum" />
            <p>
            Welcome to Aisu perfume, your premier destination for exquisite fragrances. Nestled in the heart of Baku, our shop offers a curated selection of perfumes from the world's most renowned and niche brands. Whether you are seeking a timeless classic, a bold new scent, or a personalized fragrance experience, Aisu perfume is here to guide you on your olfactory journey.
            Our events are designed to immerse you in the world of fragrance, offering a sensory escape and a deeper appreciation for the craft. A beautiful fragrance makes for an unforgettable gift. Whether for a loved one or a special occasion, our elegant gift-wrapping service adds a touch of luxury to your purchase. Not sure which scent to choose? Our gift cards allow the recipient to enjoy the pleasure of selecting their own perfect fragrance.
            </p>
        </div>
        <div className='about-div2'>
         
          <p> Aisu perfume is here to guide you on your olfactory journey.
             We offer exclusive in-store experiences that elevate your visit to Aisu perfume. Join us for fragrance workshops, where you can learn about the art of perfumery and even create your own bespoke scent. Our events are designed to immerse you in the world of fragrance, offering a sensory escape and a deeper appreciation for the craft.
             A beautiful fragrance makes for an unforgettable gift. Whether for a loved one or a special occasion, our elegant gift-wrapping service adds a touch of luxury to your purchase. Not sure which scent to choose? Our gift cards allow the recipient to enjoy the pleasure of selecting their own perfect fragrance.
              Voluptate, eius totam. Vitae animi eligendi velit omnis praesentium placeat eum odit. Sit amet consectetur adipisicing elit. Esse, sapiente rem! Omnis commodi placeat, perferendis temporibus quo cumque! Sunt quia porro, dicta commodi rerum iure provident. Eum odio molestiae laudantium?
              </p>
              <img src={foto2} alt="parfum" />
        </div>
        
    </div>
  )
}

export default About

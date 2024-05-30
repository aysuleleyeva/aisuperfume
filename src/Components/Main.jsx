import React from 'react'
import image from './image/perfume19.jpg'
import './Style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PerfumeCard from './PerfumeCard';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import img1 from './image/perfume4.jpg';

import SaleBanner from './SaleBanner';
import foto1 from './image/Maskgroup1.jpg';
import foto2 from './image/Maskgroup.png';
import {ReactComponent as Scroll} from '../angle.svg';
const Main = () => {
 
  const [showScroll, setShowScroll] = useState(false);

  const scroll = () => {
    if (window.scrollY > 20) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scroll);
    
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const perfumes = [
    {
      id: '1011',
      image: 'https://www.sephora.com/productimages/product/p470257-av-15-zoom.jpg?imwidth=270',
      name: 'Mini Black Opium & Libre Eau de Parfum Set',
      description: 'Yves Saint Laurent',
      price: '$250',
    },
    {
      id: '1021',
      image: 'https://www.sephora.com/productimages/product/p474316-av-21-zoom.jpg?imwidth=270',
      name: 'Miss Dior Eau de Parfum',
      description: 'Dior',
      price: '$200',
    },
    {
      id: '1031',
      image: 'https://www.sephora.com/productimages/product/p258612-av-1-zoom.jpg?imwidth=270',
      name: 'CHANEL CHANCE EAU TENDRE Eau de Toilette',
      description: 'CHANEL',
      price: '$145',
    },
    {
      id: '1041',
      image: 'https://www.sephora.com/productimages/product/p508460-av-1-zoom.jpg?imwidth=270',
      name: 'Dolce&Gabbana Q Eau de Parfum',
      description: 'Dolce&Gabbana.',
      price: '$270',
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className='divmain'>
      <nav className='nav2-main'>
      <SaleBanner/>
        <img  className='main-image' src={image}/>
        </nav>
        <nav className='nav1-main'>
          <table >
            <th>
               <h2>Categories</h2>
            </th>
            <tr>
              <td>
              <p>WOMEN'S PERFUME </p>
              </td>
            </tr>
            <tr>
              <td>
              <p>MEN'S COLOGNE</p>
              </td>
              </tr>
            <tr>
              <td>
              <p><a  className='catecorie_bestsellers' href='#bestsellers'>BEST SELLERS</a></p>
              </td>
            </tr>
            <tr>
              <td>
              <p>BRANDS</p>
              </td>
            </tr>
            <tr>
              <td>
              <p>NEW IN</p>
              </td>
            </tr>
          </table>
        </nav>
       
    
    
      </div>
        
      <h2 className='slogan'> More than perfume</h2>
      <div className='perfume-cards'>
        <h4 className='best_seller' id='bestsellers' >BEST SELLERS</h4>
          <Slider {...settings}>
            {perfumes.map((perfume, index) => (
              <PerfumeCard
                productId={perfume.id}
                key={index}
                image={perfume.image}
                name={perfume.name}
                description={perfume.description}
                price={perfume.price}
              />
            ))}
          </Slider>
        </div>
        <br/><br/> <br />
        <div className='our_history'>
          <section>
             <p className='history_head'>OUR HISTORY</p>
             <p>Welcome to Aisu perfume, your premier destination for exquisite fragrances. Nestled in the heart of Baku, our shop offers a curated selection of perfumes from the world's most renowned and niche brands. Whether you are seeking a timeless classic, a bold new scent, or a personalized fragrance experience, Aisu perfume is here to guide you on your olfactory journey.
             We offer exclusive in-store experiences that elevate your visit to Aisu perfume. Join us for fragrance workshops, where you can learn about the art of perfumery and even create your own bespoke scent. Our events are designed to immerse you in the world of fragrance, offering a sensory escape and a deeper appreciation for the craft.
             A beautiful fragrance makes for an unforgettable gift. Whether for a loved one or a special occasion, our elegant gift-wrapping service adds a touch of luxury to your purchase. Not sure which scent to choose? Our gift cards allow the recipient to enjoy the pleasure of selecting their own perfect fragrance.
              </p>
              
          </section>
          <br/>
          <section> 
                    
          <img className='history-img1' src={foto1}/>
          <img className='history-img2' src={foto2}  alt="perfume" />
          </section>

          </div>
          <button id='scrollToTopMain' onClick={scrollToTop}>
               <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
</svg>

          </button>
        <br /><br />
    </div>
  )
}

export default Main


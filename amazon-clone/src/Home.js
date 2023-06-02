import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt=''>
            </img>
            <div className='home__row'>
                <Product 
                id='0987'
                title='Ariete Metal Coffee Machine 1312, 1600 Watt, 15 Bar, 220 g Bean Capacity, Grinding Adjustment, Digital Display, ESE Pod Compatible, Maxi Cappuccino Device, Silver.'
                price={87890}
                image='https://m.media-amazon.com/images/I/61q6xiHfUPL._SX679_.jpg'
                rating={3} />
    
                <Product 
                id='6789'
                title='Flexnest The Flexbangle Wrist & Ankle Weights Set, Adjustable & Sweat Resistant for Pilates, Cardio & Excersices .'
                price={2390}
                image='https://m.media-amazon.com/images/I/51bi2fZl1UL._SL1276_.jpg'
                rating={4}
                />
            </div>

            <div className='home__row'>
                <Product
                id='12345' 
                title='Vifitkit 4mm Anti-Skid EVA+TPE Yoga Mat with Carry Bag for Home Gym & Outdoor Workout for Men & Women, Water-Resistant, Easy to Fold (Bottle Green)'
                price={1499} 
                image='https://m.media-amazon.com/images/I/51avQ++ZWrL._SX679_.jpg' 
                rating={4}
                />
                <Product
                id='6543'
                title='New Apple AirPods Max -Sky Blue .'
                price={59900}
                image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022365000'
                rating={3}
                />
                <Product
                 id='8765'
                 title='Apple Watch SE (2nd Gen)[GPS + Cellular 44 mm]smart watch w/Starlight Aluminium Case & Starlight Sport Band Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display,Water Resistant .'
                 price={32900}
                 image='https://m.media-amazon.com/images/I/71fkqcNBppL._SL1500_.jpg'
                 rating={3}
                />
            </div>

            <div className='home__row'>
                <Product
                id='4321'
                title='FUNTERIOR Blueberry 2+2+1 Suede Fabric 6 Seater Dark Grey Sofa Set with arm Chair Yellow Printed Fabric.'
                price={98500}
                image='https://m.media-amazon.com/images/I/71rVuHT+naL._SX679_.jpg'
                rating={3}
                />
                <Product
                id='3478'
                title='Heapwell Superfoods Japanese Matcha Green Tea Powder, 50g (50 servings) | Sourced from Shizuoka, Japan'
                price={699}
                image='https://m.media-amazon.com/images/I/81pnYVmWvWL._SX679_.jpg'
                rating={3}
                />
            </div>


        </div>
    </div>
  )
}

export default Home

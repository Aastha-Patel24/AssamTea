// src/components/ProductDisplay.js
import React from 'react';
import './Wcu.css'; // Custom styles

// Import images
import i1 from '../assets/images/i1.png';
import i2 from '../assets/images/i2.png';
import i3 from '../assets/images/i3.png';
import i4 from '../assets/images/i4.png';


const Wcu = () => {
  return (
    <div className='main-WCU'>
        <div className='WCU-heading'>
            <h1> Why Choose Us ? </h1>
        </div>
        <div className='WCU-content'>
            <div className='WCU-card'>
                <div className='WCU-crd-1'>
                    <div className='WCU-img'>
                        <img src={i1} alt="Black Tea" className="product-image" />
                    </div>
                </div>
                <div className='WCU-crd-2'>
                    <h1> Bold, Malty Flavor </h1>
                    <p>
                        Assam tea is renowned for its strong, robust, <br/>
                        and often malty taste, making it perfect for <br/>
                        those who prefer a full-bodied brew that <br/>
                        stands up well to milk and sugar.
                    </p>
                </div>
            </div>
            <div className='WCU-card'>
                <div className='WCU-crd-1'>
                    <h1> Energizing Start </h1>
                    <p>
                        Its naturally high caffeine content provides an <br/>
                        invigorating boost, making it an ideal choice <br/>
                        to kickstart your day or for an <br/>
                        afternoon pick-me-up.
                    </p>
                </div>
                <div className='WCU-crd-2'>
                    <div className='WCU-img'>
                        <img src={i2} alt="Black Tea" className="product-image" />
                    </div>
                </div>
            </div>
            <div className='WCU-card'>
                <div className='WCU-crd-1'>
                    <div className='WCU-img'>
                        <img src={i3} alt="Black Tea" className="product-image" />
                    </div>
                </div>
                <div className='WCU-crd-2'>
                    <h1> Versatility </h1>
                    <p>
                        Whether you enjoy it black, with milk and <br/>
                        sugar, or as the base for spiced chai, <br/>
                        Assam tea's strength allows it to be <br/>
                        enjoyed in numerous ways.
                    </p>
                </div>
            </div>
            <div className='WCU-card'>
                <div className='WCU-crd-1'>
                    <h1> Rich in Antioxidants </h1>
                    <p>
                        Like all true teas, Assam tea is packed <br/>
                        with beneficial antioxidants that contribute <br/>
                        to overall well-being and may help protect <br/>
                        against various diseases.
                    </p>
                </div>
                <div className='WCU-crd-2'>
                    <div className='WCU-img'>
                        <img src={i4} alt="Black Tea" className="product-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Wcu;
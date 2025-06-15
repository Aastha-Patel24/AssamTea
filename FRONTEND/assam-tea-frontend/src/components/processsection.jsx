import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './processsection.css';

// ✅ Image imports
import Harvesting from '../assets/Images/Harvesting.jpg';
import Processing from '../assets/Images/Processing.jpg';
import Packaging from '../assets/Images/Packaging.jpg';
import Delivery from '../assets/Images/Delivery.jpg';

const ProcessSection = () => {
  return (
    <div className="process-wrapper">
      <div className="black-line" />
      <h2 className="process-title">Our Process</h2>
      <div className="black-line" />

      <div className="process-container">
        {/* Step 1 */}
        <div className="process-row">
          <div className="process-text">
            <h3>Step 1 : Harvesting Of Tea</h3>
            <p>
              Tea harvesting is a crucial stage in tea production, directly influencing the quality, flavor,
              and character of the final brew. It involves carefully selecting and plucking the tender new shoots
              of the Camellia sinensis plant.
            </p>
          </div>
          <img src={Harvesting} alt="Harvesting Tea" />
        </div>

        {/* Step 2 */}
        <div className="process-row reverse">
          <div className="process-text">
            <h3>Step 2 : Processing Of Tea</h3>
            <p>
              The processing of tea is a fascinating journey that transforms freshly plucked tea leaves (Camellia sinensis)
              into the wide variety of teas we enjoy. The specific steps and their duration largely determine the tea’s category
              (black, green, oolong, white, Pu-erh) and its final flavor, aroma, and appearance.
            </p>
          </div>
          <img src={Processing} alt="Processing Tea" />
        </div>

        {/* Step 3 */}
        <div className="process-row">
          <div className="process-text">
            <h3>Step 3 : Packaging Of Tea</h3>
            <p>
              The processing of tea is a fascinating journey that transforms freshly plucked tea leaves (Camellia sinensis)
              into the wide variety of teas we enjoy. The specific steps and their duration largely determine the tea’s category
              (black, green, oolong, white, Pu-erh) and its final flavor, aroma, and appearance.
            </p>
          </div>
          <img src={Packaging} alt="Packaging Tea" />
        </div>

        {/* Step 4 */}
        <div className="process-row reverse">
          <div className="process-text">
            <h3>Step 4 : Delivery Of Tea</h3>
            <p>
              Delivery of tea is a crucial part of the tea industry's supply chain, ensuring that it reaches consumers from farms
              and processing units. The specifics of delivery can vary widely depending on the type of tea, its origin,
              its destination, and the scale of the operation.
            </p>
          </div>
          <img src={Delivery} alt="Tea Delivery" />
        </div>
      </div>

      {/* ✅ Link to /products page */}
      <div className="button-wrapper">
        <Link to="/products">
          <button className="explore-button">Explore Our Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProcessSection;

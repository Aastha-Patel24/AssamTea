import React, { useState } from 'react';
import './HistorySection.css';
import teaImage from '../assets/images/Tea.jpg'; // Adjust path as needed

const HistorySection = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => setShowFullText(prev => !prev);

  return (
    <section className="history-section">
      <h2 className="section-title">Our History</h2>

      {/* Card container */}
      <div className="history-card">
        <div className="history-highlight">
          <div className="history-image-wrapper">
            <img src={teaImage} alt="Tea Bowl" className="history-image" />
          </div>

          <div className="text-content">
            {/* Highlight summary text */}
            <p className="highlight-text">
              The tea industry in Assam is about 172 years old. It holds a place of immense significance and contributes substantially to the national economy. Assam’s tea sector is not only a vital part of the state's heritage but also a powerful engine of employment and export revenue for India.
              The origins of this industry date back to the early 19th century, when in the year 1823, a pivotal discovery was made by Robert Bruce, a Scottish adventurer and trader. While traveling through the region, he came across tea plants growing wild in the upper Brahmaputra Valley.
            </p>

            {/* Description text shown only when toggled */}
            {showFullText && (
              <p className="description-text">
                A tea garden was started by the Government in 1833 in erstwhile Lakhimpur district. With the arrival in London of the fine quality tea from
                this garden in 1938, the commercial circle of the city took a keen interest in tea plantations in Assam and a company known as the Assam
                Company was formed in 1839 to take over the experimental holdings of the East India Company's Administration over the tea gardens established
                in Assam till then. This was the first company in India to undertake the commercial production of tea and was, in fact, the direct successor
                of the East India Company. A site was cleared from the jungle at Nazira which became and remained as the headquarters of this company until
                it was shifted to Calcutta in 1965.
              </p>
            )}

            {/* Center aligned button */}
            <div className="button-wrapper">
              <button className="read-more-btn" onClick={toggleReadMore}>
                {showFullText ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

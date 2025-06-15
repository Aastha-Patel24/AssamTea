import React from 'react';
import './BlogCardSection.css';

import teaGardens from '../assets/images/Tea-Gardens.jpg';
import brewingTea from '../assets/images/Brewing-Tea.jpg';
import healthTea from '../assets/images/Health-Tea.jpg';

const blogData = [
  {
    title: "Exploring Assam’s Tea Gardens",
    description:
      "Exploring Assam’s Tea Gardens unveils the breathtaking beauty and rich heritage of its vast, green estates. Nestled among rolling hills and misty landscapes, these tea gardens offer a serene and refreshing escape.each step enhances the richness of the brew.each step enhances the richness of the brew.",
    image: teaGardens,
    reverse: false,
  },
  {
    title: "The Art of Brewing Assam Tea",
    description:
      "The Art of Brewing Assam Tea lies in mastering the simple yet delicate steps that bring out its bold and malty flavor. From selecting high-quality loose leaves to carefully measuring water temperature and steeping time, each step enhances the richness of the brew.each step enhances the richness of the brew.",
    image: brewingTea,
    reverse: true,
  },
  {
    title: "Health Benefits of Assam Tea",
    description:
      "Health Benefits of Assam Tea go beyond its bold flavor, offering a range of wellness advantages with every cup. Rich in antioxidants and natural compounds, Assam tea helps boost energy levels and improve mental alertness throughout the day.each step enhances the richness of the brew.each step enhances the richness of the brew.",
    image: healthTea,
    reverse: false,
  },
];

const BlogCardSection = () => {
  return (
    <section className="blog-card-section">
      {blogData.map((card, index) => (
        <div className={`blog-card ${card.reverse ? 'reverse' : ''}`} key={index}>
          <div className="blog-card-text">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="read-more-wrapper">
              {/* <button className="btn btn-warning text-dark">Read More</button> */}
            </div>
          </div>
          <div className="blog-card-image">
            <img
              src={card.image}
              alt={card.title}
              width={540}
              height={420}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogCardSection;

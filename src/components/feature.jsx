import React from "react";
import "./header.css";
import profitImage from "../assets/profit.jpg";
import scalingImage from "../assets/scaling.jpg";
import selectionImage from "../assets/selection.jpg";

const Features = () => {
  const features = [
    {
      image: profitImage,
      title: "Higher Profits",
      loading="lazy",
      description:
        "You earn more with our competitive pricing model, which guarantees higher margins and better returns on your investment.",
    },
    {
      image: scalingImage,
      title: "Robust Scaling",
      loading="lazy",
      description:
        "We handle production and logistics, ensuring smooth scaling of your business without the need for manual interventions.",
    },
    {
      image: selectionImage,
      title: "Best Selection",
      loading="lazy",
      description:
        "Choose from a wide variety of products curated to meet your customers needs, ensuring quality and satisfaction.",
    },
  ];

  return (
    <div className="features-section">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <img
            src={feature.image}
            alt={feature.title}
            className="feature-image"
          />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;

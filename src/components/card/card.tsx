import React from "react";
import "./cardStyles.css";
import { FaShoppingCart, FaAngleUp, FaAngleDown } from "react-icons/fa";

interface CardProps {
  title: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  stockStatus: string;
  iconUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  oldPrice,
  imageUrl,
  stockStatus,
  iconUrl,
}) => {
  return (
    <div className="card">
      <div className="quantity-input">
        <span className="quantity-number">1</span>
        <div className="quantity-arrows">
          <FaAngleUp className="arrow-up" />
          <FaAngleDown className="arrow-down" />
        </div>
      </div>

      <div className="card-content-container">
        <div className="card-header">
          <span className="on-sale">
            <span className="on-sale-dot">●</span>
            <span className="on-sale-text"> ON SALE</span>
          </span>
          <span className="in-stock">{stockStatus}</span>
        </div>

        <div className="card-image-container">
          <img src={imageUrl} alt={title} className="card-image" />
        </div>

        <div className="card-title-container">
          <h4 className="card-title">{title}</h4>
          <img src={iconUrl} alt="Icon" className="product-icon" />
        </div>

        <div className="price-section">
          <span className="current-price">{price}</span>
          {oldPrice && <span className="old-price">{oldPrice}</span>}
        </div>

        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </div>

      <div className="card-actions-container">
        <button className="details-button">DETAILS</button>
        <button className="add-button">
          ADD <FaShoppingCart className="cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;

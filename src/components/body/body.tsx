import React, { useEffect, useState } from "react";
import { FaSortAmountUpAlt } from "react-icons/fa";
import axios from "axios";
import "./bodyStyles.css";
import Card from "../card/card";
import Header from "../header/header";

const Body: React.FC = () => {
  const [products, setProducts] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products.json");

        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setProducts(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Error desconocido al obtener productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className="image-container"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/d2r.jpg"})` }}
    >
      <Header />
      <div className="cards-on-image">
        <div className="cards-controls">
          <span className="results-count">Showing 20 - from 125</span>
          <div className="sort-options">
            <FaSortAmountUpAlt className="sort-icon" />
            <div className="sort-text-container">
              <span className="sort-title">Sort By</span>
              <span className="sort-value">Featured</span>
            </div>
            <div className="icon-dropdown"></div>
          </div>
        </div>
        <div className="cards-grid">
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              imageUrl={product.imageUrl}
              stockStatus={product.stockStatus}
              iconUrl={product.iconUrl}
            />
          ))}
        </div>
        <div className="pagination-container">
          <button className="pagination-button">{"<"}</button>
          <div className="pagination-numbers">
            <span className="pagination-number active">1</span>
            <span className="pagination-number">2</span>
            <span className="pagination-number">3</span>
            <span className="pagination-number">4</span>
            <span className="pagination-dots">...</span>
            <span className="pagination-number">11</span>
          </div>
          <button className="pagination-button">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Body;

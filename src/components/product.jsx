import shirt from '../assets/shirt.jpg';
import cap from "../assets/cap1.jpg";
import case1 from "../assets/case.jpg";
import hat from "../assets/hat.png";
import hat_shirt from "../assets/hat-shirt.png";

const Products = () => {
    return (
      <div className="product-section">
        <h1 className="producth1"><b>Easily add your design to products</b></h1>
        <div className="product-grid">
          <a href="/path-to-cap" alt="Product 1">
            <img src={cap} alt="Cap" />
          </a>
          <a href="/path-to-shirt" alt="Product 2">
            <img src={shirt} alt="Shirt" />
          </a>
          <a href="/path-to-hat" alt="Product 3">
            <img src={hat} alt="Hat" />
          </a>
          <a href="/path-to-case" alt="Product 4">
            <img src={case1} alt="Case" />
          </a>
          <a href="/path-to-hat-shirt" alt="Product 5">
            <img src={hat_shirt} alt="Hat Shirt" />
          </a>
        </div>
      </div>
    );
};

export default Products;

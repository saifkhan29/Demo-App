import React from "react";
import { useSelector } from "react-redux";
import '../App.css'
import { Link } from "react-router-dom";


const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {id,category,image, price, title} = product;

      return (
        <div className="four column wide" key={id}>
            <Link to={`/product/${id}`}>
        <div className="ui link cards card-list">
          <div className="card card-list card-main">
            <div className="image img-cont"><img className="img-2" src={image} alt={title} /></div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>

            </div>
          </div>
        </div>
        </Link>
      </div>

      )
  })

  return (
    <div>
      <h1>Product Component</h1>
      <div className="product-list">
      {renderList}

      </div>
      
    </div>
  );
};

export default ProductComponent;

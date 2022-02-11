import React from "react";

export const ProductTitle = ({ title, price }) => {
  if (title) {
    return (
      <div className="row">
        <h2>{title}</h2>
        <span>${price}</span>
      </div>
    );
  }

  return <div></div>;
};

export default ProductTitle;

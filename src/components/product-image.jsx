import React from "react";

export const ProductImage = ({ image }) => {
  if (image) {
    return (
      <div className="big-img">
        <img src={image} alt="" />
      </div>
    );
  }

  return <div></div>;
};

export default ProductImage;

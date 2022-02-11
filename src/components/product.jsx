import { React, useState, useEffect } from "react";
import ProductDetail from "./product-detail";
import ProductTitle from "./product-title";
import ProductImage from "./product-image";
import { ProductService } from "../services/product.service";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const imageUrl = `http://54.203.82.32:3000/api/productos/img/pd2-3-000002-001.jpg`;

  useEffect(() => {
    (async () => {
      setProduct((await ProductService()).producto[0]);
    })();

    return () => {};
  }, [true]);

  if (product) {
    return (
      <div className="details">
        <ProductImage image={imageUrl} />
        <div className="box">
          <ProductTitle title={product.nombre} price={product.precio} />

          <ProductDetail product={product}/>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Product;

import React from "react";

export const ProductDetail = ({ product }) => {
  if (product) {
    return (
      <div>
        <h5>Detalles</h5>
        <h3>Especificaciones del Producto</h3>
          <ul>
              <li>Material: {product.material}</li>
              <li>Medidas: {product.medidas}</li>
              <li>Peso: {product.peso_producto}</li>
              <li>Color: {product.color_diseno_panton}</li>
              </ul>
        <h3>Especificaciones del packing</h3>
              <ul>
                <li>Packing: {product.packing_venta}</li>
                <li>Medidas carton: {product.medidas_ctn}</li>
                <li>Peso carton: {product.peso_ctn}</li>
              </ul>

        <h3>Formato</h3>
        <ul>
          <li>{product.formato}</li>
        </ul>
      </div>
    );
  }

  return <div></div>;
};

export default ProductDetail;

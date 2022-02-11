export const ProductService = async () => {
  const url = "http://54.203.82.32:3000/api/productos/producto/26";
  const data = await fetch(url);
  const product = await data.json();

  return product;
};

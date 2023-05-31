import { useState } from 'react';
import ProductTable from '../../components/ProductTable/ProductTable';
import SearchBar from '../../components/SearchBar/SearchBar';
import jsonData from './../../data.json';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [productsData] = useState(jsonData);

  const showFilteredProducts = (str) => {
    const input = str.toLowerCase();
    setProducts(
      input
        ? productsData.filter((product) =>
            product.name.toLowerCase().includes(input)
          )
        : [...productsData]
    );
  };

  const showStockProducts = (bool) => {
    setProducts(
      bool
        ? productsData.filter((product) => product.inStock)
        : [...productsData]
    );
  };

  return (
    <>
      <h1>IronStore</h1>

      <SearchBar
        showFilteredProducts={showFilteredProducts}
        showStockProducts={showStockProducts}
      />
      <ProductTable products={products} />
    </>
  );
};

export default ProductsPage;

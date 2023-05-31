import ProductRow from '../ProductRow/ProductRow';

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return <ProductRow product={product} key={product.id} />;
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td className={!product.inStock ? 'red' : 'black'}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;

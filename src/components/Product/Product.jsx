const Product = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product._id}>
          <p>{product.name}</p>
          <img src={product.img} alt={product.name} />
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.size}</p>
        </li>
      ))}
    </ul>
    //  {[<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>]}
  );
};

export default Product;

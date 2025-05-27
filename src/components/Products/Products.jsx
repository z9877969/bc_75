import defaultImage from '../../assets/images/default-featured-image.png.jpg';

// console.log('defaultImage :>> ', defaultImage);

const Products = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product._id}>
          <p>{product.name}</p>
          <img
            src={product.img ? product.img : defaultImage}
            alt={product.name}
          />
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.size}</p>
        </li>
      ))}
    </ul>
  );
};

export default Products;

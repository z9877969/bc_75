// import { MdFavorite } from "react-icons/md"; /* <MdFavorite /> */
// import { MdFavoriteBorder } from "react-icons/md"; /* <MdFavoriteBorder /> */
import Container from '../Container/Container';
import Button from '../Button/Button';
import defaultImage from '../../assets/images/default-featured-image.png.jpg';
import products from '../../assets/data.json';
import s from './Products.module.css';
import Cart from '../Cart/Cart';

const Products = () => {
  return (
    <>
      <Container>
        <ul className={s.list}>
          {products.map((product) => (
            <li key={product._id} className={s.item}>
              <h3 className={s.name}>{product.name}</h3>
              <div className={s.imgWrapper}>
                <img
                  src={product.img ? product.img : defaultImage}
                  alt={product.name}
                  className={s.img}
                />
              </div>
              <p className={s.price}>Price: {product.price}$</p>
              <Button>Add to cart</Button>
            </li>
          ))}
        </ul>
      </Container>
      {/* <Cart /> */}
    </>
  );
};

export default Products;

// import { MdFavorite } from "react-icons/md"; /* <MdFavorite /> */
// import { MdFavoriteBorder } from "react-icons/md"; /* <MdFavoriteBorder /> */
import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import defaultImage from '../../assets/images/default-featured-image.png.jpg';
import products from '../../assets/data.json';
import s from './Products.module.css';
import Cart from '../Cart/Cart';

const Products = ({ isCartOpen, closeCart }) => {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem('cart')) || {}
  );

  const cartProductsList = Object.values(cartProducts);

  useEffect(() => {
    return () => {
      console.log('isCartOPen :>> ', isCartOpen);
      isCartOpen && closeCart(false);
    };
    // eslint-disable-next-line
  }, [isCartOpen /* -> true */]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <>
      <Container>
        {/* button open cart */}
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
              <Button
                handleClick={() => {
                  setCartProducts({
                    ...cartProducts,
                    [product._id]: { ...product, amount: 1 },
                  });
                }}
              >
                Add to cart
              </Button>
            </li>
          ))}
        </ul>
      </Container>
      {isCartOpen && (
        <Cart
          isOpen={isCartOpen}
          closeCart={closeCart}
          products={cartProductsList}
        />
      )}
    </>
  );
};

export default Products;

// const o = {
//   a: 25
// }

// o.a // 25
// const key = "a"

// o[key] // -> o.a - 25

// const keyB = 'qwe';

// o[keyB] = "98" // o.qwe = "98"

// {[keyB]: 54} // {qwe: 94}

import clsx from 'clsx';
import { MdDeleteForever, MdClose } from 'react-icons/md';

import Button from '../Button/Button';
import s from './Cart.module.css';

const Cart = ({ products = [], isOpen = false, closeCart }) => {
  const handleSubmit = () => {
    console.log('fetch data');
    closeCart(false);
  };

  return (
    <div className={clsx(s.container, isOpen && s.isOpen)}>
      <button className={s.btnClose} onClick={() => closeCart(false)}>
        <MdClose size={16} fill="#fff" />
      </button>
      <div className={s.productsList}>
        {products.map(({ name, price, img, amount, _id: id }) => (
          <div className={s.productItem} key={id}>
            <img src={img} alt={name} className={s.productImage} />
            <div className={s.descrWrapper}>
              <h3>{name}</h3>
              <div className={s.DescrPrice}>{price}$</div>
            </div>
            <span>Amount: {amount}</span>
            <button className={s.btnRemove} type="button">
              <MdDeleteForever size={32} />
            </button>
          </div>
        ))}
      </div>
      <Button className={s.btnSubmit} handleClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Cart;

import clsx from 'clsx';
import { MdDeleteForever, MdClose } from 'react-icons/md';

import Button from '../Button/Button';
import s from './Cart.module.css';

const Cart = ({
  products = [
    {
      _id: '640c2dd963a319ea671e383b',
      name: 'Ackee',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
      amount: 1,
      price: 8.99,
    },
  ],
  isOpen = true,
}) => {
  return (
    <div className={clsx(s.container, isOpen && s.isOpen)}>
      <button className={s.btnClose}>
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
      <Button className={s.btnSubmit}>Submit</Button>
    </div>
  );
};

export default Cart;

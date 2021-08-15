import React from 'react';
import axios from 'axios';

import AppContext from '../../context';
import Info from '../info';

import styles from './Drawer.module.scss';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () => {
    try{
      const {data} = await axios.post('https://611230db89c6d00017ac015c.mockapi.io/orders', {
        item: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      
      for (let i = 0; i < cartItems.length; i++) {
        const items = cartItems[i];
        await axios.delete('https://611230db89c6d00017ac015c.mockapi.io/cart/' + items.id);
        await delay(1000);
      }

      } catch (error){
        alert('Не удалось создать заказ');
      }
    };

    return(
        <div className={`${styles.overlay} ${opened ? styles.overlay__visible : ' ' }`}>
        <div className={styles.drawer}>
            <h2 className="d-flex justify-between">Корзина
            <img onClick={onClose} className="removeBtn cu-p" src="img/btn-remove.svg" alt="" />
            </h2>

            {/* если есть хоть что то в корзине тогда показываем товары и стоимость если ничего нет ":" тогда показываем блок корзина пуста */}
          {
            items.length > 0 ? (
              <div className="d-flex flex-column justify-between h100p">
                {/* сама корзина с айтемами  */}
                 <div className="items cart mt-40">
                {items.map((obj) => (
                      <div key={obj.id} className="cartItem d-flex align-center mt-20">
                        <img className="mr-15" width={70} height={70} src={obj.imageUrl} alt="Sneakers" />
                        <div className="mr-20">
                          <p className="mb-5">{obj.title}</p>
                          <b>{obj.price} руб</b>
                        </div>
                        {/*удаление из корзины  передаем анонимную функцию иначе если передать пропс он передаст событие event но не айди товара */}
                        <img onClick={() => onRemove(obj.id)} className="removeBtn" src="img/btn-remove.svg" alt="Delete" />
                    </div>
                ))}
                </div> 

                {/* подвал с ценой */}
                <div className="drawer__bottom">
                  <div className="cart__info d-flex">
                      <p>Итого:</p>
                      <span></span>
                      <b>{totalPrice} руб. </b>
                  </div>
                  <div className="cart__info d-flex">
                      <p>Налог 5%:</p>
                      <span></span>
                      <b>{totalPrice / 100 * 5} руб. </b>
                  </div>
                    <button onClick={onClickOrder} className="cart__btn">Оформить заказ</button>
                 </div>
              </div>
           ):(
            //  блок которой показывается когда корзина пуста
            <Info 
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пуста"} 
            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, что бы сделать заказ" } 
            img={isOrderComplete ? "img/cart-ok.png" : "img/cart-clear.png"} />
           )}
          </div>
          </div>
     );
}

export default Drawer;
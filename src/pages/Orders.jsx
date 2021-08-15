import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import AppContext from '../context';


function Orders() {
    const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://611230db89c6d00017ac015c.mockapi.io/orders/');
                setOrders(data.reduce((prev, obj) => [ ...prev, ...obj.item], []));   
            } catch (error) {
                alert('Ошибка');
            }
        })();
    }, []);

    return(
        <div className="content p-40">
        <div className="d-flex justify-between align-center">
            {/* Если в инпуте что то есть тогда выводим серчвелью если ничего возвращем все кроссовки */}
           <h1>Мои заказы</h1>
        </div>
          <div>Тут будут мои заказы</div>
          <ul  className="products mt-40">
            {orders.map((item, index) => (
                <Card
                    key={index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                />
            ))}
          </ul>
      </div>
    )
}

export default Orders;
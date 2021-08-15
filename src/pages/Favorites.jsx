import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favorites({onAddToFavorite,onAddToCart}) {
  const {favorites} = React.useContext(AppContext);
  const {isItemAdded} = React.useContext(AppContext);

    return(
        <div className="content p-40">
        <div className="d-flex justify-between align-center">
            {/* Если в инпуте что то есть тогда выводим серчвелью если ничего возвращем все кроссовки */}
           <h1>Мои закладки</h1>
        </div>
          <div>Тут будут мои закладки</div>
          <ul  className="products mt-40">
            {/* .filter фильтрует все что находится в айтем по названию toLowerCase() переводит названия в нижний регистр .includes извлекает из серчвелью */}
            {favorites.map((item, index) => (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                favorited={true}
                onFavorite={onAddToFavorite}
                onPlus={(obj) => onAddToCart(obj)}
              />
          ))}
          </ul>
      </div>
    )
}

export default Favorites;
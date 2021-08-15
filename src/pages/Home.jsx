import React from 'react';
import Card from '../components/Card';

function Home({
  items,
  cartItems,
  searchValue, 
  setSearchValue, 
  onChangeSearchInput, 
  onAddToFavorite, 
  onAddToCart
}) 
{
    return(
        <div className="content p-40">
        <div className="d-flex justify-between align-center">
            {/* Если в инпуте что то есть тогда выводим серчвелью если ничего возвращем все кроссовки */}
           <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
           <div className="search__block">
                <button className="search__btn">
                  <img src="/img/search.svg" alt="Search" />
                </button>
                {/* если есть пеменная серчвелью только тогда отображать кнопку */}
                {searchValue && <img onClick={() => setSearchValue ('')} className="clearr cu-p" src="/img/btn-remove.svg" alt="Clear" />}
                <input onChange={onChangeSearchInput} value={searchValue} className="search__input" type="text" placeholder="Поиск..."/>
           </div>
        </div>
          <ul  className="products mt-40">
            {/* .filter фильтрует все что находится в айтем по названию, toLowerCase() переводит названия в нижний регистр .includes извлекает из серчвелью */}
          {items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading={false}
                
              />
          ))}
          </ul>
      </div>
    )
}

export default Home;
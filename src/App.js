import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home'; 
import Favorites from './pages/Favorites'; 
import Orders from './pages/Orders';
import AppContext from './context';




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);


  // при первом рендере отправляе два запроса на получение всех айтемо и второй запрос на получение корзины запросы выполняются параллельно 
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          await axios.get('https://611230db89c6d00017ac015c.mockapi.io/cart'),
          await axios.get('https://611230db89c6d00017ac015c.mockapi.io/favorites'),
          await axios.get('https://611230db89c6d00017ac015c.mockapi.io/item'),
        ]); 
        
        // const cartResponse = await axios.get('https://611230db89c6d00017ac015c.mockapi.io/cart');
        // const favoritesResponse = await axios.get('https://611230db89c6d00017ac015c.mockapi.io/favorites');
        // const itemsResponse = await axios.get('https://611230db89c6d00017ac015c.mockapi.io/item');
  
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
      }
    }

    fetchData();

    // // fetch('https://611230db89c6d00017ac015c.mockapi.io/item')
    // //   .then((res) => {
    // //     return res.json();
    // //   })
    // //   .then((json) => {
    // //     setItems(json);
    // //   });
    //   axios.get('https://611230db89c6d00017ac015c.mockapi.io/item').then((res) => {
    //     setItems(res.data);
    //   });
    //   axios.get('https://611230db89c6d00017ac015c.mockapi.io/cart').then((res) => {
    //     setCartItems(res.data);
    //   });
    //   axios.get('https://611230db89c6d00017ac015c.mockapi.io/favorites').then((res) => {
    //     setFavorites(res.data);
    //   });
  }, []);


  const onAddToCart = async (obj) => {
    console.log(obj);
    try {
         // если в корзине нашелся хотя бы один объект  у которого такой же айди как у обжект айди
         const findItem = cartItems.find((item) => Number(item.parentId) == Number(obj.id));
      if (findItem) {
        // то замени стейт, отфильтруй его на: если хотя бы в одном объекте есть обжект айди то исключи его из массива
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://611230db89c6d00017ac015c.mockapi.io/cart/${findItem.id}`);
      } else {
        await axios.post('https://611230db89c6d00017ac015c.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Ошибка при запросе данных');
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://611230db89c6d00017ac015c.mockapi.io/cart/${id}`);
      // дай мне предыдущий массив, пройдись по нему и отфильтруй айди тот который передан в функции
      setCartItems((prev) => prev.filter(item => item.id !== id));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
    }
  };

  //избранные
  // метод async прочитать 
  // когда используем async await нужно все обернуть в try catch ПРОЧИТАТЬ ПРО ЭТО (нужно для того что бы отловить ошибку)
  const onAddToFavorite = async (obj) => {
  try{
      if (favorites.find((favObj) => favObj.id == obj.id)) {
        axios.delete(`https://611230db89c6d00017ac015c.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://611230db89c6d00017ac015c.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      } 
  } catch (error) {
    alert('Не удалось добавить в избранное');
  }
  };

  // Поиск
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) == Number(id));
  };

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems}}> 
       <div className="wrapper clear">
       <Drawer 
          items={cartItems}
          onClose={() => setCartOpened(false)} 
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
      <Header onClickCart={() => setCartOpened(true)}/>

      {/* свойство exact делает переход строгим и будет отборажать внутри тега только страницу хоум */}
      <Route path="" exact>  
        <Home 
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          cartItems={cartItems}
        />
      </Route>
      <Route path="react-sneakers/favorites" exact>  
        <Favorites 
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
        />
      </Route>
      <Route path="react-sneakers/orders" exact>
          <Orders />
      </Route>
    </div>
    </AppContext.Provider>
  );
}

export default App;

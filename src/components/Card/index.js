import React from 'react';
import styles from './Card.module.scss';
import AppContext from '../../context';
import ContentLoader from "react-content-loader"

function Card({ id, onFavorite, title, imageUrl, price, onPlus, favorited = false, loading = false}) {
  // const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const {isItemAdded} = React.useContext(AppContext);
  const obj = { id, parentId: id, title, imageUrl, price};

  const onClickPlus = () => {
    onPlus(obj);
    // setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  }

  return (
    <li  className="products__wrapper">
      {/* сначала лоадер товаров */}
      {loading ? 
      (
        <ContentLoader 
          speed={2}
          width={150}
          height={230}
          viewBox="0 0 150 230"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="-1" y="100" rx="5" ry="5" width="150" height="15" /> 
          <rect x="0" y="0" rx="5" ry="5" width="150" height="91" /> 
          <rect x="0" y="120" rx="5" ry="5" width="100" height="15" /> 
          <rect x="0" y="197" rx="5" ry="5" width="80" height="25" /> 
          <rect x="110" y="197" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> 
      ) : (
            // сами товары
            <article className={styles.card}>
                {onFavorite && <img className={styles.fav} onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}/>
                }
                <img className="mb-15" src={imageUrl} alt="" width='100%' height='135px'/>
                <h5 className="mb-15">{title}</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price}</b>
                  </div>
                   {onPlus &&  <img 
                      className={styles.plus} 
                      onClick={onClickPlus} 
                      src={isItemAdded(id) ? '/img/ok.svg' : '/img/plus.svg'}
                    />
                   }
                </div>
              </article>
          )
      }
     </li>
    
  );
}

export default Card;
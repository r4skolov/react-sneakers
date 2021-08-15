import React from 'react'
import AppContext from '../context';

const Info = ({img, title, description}) => {
const {setCartOpened} = React.useContext(AppContext);
    return (
             <div className="drawerClear d-flex flex-column align-center">
                  <img className="mb-20" src={img} alt="Box-clear" width={120}/>
                  <h3 className="mb-10">{title}</h3>
                  <p className="opacity-6 mb-40 text-center">{description}</p>
                  <button onClick={() => setCartOpened(false)} className="cart__btn">Вернуться назад</button>
              </div>
    )
}

export default Info;
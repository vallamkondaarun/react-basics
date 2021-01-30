import React, {useReducer, useRef} from 'react';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 2500,
      name: "2020 MacBook Pro",
      image: "",
      features: []
    },
    store: [
      { id: 1, name: "Wireless Keyboard", price: 150 },
      { id: 2, name: "Wireless Mouse", price: 140 },
      { id: 3, name: "Screen Protector", price: 50 },
      { id: 4, name: "Keyboard Cover", price: 80 }
    ]
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "REMOVE_ITEM":
        return {
          ...state,
          additionalPrice: state.additionalPrice - action.item.price,
          car: { ...state.car, features: state.car.features.filter((x) => x.id !== action.item.id)},
          store: [...state.store, action.item]
        };
      case "BUY_ITEM":
        return {
          ...state,
          additionalPrice: state.additionalPrice + action.item.price,
          car: { ...state.car, features: [...state.car.features, action.item] },
          store: state.store.filter((x) => x.id !== action.item.id)
        }
      default:
        return state;
    }
  }
  
 export const Laptops = () => {
    const inputRef = useRef();
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const removeFeature = (item) => {
      dispatch({ type: 'REMOVE_ITEM', item });
    }
    
    const buyItem = (item) => {
      dispatch({ type: 'BUY_ITEM', item })
    }
    
    return (
        <>
        <h1 className='laptop-title'>Buy laptop</h1>
      <div className="boxes">
        <div className="box">
          <figure className="image is-128x128">
            <img src={state.car.image} />
          </figure>
          <h2>{state.car.name}</h2>
          <p>Amount: ${state.car.price}</p>
          <div className="content">
            <h6>Added features:</h6>
            {state.car.features.length ? 
              (
                <ol type="1">
                  {state.car.features.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => removeFeature(item)}
                        className="button">X
                      </button>
                      {item.name}
                    </li>
                  ))}
                </ol>
              ) : <p>You can purchase items from the store.</p>
            }
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h4>Additional Features</h4>
            {state.store.length ? 
              (
              <ol type="1">
                {state.store.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => buyItem(item)}
                      className="button">Add</button>
                    {item.name} (+{item.price})
                  </li>
                ))}
              </ol>
              ) : <p>Nice looking car!</p>
            }
          </div>
  
          <div className="content">
          <h4>
            Total Amount: ${state.car.price + state.additionalPrice}
          </h4>
        </div>
        </div>
      </div>
      </>
    );
  }
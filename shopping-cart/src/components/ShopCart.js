import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Components
import Cart from './shared/Cart';

// Context
import { CartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item} />)
                }
            </div>
            {
                state.itemsCounter >= 1 && <div>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total}</p>
                    <div>
                        <button onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div>
                    <h3>Checked Out Seuccessfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go To Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;
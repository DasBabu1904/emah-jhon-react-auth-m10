import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Oder = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleRemoveCart = product => {
        const rest = cart.filter(item => item.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className="Main-Section">
            <div className="">
                {cart.map(product =>
                    <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveCart={handleRemoveCart}
                    >

                    </ReviewItem>)}
            </div>
            <Cart cart={cart}>
                <button>
                    <Link to="/inventory">Proceed Order</Link>
                </button>
            </Cart>
        </div>
    );
};

export default Oder;
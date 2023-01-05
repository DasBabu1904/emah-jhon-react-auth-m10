import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { product, handleRemoveCart } = props;
    const { name, img, price, shipping, quantity } = product

    return (
        <div className='Review-item-area'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className='review-item-details-text'>
                    <h2 className='review-item-details-text-lines' title={name}>{name.length < 20 ? name : name.slice(0, 20) + '...'}</h2>
                    <h4 className='review-item-details-text-lines'>Price: $ {price}</h4>
                    <h4 className='review-item-details-text-lines'>Quantity: {quantity}</h4>
                </div>
                <div className="review-item-delete-button">
                    <button onClick={() => handleRemoveCart(product)}>
                        <FontAwesomeIcon className='review-item-delete-icon ' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
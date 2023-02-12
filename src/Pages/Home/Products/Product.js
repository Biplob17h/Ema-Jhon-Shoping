import React from 'react';
import { toast } from 'react-hot-toast';

const Product = ({ product}) => {
    const { img, price, name, seller, shipping, _id} = product;
    const handleAddToCurt = _id => {
        const order = {
            img,
            price,
            name,
            shipping,
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Item- successfully added!')
            }
        })
    }
    return (
        <div className="card w-80 bg-base-300 borderCus">
            <figure><img className='w-72 rounded-lg pt-3' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title -mt-4">{name}</h2>
                <p className='-mt-2'>Price : ${price}</p>
                <p  className='-mt-2'>shipping : ${shipping}</p>
                <p  className='-mt-2'>seller : {seller}</p>
            </div>
            <button onClick={()=>{handleAddToCurt(_id)}} className="btn btn-ghost w-full -mt-6 customBtn3">Add To Curt</button>
        </div>
    );
};

export default Product;
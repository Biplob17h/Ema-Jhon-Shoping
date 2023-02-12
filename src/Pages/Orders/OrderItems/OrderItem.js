/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { MdDelete } from 'react-icons/md'

const OrderItem = ({ order, handleDeleteOrder }) => {
    console.log(order)
    const { shipping, img, name, price } = order;
    return (
        <tr>
            <td>
                <div className="flex items-center justify-between  space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-w-20">
                            <img src={img} alt="Brocken photo" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold ">{name}</div>
                    <div className="text-sm opacity-50 flex font-semibold"><p className='mr-5'>Price: ${price}</p> <p>shipping: ${shipping}</p></div>
                </div>
            </td>
            <td>
                <div>
                    <button onClick={()=> handleDeleteOrder(order)} className='btn btn-ghost'><MdDelete className='text-3xl' /></button>
                </div>
            </td>


        </tr>
    );
};

export default OrderItem;
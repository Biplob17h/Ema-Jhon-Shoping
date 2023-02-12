import React from 'react';
import OrderItem from './OrderItem';

const OrderItems = ({orders, handleDeleteOrder}) => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                    {
                        orders.map(order => <OrderItem
                        key={order._id}
                        order={order}
                        handleDeleteOrder={handleDeleteOrder}
                        ></OrderItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderItems;
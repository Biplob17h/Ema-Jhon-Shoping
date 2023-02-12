import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Cart from './Cart/Cart';
import OrderItems from './OrderItems/OrderItems';
import img from '../../images/149517044-gloomy-sad-emoji-emoticon-looking-down.webp'

const Orders = () => {
    const ordersRecive = useLoaderData();
    const [orders, setOrders] = useState(ordersRecive)
    const navigate = useNavigate()

    const handleDeleteOrder = order => {
        const confirm = window.confirm(`Are you want to delete ${order.name}`)
        if (confirm) {
            fetch(`http://localhost:5000/orders/${order._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.error("Delete successful")
                        const remaining = orders.filter(odr => odr._id !== order._id);
                        setOrders(remaining)
                    }
                })
        }
        else {
            toast('Delete cancel by user ', {
                icon: '👏',
            });
        }
    }
    const handleDeleteOrderAll = () => {
        const confirm = window.confirm(`Are you want to delete all items in cart`)
        if (confirm) {
            fetch(`http://localhost:5000/orders`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.error("Delete successful")
                        setOrders([])
                    }
                })
        }
        else {
            toast('Delete cancel by user ', {
                icon: '👏',
            });
        }
    }
    const handleConfirmOrderAll = () => {
        const confirm = window.confirm(`Are you want to buy all items in cart`)
        if (confirm) {
            fetch(`http://localhost:5000/orders`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Orders placed successfully")
                        setOrders([])
                        navigate('/success')
                    }
                })
        }
        else {
            toast('Confirm cancel by user ', {
                icon: '👏',
            });
        }
    }

    if (ordersRecive.length === 0) {
        return <div>
            <img className='w-80 mx-auto mt-12' src={img} alt="" />
            <h1 className="text-3xl fono-bold mt-5 text-center">Please buy something first
                <Link to='/'><button className='btn customBtn3 ml-5 mt-2 text-5xl fono-bold btn-ghost mx-auto'>GO HOME</button></Link>
            </h1>
        </div>
    }
    else {
        return (
            <div className='flex mx-32 my-10'>
                <div className='w-7/12'>
                    <OrderItems
                        orders={orders}
                        handleDeleteOrder={handleDeleteOrder}
                    ></OrderItems>
                </div>
                <div className='w-5/12 pl-16 pt-10'>
                    <Cart
                        orders={orders}
                        handleDeleteOrderAll={handleDeleteOrderAll}
                        handleConfirmOrderAll={handleConfirmOrderAll}
                    ></Cart>
                </div>
            </div>
        );
    }
};

export default Orders;
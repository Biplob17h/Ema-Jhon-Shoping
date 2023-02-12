import React from 'react';
import { toast } from 'react-hot-toast';
import { Link} from 'react-router-dom';


const Cart = ({ orders, handleDeleteOrderAll, handleConfirmOrderAll }) => {
    console.log(orders.length)
    const sum = (orders) => {
        let total = 0;
        let shipping = 0;
        for (let index = 0; index < orders.length; index++) {
            const element = orders[index];
            const totalInt = parseInt(element.price)
            const shippingInt = parseInt(element.shipping)
            total = total + totalInt;
            shipping = shipping + shippingInt
        }

        return { total, shipping };
    }
    const handleConfirmOrderRef = () => {
        if (orders.length === 0) {
            return <div>
                {toast('Bad request', {
                    icon: '👏',
                })}
            </div>
        }
        
    }
    const total = sum(orders).total;
    const shipping = sum(orders).shipping;
    const totalCost = total + shipping;
    const totalCostInt = parseInt(totalCost)
    const taxInt = totalCostInt * .05;
    const tax = parseFloat(taxInt).toFixed(2);
    const GrandTotal = total + shipping + taxInt;
    const GrandTotalSt = parseFloat(GrandTotal).toFixed(2)
    console.log(total, shipping, tax, taxInt, GrandTotal, GrandTotalSt)

    return (
        <div className='bg-red-500 w-full h-96 sticky top-0 text-white '>
            <h2 className='text-3xl font-semibold pt-5 text-center'>Cart Review</h2>
            <div className='pl-5'>
                <p className=' mt-5'>Total price: {total}$</p>
                <p className=' mt-5'>Total shipping: {shipping}$</p>
                <p className=' mt-5'>Tax: {tax}$</p>

            </div>
            <h3 className="mt-10 text-3xl font-bold pl-3">Grand Total: {GrandTotalSt}$</h3>
            <div style={{ marginTop: '65px' }} className='flex justify-around'>
                <button onClick={handleDeleteOrderAll} className='btn btn-ghost customBtn4'>Delete Cart</button>
                <button  className='btn btn-ghost customBtn4'>{orders.length === 0 ? <><Link to='#' onClick={handleConfirmOrderRef}>Confirm Order</Link></>  : <Link to='#' onClick={handleConfirmOrderAll}>Confirm Order</Link>}</button>
            </div>
        </div>
    );
};

export default Cart;
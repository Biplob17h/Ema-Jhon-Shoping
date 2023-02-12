import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import img from '../../images/Logo.svg'
import '../Shared/style.css'

const Header = () => {
    const [orders, setOrders] = useState([]);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { console.log('logout successfull') })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const total = (orders) => {
        let price = 0;
        for (let index = 0; index < orders.length; index++) {
            const element = orders[index];
            const priceNumber = parseInt(element.price)
            price = price + priceNumber;
        }
        return price;

    }
    const toatlPrice = total(orders)
    return (
        <div className="navbar text-white rounded relative" style={{ backgroundColor: '#1C2B35' }}>
            <div className="flex-1">
                <img className='w-56 p-4' src={img} alt="" />
            </div>
            <div>
                <Link to='/'><button className='btn btn-ghost mr-3 customBtn coolBorder' >Home</button></Link>
                <Link to='/notfound'><button className='btn btn-ghost mr-3 customBtn coolBorder' >Blog</button></Link>
                <Link to='/notfound'><button className='btn btn-ghost mr-3 customBtn coolBorder' >About</button></Link>
                {
                    user?.uid ?
                        <>
                            
                            <div className="flex-none mr-24">
                                <div className="dropdown dropdown-end mr-10">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ color: 'white' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">{orders?.length}</span>
                                        </div>
                                    </label>
                                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                        <div className="card-body">
                                            <span className="font-bold text-lg text-blue-400">{orders?.length} Items</span>
                                            <span className="text-info">Subtotal: ${toatlPrice}</span>
                                            <div className="card-actions">
                                                <Link to='/order'><button className="btn btn-primary btn-block">View cart</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-end text-black">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt='' />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='/profile' href='/' className="justify-between">
                                                Profile
                                            </Link>
                                        </li>
                                        <li><Link to='/notfound'>Settings</Link></li>
                                        <li><Link onClick={handleLogOut} to={`#`}>Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </>
                        :
                        <Link to='/login'><button className='btn btn-ghost mr-3 customBtn coolBorder' >Login</button></Link>
                }
            </div>

        </div>
    );
};

export default Header;
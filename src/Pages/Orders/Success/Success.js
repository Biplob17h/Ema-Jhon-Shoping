import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/giphy.gif'
import {BsBoxArrowInLeft} from 'react-icons/bs'

const Success = () => {
    return (
        <div>
            <img className='mx-auto w-96 mt-10' src={img} alt="" />
            <h1 className='text-3xl font-bold mt-5 text-center'>Your Order Place Successfully</h1>
            <Link className='text-2xl font-semibold' to='/'><button className='btn btn-ghost my-28'><BsBoxArrowInLeft className='text-2xl mr-3'/>Go Back To Home</button></Link>
        </div>
    );
};

export default Success;
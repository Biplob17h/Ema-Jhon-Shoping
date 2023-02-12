/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import img from '../../images/21104.png'

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <div className='ml-96'>
                {
                    user?.photoURL ?
                        <div className="avatar">
                            <div className="w-40 ml-40 mt-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img  src={user?.photoURL} alt='profile photo' />
                            </div>
                        </div>
                        :
                        <div className="avatar">
                            <div className="w-40 ml-40 mt-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='profile photo' />
                            </div>
                        </div>

                }
            </div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>{user?.displayName}</h1>
                <h1 className='text-xl mt-5 font-semibold'>{user?.email}</h1>

            </div>
        </div>
    );
};

export default Profile;
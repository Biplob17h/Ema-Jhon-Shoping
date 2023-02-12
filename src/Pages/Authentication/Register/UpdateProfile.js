import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import img from '../../../images/login.svg'


const UpdateProfile = () => {
    const [error, setError] = useState('')
    const { updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSubmitRegister = event => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const phone = form.phone.value;
        const phoneEx = parseInt(phone)
        if (phone.length < 8) {
            return setError(`phone number is too short`)
        }
        const profile = { displayName: name, photoURL: photo, phoneNumber: phoneEx }
        updateUser(profile)
            .then(() => {
                console.log('user profile update successfully')
                navigate(from, {replace : true})
                form.reset()
            })
            .catch((error) => { console.log(error) })
    }

    return (
        <div>
            <h1 className='text-6xl font-bold text-center mb-16'>One More Step</h1>
            <div className='flex'>
                <div className='w-1/2 mt-5'>
                    <img src={img} alt="" />
                </div>
                <div className=" min-h-screen bg-base-200 w-2/5 -mt-6  m-4 rounded-md mr-10">
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 ">
                            <h1 className="text-5xl font-semibold text-center mt-16" style={{ color: 'rgba(68, 68, 68, 1)' }}>Update User</h1>
                            <form onSubmit={handleSubmitRegister} className="card-body pl-16">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="phto url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" name='phone' placeholder="phone" className="input input-bordered" />
                                </div>
                                <p className='text-red-600 font-semibold'>{error}</p>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-ghost cusBgOrange text-white custombtn">Update</button>
                                </div>
                                <p className='text-center mt-6'>Or</p>
                                <div className="form-control mt-6">
                                    <Link to='/'><button className="btn btn-ghost cusBgOrange w-full text-white custombtn">Skip</button> </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;

import React, { useRef, useState, useEffect } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { login } from '../../../store/slices/auth';
import { clearMessage } from "../../../store/slices/messages";


export const Login = () => {
    let formRef = useRef();
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        if (email === "" || password === "") {
            toast.error('All fields are required');
        }
        else if (password.length < 8) {
            toast.error('The password must be at least 8 characters.');
        }
        else {
            const formdata = new FormData(formRef);

            dispatch(login(formdata))
                .then(() => {
                    setSuccessful(true)
                    setDisableBtn(false);
                })
                .catch(() => {
                    setSuccessful(false)
                    setDisableBtn(false);
                });
        }
    }

    const displayMessage = (message) => {
        if (message) {
            if (!message.success) {
                toast.error(message.message);
            }
            else {
                toast.success(message.message);
                window.location.href = window.location.protocol + "//" + window.location.host + '/dashboard'
            }
        }
        setSuccessful(false);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
        setSuccessful(false)
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
        setSuccessful(false)
    }

  return (
    <div  className='flex lg:h-screen items-center'>
        <div className='lg:w-5/12 lg:block hidden h-screen bg-register bg-cover fixed'>

        </div>
        <div className='lg:w-7/12 px-8 pt-4 lg:p-0 w-full lg:absolute right-0'>
            <div className='lg:w-8/12 xl:w-7/10 mx-auto'>
                <Link to="/">
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671522002/5mlog/new_p2j2j6.png" alt='register' className='lg:pt-12 w-24 lg:w-28 relative -left-4' />
                </Link>
                <p className='my-6 fw-600 text-xl lg:text-xl'>Log Into Your Account</p>
                  <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
                    <div>
                        <label className='fw-500'>Email</label>
                          <input type="email" name='email' placeholder="Enter your email" value={email} onChange={changeEmail} className="w-full p-2 mt-2 rounded border border-gray-400" required/>
                    </div>
                    <div className='mt-6'>
                        <div className='flex justify-between'>
                            <label className='fw-500'>Password</label>
                            <Link to="/forget" className='fs-400 fw-500 text-primary'>Forget password ?</Link>
                        </div>
                          {/* <input type="password" name='password' placeholder="Enter your password" value={password} onChange={changePassword} className="w-full p-2 mt-2 rounded border border-gray-400" required/> */}
                          <div className="flex items-center bg-input border border-gray-400 mt-1 rounded">
                            <input
                                type={passwordType}
                                placeholder="Enter your password"
                                className="w-full border-0 py-2 px-2 rounded"
                                name='password'
                                value={password}
                                onChange={changePassword}
                                required
                            />
                            <div onClick={togglePassword} className="px-3">
                                {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                          <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700' disabled={disableBtn}>
                            Login
                        </button>
                    </div>
                </form>
                <p className='mt-6'>Don't have an account? <Link to="/signup" className="fw-500 text-green-600">Sign Up</Link></p>
            </div>
          </div>
          {successful ? displayMessage(message) : ''}
    </div>
  )
}

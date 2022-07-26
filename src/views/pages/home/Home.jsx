import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/login" className='pe-5'>Login</Link>
            <Link to="/register" className='pe-5'>Register</Link>
            <Link to="/verify-email" className='pe-5'>Verify Email</Link>
            <Link to="/forgot-password" className='pe-5'>Forgot Password</Link>
            <Link to="/change-password" className='pe-5'>Change Password</Link>
        </div>
    )
}

export default Home
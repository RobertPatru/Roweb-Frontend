import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./Home.module.scss";

const Home = () => {
    return (
        <div className={classes.container}>
            <ul className={classes.categories_container}>
                <li style={{"--i":"5"}}><Link to="/login" className='pe-5'>Login</Link></li>
                <li style={{"--i":"4"}}><Link to="/register" className='pe-5'>Register</Link></li>
                <li style={{"--i":"3"}}><Link to="/verify-email" className='pe-5'>Verify Email</Link></li>
                <li style={{"--i":"2"}}><Link to="/forgot-password" className='pe-5'>Forgot Password</Link></li>
                <li style={{"--i":"1"}}><Link to="/change-password" className='pe-5'>Change Password</Link></li>
            </ul>
        </div>
    )
}

export default Home
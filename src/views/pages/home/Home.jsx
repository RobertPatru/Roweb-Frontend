import React from 'react'
import { Link } from 'react-router-dom'

import classes from "./Home.module.scss";
import global_classes from '../../../resources/css/Reusable.module.scss';
import register_image from '../../../resources/images/welcome-img_1';


const Home = () => {
    return (
        <section className={`${global_classes.full_screen} ${global_classes.align_center}`}  >
            <img src={register_image} alt="cartoon" className={`${global_classes.on_large_screens_img} ${global_classes.only_on_large_screens}`} />

            <div className={`${global_classes.left_upper_corner_text} ${global_classes.only_on_large_screens}`}>
                <h1>Welcome to our App!</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, illo!</p>
            </div>

        <div className={classes.container}>
            <ul className={classes.categories_container}>
                <li style={{"--i":"5"}}><Link to="/login" className='pe-5'>Login</Link></li>
                <li style={{"--i":"4"}}><Link to="/register" className='pe-5'>Register</Link></li>
                <li style={{"--i":"3"}}><Link to="/verify-email" className='pe-5'>Verify Email</Link></li>
                <li style={{"--i":"2"}}><Link to="/forgot-password" className='pe-5'>Forgot Password</Link></li>
                <li style={{"--i":"1"}}><Link to="/change-password" className='pe-5'>Change Password</Link></li>
            </ul>
        </div>
        </section>
    )
}

export default Home;
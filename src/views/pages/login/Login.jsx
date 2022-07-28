import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import classes from "./Login.module.scss";
import global_classes from '../../../resources/css/Reusable.module.scss';

import login_image from '../../../resources/images/login-img.svg';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const _handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);
        }

        if (name === "password") {
            setPassword(value);
        }

        if (value.length) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const _validate = () => {
        let isValid = true;
        const tmpErrors = { ...errors };

         // Check if email introduced matches the email template
         if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            tmpErrors.email = "Please enter  valid email address";
            isValid = false;
        }

        if (!password.length) {
            tmpErrors.password = "Password cannot be empty!";
            isValid = false;
        }

        setErrors(tmpErrors);

        return isValid;
    };

    const _login = async () => {
        const isValid = _validate();

        if (isValid) {
            // make API REQUEST
            const payload = {
                email,
                password,
            };

            // const res = await fetch('http://practica.local/api/login', {
            //   method: 'POST',
            //   headers: {
            //     "Accept": 'application/json',
            //     "Content-Type": 'application/json'
            //   },
            //   body: JSON.stringify(payload)
            // })

            // console.log(res);
        }
    };

    return (
        <section className={`${global_classes.full_screen} ${global_classes.align_center}`}  >
            <img src={login_image} alt="cartoon" className={`${global_classes.on_large_screens_img} ${global_classes.only_on_large_screens} ${classes.image_size}` } />

            <div className={`${global_classes.left_upper_corner_text} ${global_classes.only_on_large_screens}`}>
                <h1>Welcome back!</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, illo!</p>
            </div>
        
            <div className={`customForm ${global_classes.align_center} ${global_classes.direction_column} ${global_classes.form_container}`}>
                <h1 className={`${global_classes.title}`}>Log in</h1>
                <div>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            isInvalid={errors.email.length}
                            onChange={_handleChange}
                        />
                        {!!errors.email.length && (
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </div>
                <div>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            isInvalid={errors.password.length}
                            onChange={_handleChange}
                        />
                        {!!errors.password.length && (
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </div>
                <Button onClick={_login}>Login</Button>
            </div>
        </section>
    );
};

export default Login;

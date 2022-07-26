import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import PasswordStrengthBar from 'react-password-strength-bar';
import global_classes from '../../../resources/css/Reusable.module.scss';
import classes from './ForgotPassword.module.scss';

import forgot_password_image from '../../../resources/images/forgot-password-image.svg';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        code: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const _handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "code") {
            setCode(value);
        }

        if (name === "email") {
            setEmail(value);
        }

        if (name === "password") {
            setPassword(value);
        }

        if (name === "confirmPassword") {
            setConfirmPassword(value);
        }

        if (value.length) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const _validate = () => {
        let isValid = true;
        const tmpErrors = { ...errors };

        if (!code.length) {
            tmpErrors.username = "Code cannot be empty!";
            isValid = false;
        }


        if (!password.length) {
            tmpErrors.password = "Password cannot be empty!";
            isValid = false;
        }

        if (!confirmPassword.length) {
            tmpErrors.confirmPassword = "Confirm password cannot be empty!";
            isValid = false;
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            tmpErrors.confirmPassword = "Password and Confirm Password do not match!";
            isValid = false;
        }

        // Check if email introduced matches the email template
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            tmpErrors.email = "Please enter  valid email address";
            isValid = false;
        }

        setErrors(tmpErrors);

        return isValid;
    };

    const _submit = async () => {
        const isValid = _validate();

        if (!isValid) {
            return;
        }

        // make API REQUEST
        const payload = {
            email,
            password,
            code
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

        navigate("/");
    };

    console.log(errors, errors.email.length);
    return (
        <section className={`${global_classes.full_screen} ${global_classes.align_center}`}  >
            <img src={forgot_password_image} alt="cartoon" className={`${global_classes.on_large_screens_img} ${global_classes.only_on_large_screens} ${classes.image_size}` } />

            <div className={`${global_classes.left_upper_corner_text} ${global_classes.only_on_large_screens}`}>
                <h1>Forgot your password?</h1>
                <p>No worries! We can help you.</p>
            </div>
            <div className={`customForm ${global_classes.align_center} ${global_classes.direction_column} ${global_classes.form_container}`}>
                <h1 className={`${global_classes.title}`}>Forgot password</h1>
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
                        <Form.Label>Code</Form.Label>
                        <Form.Control
                            name="code"
                            type="input"
                            placeholder="Enter code"
                            value={code}
                            isInvalid={errors.code.length}
                            onChange={_handleChange}
                        />
                        {!!errors.code.length && (
                            <Form.Control.Feedback type="invalid">
                                {errors.code}
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
                         <PasswordStrengthBar password={password} className={global_classes.pass_strength} />
                        {!!errors.password.length && (
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </div>
                <div>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            isInvalid={errors.confirmPassword.length}
                            onChange={_handleChange}
                            className={global_classes.confirm_pass}
                        />
                         <PasswordStrengthBar password={confirmPassword} className={global_classes.pass_strength} />
                        {!!errors.confirmPassword.length && (
                            <Form.Control.Feedback type="invalid">
                                {errors.confirmPassword}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </div>
                <Button onClick={_submit}>Submit</Button>
            </div>
        </section>
    );
};

export default ForgotPassword;

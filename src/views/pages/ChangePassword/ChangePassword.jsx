import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import PasswordStrengthBar from 'react-password-strength-bar';
import global_classes from '../../../resources/css/Reusable.module.scss';
import classes from './ChangePassword.module.scss';

import forgot_password_image from '../../../resources/images/change-passwprd-image.svg';

import get from '../../../libs/FetchApi';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        code: "",
        email: "",
        oldPassword: "",
        password: "",
        confirmPassword: "",
    });

    const _handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "old password") {
            setOldPassword(value);
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

        if (!oldPassword.length) {
            tmpErrors.username = "Code cannot be empty!";
            isValid = false;
        }

        if (!email.length) {
            tmpErrors.email = "Email cannot be empty!";
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

        setErrors(tmpErrors);

        return isValid;
    };

    const _register = async () => {
        const isValid = _validate();

        if (!isValid) {
            return;
        }

        // make API REQUEST
        const payload = {
            email,
            password,
            oldPassword,
        };

        navigate("/");
    };


   
    return (
        <section className={`${global_classes.full_screen} ${global_classes.align_center}`}  >
            <img src={forgot_password_image} alt="cartoon" className={`${global_classes.on_large_screens_img} ${global_classes.only_on_large_screens} ${classes.image_size}` } />

            <div className={`${global_classes.left_upper_corner_text} ${global_classes.only_on_large_screens} ${classes.left_corner_upper_text}`}>
                <h1>Wanna change your password?</h1>
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
                        <Form.Label>Old Passwprd</Form.Label>
                        <Form.Control
                            name="old password"
                            type="input"
                            placeholder="Enter code"
                            value={oldPassword}
                            isInvalid={errors.oldPassword.length}
                            onChange={_handleChange}
                        />
                        {!!errors.oldPassword.length && (
                            <Form.Control.Feedback type="invalid">
                                {errors.oldPassword}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </div>
                <div>
                    <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
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
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            isInvalid={errors.confirmPassword.length}
                            onChange={_handleChange}
                        />
                         <PasswordStrengthBar password={confirmPassword} className={global_classes.pass_strength} />
                        {!!errors.confirmPassword.length && (
                            <Form.Control.Feedback type="invalid">
                                {errors.confirmPassword}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </div>
                <Button onClick={_register}>Register</Button>
            </div>
        </section>
    );
};

export default ChangePassword;

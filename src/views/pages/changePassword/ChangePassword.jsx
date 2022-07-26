import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import classes from "./ChangePassword.module.scss";

const ChangePassword = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        code: "",
        newPassword: "",
        confirmPassword: "",
    });

    const _handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);
        }

        if (name === "code") {
            setCode(value);
        }
    };

    const _validate = () => {
        let isValid = true;
        const tmpErrors = { ...errors };

        if (!email.length) {
            tmpErrors.email = "Email cannot be empty!";
            isValid = false;
        }

        if (!code.length) {
            tmpErrors.confirmPassword = "Code field cannot be empty!";
            isValid = false;
        }

        setErrors(tmpErrors);

        return isValid;
    };

    const _verifyEmail = async () => {
        //     const isValid = _validate();
        // if (isValid) {
        // make API REQUEST
        // const payload = {
        //     email,
        //     password,
        // };
        // const res = await fetch('http://practica.local/api/login', {
        //   method: 'POST',
        //   headers: {
        //     "Accept": 'application/json',
        //     "Content-Type": 'application/json'
        //   },
        //   body: JSON.stringify(payload)
        // })
        // console.log(res);
        //     }
    };

    console.log(errors, errors.email.length);

    return (
        <section>
            <Container>
                <div className={classes.loginContainer}>
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter code"
                                name="code"
                                onChange={_handleChange}
                                isInvalid={errors.code.length}
                                value={code}
                            />
                            {!!errors.code.length && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.code}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="new password"
                                onChange={_handleChange}
                                isInvalid={errors.newPassword.length}
                                value={newPassword}
                            />
                            {!!errors.newPassword.length && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.newPassword}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="confirm password"
                                onChange={_handleChange}
                                isInvalid={errors.confirmPassword.length}
                                value={confirmPassword}
                            />
                            {!!errors.confirmPassword.length && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>
                    <Button onClick={_verifyEmail}>LOGIN</Button>
                </div>
            </Container>
        </section>
    );
};

export default ChangePassword;

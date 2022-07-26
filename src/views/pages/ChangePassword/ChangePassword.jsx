import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
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
            code,
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
        <section>
            <div className="customForm">
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
                        />
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

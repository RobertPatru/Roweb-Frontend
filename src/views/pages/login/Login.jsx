import { useState } from "react";
import classes from "./Login.module.scss";

import { Button, Container, Form } from "react-bootstrap";

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
        } else if (name === "password") {
            setPassword(value);
        }
        if (value.length) {
            setErrors((prev) => ({ ...prev, [name]:"" }));
        }
    };

    const _validate = () => {
        let isValid = true;
        const tmpErrors = { ...errors };

        if (!email.length) {
            tmpErrors.email = "Email can not be empty";
            isValid = false;
        }

        if (!password.length) {
            tmpErrors.password = "Password can not be empty";
            isValid = false;
        }

        setErrors(tmpErrors);

        return isValid;
    };

    const _login = () => {
        const isValid = _validate();
        
        if (isValid) {
        }
        // make a request to API
        // make a request to API
    };

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
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                onChange={_handleChange}
                                isInvalid={errors.password.length}
                                value={password}
                            />
                            {!!errors.password.length && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </div>
                    <Button onClick={_login}>LOGIN</Button>
                </div>
            </Container>
        </section>
    );
};

export default Login;

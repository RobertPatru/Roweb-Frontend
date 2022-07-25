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

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const _validate = () => {
        let isValid = true;
        const tmpErrors = {...errors};

        if (!email.length) {
            tmpErrors.email = "Email can not be empty";
            isValid = false;
        }

        if (!password.length) {
            tmpErrors.email = "Password can not be empty";
            isValid = false;
        }
        
        return isValid;
    }

    const _login = () => {
        if (!email.length) {
            setErrors((prev) => {
                return {
                    ...prev,
                    email: "Email can not be empty",
                };
            });
            return;
        }

        if (!password.length) {
            setErrors((prev) => {
                return {
                    ...prev,
                    email: "Password can not be empty",
                };
            });
            return;
        }
    };
    
    console.log(email, password);
    console.log(errors);

    return (
        <section>
            <Container>
                <div className={classes.loginContainer}>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </div>
                    <Button onClick={_login}>LOGIN</Button>
                </div>
            </Container>
        </section>
    );
};

export default Login;

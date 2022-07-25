import { useState } from "react";
import classes from "./Login.module.scss";

import { Button, Container, Form } from "react-bootstrap";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        
        if (name === "email") {
            setEmail(value);
        }
        else if (name === "password") {
            setPassword(value)
        }
    };
    

    const _login = () => {
        console.log(email, password);
    }

    
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

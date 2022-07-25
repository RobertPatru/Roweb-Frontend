import React from "react";
import classes from "./Login.module.scss";
import {Container, Form} from "react-bootstrap";

const Login = () => {
    return (
        <section>
            <Container>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </div>
            </Container>
        </section>
    );
};

export default Login;

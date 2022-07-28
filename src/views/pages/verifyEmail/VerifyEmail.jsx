import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import classes from "./VerifyEmail.module.scss";
import global_classes from "../../../resources/css/Reusable.module.scss";

import verify_email_image from "../../../resources/images/verify-email-img.svg";

const VerifyEmail = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        code: "",
    });

    const _handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);
        }

        if (name === "code") {
            setCode(value);
        }

        if (value.length) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
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
            tmpErrors.code = "Code cannot be empty!";
            isValid = false;
        }

        setErrors(tmpErrors);

        return isValid;
    };

    const _verify = async () => {
        const isValid = _validate();

        if (isValid) {
            // make API REQUEST
            const payload = {
                email,
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
        }
    };

    return (
        <section
            className={`${global_classes.full_screen} ${global_classes.align_center}`}
        >
            <img
                src={verify_email_image}
                alt="cartoon"
                className={`${global_classes.on_large_screens_img} ${global_classes.only_on_large_screens} ${classes.image_size}`}
            />

            <div
                className={`${global_classes.left_upper_corner_text} ${global_classes.only_on_large_screens}`}
            >
                <h1>Verify your Email</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias, illo!
                </p>
            </div>

            <div
                className={`customForm ${global_classes.align_center} ${global_classes.direction_column} ${global_classes.form_container}`}
            >
                <h1 className={`${global_classes.title}`}>Verify email</h1>
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

                <Button onClick={_verify}>Verify Email</Button>
            </div>
        </section>
    );
};

export default VerifyEmail;

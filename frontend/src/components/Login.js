import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch (error) {
            setError("Failed to sign in ");
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }} >
                <div className="w-100" style={{ maxWidth: '400px' }} >

                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">LOG IN</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 mt-4" type="submit">Log IN</Button>
                            </Form>
                        </Card.Body>
                        <div className="w-100 text-center mt-2">
                            <Link to="/forgot-password">Forgot Password</Link>
                        </div>
                    </Card>

                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">SIGNUP</Link>
                    </div>
                </div>
            </Container>

        </>
    )
}

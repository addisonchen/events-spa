import React from 'react';
import { Navbar, Nav, Form, Button, Alert, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { useState } from 'react';

import { api_login } from './../api';
import store from './../store';


function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function submitLogin(ev) {
        ev.preventDefault();
        api_login(email, pass);
    }

    return (
        <div class="flex-row">
            <Form onSubmit={submitLogin} inline>
                <Form.Control name="email" type="text" onChange={(ev) => setEmail(ev.target.value)} value={email} />
                <Form.Control name="password" type="password" onChange={(ev) => setPass(ev.target.value)} value={pass} />

                <Button variant="outline-light" type="submit">Login</Button>
            </Form>

            <div style={{width: "20px;"}}></div>
            <Button variant="outline-light">
                <Link to={"users/create"} exact className="button">Create Account</Link>
            </Button>
        </div>
    );
}

function LoggedIn({session}) {
    function logout(ev) {
        ev.preventDefault();
        store.dispatch({type: 'session/clear'});
    }

    return (
        <div class="flex-row">
            <p>Hello, {session.name}</p>
            <div style={{width: "20px;"}}></div>
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}


function LoginForms({session}) {
    if (session) {
        return <LoggedIn session={session} />;
    } else {
        return <Login />;
    }
}

const LoginSignUp = connect(({session}) => ({session}))(LoginForms)

function Navigation({error}) {
    let error_alert = null;

    if (error) {
        error_alert = (
            <Row>
                <Alert variant="danger">{error}</Alert>
            </Row>
        );
    }

    return (
        <div>
            <Row>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand>
                        <Link to={"/"} exact className="nav-link">
                            Home
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="mr-auto">
                            <Nav.Item>
                                <LoginSignUp />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
            </Row>
            {/* error_alert */}
        </div>

    )
}

export default connect(({error}) => ({error}))(Navigation);
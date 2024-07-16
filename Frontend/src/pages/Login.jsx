import React, { useContext, useState } from 'react';
import '../style/Login.css';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

import loginImg from '../components/image/login.png';
import userIcon from '../components/image/user.png';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
    role: 'user', // added role state
  });

  const [error, setError] = useState(null); // added error state

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRoleChange = (e) => {
    setCredentials((prev) => ({ ...prev, role: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch({ type: 'LOGIN_START' });

      const res = await fetch(`http://localhost:4000/api/v1/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) {
        setError(result.message);
      } else {
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        navigate('/');
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
      setError(err.message);
    }
  };

  return (
    <section className="first">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleSubmit}>
                <FormGroup className="d-flex justify-content-center text-white">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="user"
                        value="user"
                        checked={credentials.role === 'user'}
                        onChange={handleRoleChange}
                      />
                      <label>User</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="admin"
                        value="admin"
                        checked={credentials.role === 'admin'}
                        onChange={handleRoleChange}
                      />
                      <label>Admin</label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  
                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Login
                  </Button>
                </Form>
                {error && <div className="error">{error}</div>}
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
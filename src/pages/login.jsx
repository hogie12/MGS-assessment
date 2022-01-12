import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Form, Button } from "semantic-ui-react";
import { Login } from "../store/action";

export default function LoginPage() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    imei: "",
  });
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.Auth);

  const submit = (e) => {
    e.preventDefault();
    dispatch(Login(login));
    
      <Link to="/tiket" />;
    
  };
  return (
    <Card centered>
      <Card.Content>
        <Card.Header>
          <Button fluid>
            <h1>Logo Here</h1>
          </Button>
        </Card.Header>
        <Card.Description>
          <Form onSubmit={submit}>
            <Form.Field>
              <label>Username</label>
              <input
                placeholder="Username"
                value={login.username}
                onChange={(e) =>
                  setLogin({ ...login, username: e.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Imei</label>
              <input
                placeholder="Imei"
                value={login.imei}
                onChange={(e) => setLogin({ ...login, imei: e.target.value })}
              />
            </Form.Field>
            <Button type="submit" fluid active>
              Login
            </Button>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

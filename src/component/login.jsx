import React from "react";
import { Card, Form, Button } from "semantic-ui-react";

export default function LoginPage() {
  return (
    <Card centered>
      <Card.Content>
        <Card.Header>
          <Button fluid>
            <h1>Logo Here</h1>
          </Button>
        </Card.Header>
        <Card.Description>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" type="password" />
            </Form.Field>
            <Form.Field>
              <label>Imei</label>
              <input placeholder="Imei" />
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

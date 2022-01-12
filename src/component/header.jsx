import React from "react";
import { Icon, Header, Dropdown } from "semantic-ui-react";

export default function Navbar({ SetVisible, visible }) {
  return (
    <div>
      <Header as="h3" block>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Icon name="bars" onClick={SetVisible} size="large" />
          <Dropdown icon="user" direction="left">
            <Dropdown.Menu>
              <Dropdown.Item text="Change Password" />
              <Dropdown.Divider />
              <Dropdown.Item text="Log Out" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Header>
    </div>
  );
}

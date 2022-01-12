import React, { useState } from "react";
import { Menu, Segment, Sidebar } from "semantic-ui-react";

export default function SidebarMenu({ Children, visible }) {
  const [menu, setMenu] = useState();

  const handleItemClick = (e, { name }) => setMenu(name);

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="push"
          vertical
          visible={visible}
          width="wide"
        >
          <Menu.Header>
            <h1 style={{ margin: "50px 0", textAlign: "center" }}>Logo Here</h1>
          </Menu.Header>
          <Menu.Item header>
            <h3>Navigasi</h3>
          </Menu.Item>
          <Menu.Item
            name="editorials"
            active={menu === "editorials"}
            onClick={handleItemClick}
          >
            Editorials
          </Menu.Item>

          <Menu.Item
            name="reviews"
            active={menu === "reviews"}
            onClick={handleItemClick}
          >
            Reviews
          </Menu.Item>
          <Menu.Item
            name="upcomingEvents"
            active={menu === "upcomingEvents"}
            onClick={handleItemClick}
          >
            Upcoming Events
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            {Children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

import React, { useState } from "react";
import { Menu, Segment, Sidebar } from "semantic-ui-react";
import Navbar from "./header";

export default function SidebarMenu({children}) {
  const [menu, setMenu] = useState();
  const [visible, setVisible] = useState(false)
  const handleItemClick = (e, { name }) => setMenu(name);
  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          onHide={() => setVisible(false)}
          animation="overlay"
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
            name="Tiket"
            active={menu === "Tiket"}
            onClick={handleItemClick}
          >
            Tiket
          </Menu.Item>
          <Menu.Item
            name="tiketSupport"
            active={menu === "tiketSupport"}
            onClick={handleItemClick}
          >
            Tiket Support
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Navbar visible={visible} SetVisible={() => setVisible(!visible)}/>  
          <Segment basic style={{minHeight:"90vh"}}>
            {children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

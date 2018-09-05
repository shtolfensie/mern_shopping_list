import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";

class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <Menu inverted stackable style={{ borderRadius: 0 }}>
        <Container>
          <Menu.Item header>ShoppingList</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={this.handleItemClick}
            >
              About
            </Menu.Item>
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleItemClick}
            >
              Contact
            </Menu.Item>
            <Menu.Item
              name="github"
              // active={activeItem === "github"}
              // onClick={this.handleItemClick}
              href="https://github.com/shtolfensie"
              target="_blank"
            >
              Github
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;

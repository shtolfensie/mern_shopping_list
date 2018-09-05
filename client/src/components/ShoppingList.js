import React, { Component } from "react";
import { Container, Button, List, Header } from "semantic-ui-react";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { name: "Milk", id: uuid() },
      { name: "Toast", id: uuid() },
      { name: "Gatorade", id: uuid() },
      { name: "Aligator", id: uuid() }
    ]
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          content="Add item"
          onClick={() => {
            const name = prompt("Enter Item");
            if (name)
              this.setState(state => ({
                items: [...state.items, { name, id: uuid() }]
              }));
          }}
        />
        <List divided>
          {items.map(item => (
            <List.Item key={item.id}>
              <List.Content
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                  }}
                >
                  <Header size="small">{item.name}</Header>
                </div>
                <Button
                  content="Remove"
                  onClick={() => {
                    this.setState(state => ({
                      items: state.items.filter(
                        currItem => currItem.id !== item.id
                      )
                    }));
                  }}
                />
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Container>
    );
  }
}

export default ShoppingList;

import React, { Component } from 'react'
import { Container, Button, List } from 'semantic-ui-react'
import uuid from 'uuid'


class ShoppingList extends Component {

  state = {
    items: [
      { name: 'Milk', id: uuid() },
      { name: 'Toast', id: uuid() },
      { name: 'Gatorade', id: uuid() },
      { name: 'Aligator', id: uuid() }
    ]
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button content='Add item'/>
        <List divided>
          {items.map(item => (
            <List.Item key={item.id}  >
              <List.Content style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>{item.name}</div>
                <Button content='Remove' />
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Container>
    )
  }

}

export default ShoppingList;
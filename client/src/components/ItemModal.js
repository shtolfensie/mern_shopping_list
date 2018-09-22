import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class ItemModal extends Component {
  state = {
    open: false,
    nameValue: ""
  };

  toggle = () => {
    this.setState({
      nameValue: "",
      open: !this.state.open
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name + "Value"]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.nameValue
    };

    this.props.addItem(newItem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.open} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item" />
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  onChange={this.onChange}
                  value={this.state.nameValue}
                />
                <Button
                  color="dark"
                  style={{ marginTop: "2rem" }}
                  block
                  disabled={!this.state.nameValue ? true : false}
                >
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});
const mapActionsToProps = {
  addItem
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ItemModal);

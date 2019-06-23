import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class Todo extends Component {

    render() {
        return this.props.value.map((list) => (
            <Item value={list} key={list.id} markDone={this.props.markDone} del={this.props.del} />
        ));


    }
}

Todo.prototypes = {
    value: PropTypes.array.isRequired
}

export default Todo;
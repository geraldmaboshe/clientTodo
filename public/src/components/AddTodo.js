import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onAdd = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });

    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }} >
                <input type="text" name="title" placeholder="Add a todo item" style={{ flex: '10', padding: '5px' }}
                    value={this.state.title} onChange={this.onAdd} />
                <input type="submit" value="Add" className="btn" style={{ flex: '1' }} />

            </form>

        )
    }
}
export default AddTodo;
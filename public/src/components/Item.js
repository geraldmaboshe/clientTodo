import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Item extends Component {
    styling = () => {
        return {
            textDecoration: this.props.value.done ? "line-through" : "none",
            padding: '10px',
            background: '#F0F8FF',
            borderBottom: '1px #ccc solid'
        }
    }
    markDone = (e) => {
        console.log(this.props);
    }
    render() {
        const { id, title } = this.props.value;
        return (
            <div style={this.styling()}>
                <p>
                    <input type="checkbox" onChange={this.props.markDone.bind(this, id)} />{' '}
                    {title}
                    <button style={buttonStyle} onClick={this.props.del.bind(this, id)}>Remove</button>
                </p>
            </div>
        )
    }
}

Item.prototypes = {
    value: PropTypes.object.isRequired
}

const buttonStyle = {
    background: 'red',
    color: 'white',
    padding: '4px',
    float: 'right',
    cursor: 'pointer',
    borderRadius: '6px'
}

export default Item

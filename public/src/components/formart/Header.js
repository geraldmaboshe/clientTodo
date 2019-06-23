import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <p>Todo</p>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '30px',
    fontSize: '50px'
}

export default Header;
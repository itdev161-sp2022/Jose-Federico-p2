import React from 'react';
import Button from './Button';
import "../index.css";

const Header = ({ showForm, changeTextAndColor }) => {
    return (
        <header className="header">
            <h2 className="app-header">Task Manager App</h2>
            <Button onClick={showForm} color={'#7367f0'} text={changeTextAndColor ? 'Close' : 'Add'} />
        </header>
    )
}

export default Header;

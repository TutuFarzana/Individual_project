import React, { Component } from 'react';

const Button = ({buttonClick,message}) => (
    <button onClick={buttonClick}> {message}</button>
);
export default Button;

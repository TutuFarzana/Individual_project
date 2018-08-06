import React, { Component } from 'react';
import button from './button';

const listBooks = ({id,name,price, children}) => (
    <li>
        <label>{id}</label>
        <label>{name}</label>
        <label>{price}</label>
        {children}
        
    </li>
);
export default listBooks;
import React, { Component } from 'react';
import books from '../Datas/data';
import ListBooks from './listBooks';
import Button from './button'

const DisplayBook = ({addToCart, removeFromCart}) => (
    <ul>
        {books.map(p=>(
            <ListBooks key={p.id} {...p}>
                <Button buttonClick = {addToCart} message='+'></Button>
                <Button buttonClick = {removeFromCart} message='-'></Button>
            </ListBooks>
        ))}
    </ul>
);
export default DisplayBook;
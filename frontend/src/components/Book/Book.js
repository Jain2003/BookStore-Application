import { Button } from '@mui/material';
import "./books.css";
import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
const Book = (props) => {
    const history = useNavigate()
    const {_id, name, author, description, price, image } = props.book;
    const deleteHandler = async () => {
       await axios
       .delete(`http://localhost:5000/books/${_id}`)
       .then((res) => res.data)
       .then(() => history("/"))
       .then(() => history("/books"))
    }
  return (
    <div className='card'>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs {price}</h2>
        <Button LinkComponent={Link} to={`/books/${_id}`} >Update</Button>
        <Button onClick={deleteHandler}>Delete</Button>
    </div>
  )
}

export default Book
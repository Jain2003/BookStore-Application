import React, { useEffect,useState } from 'react';
import Axios from "axios";
import Book from "./Book.js";
import "./books.css"
const fetchHandler = async () =>{
    return await Axios.get("http://localhost:5000/books").then((res) => res.data); 
};
const Books = () => {
    const [books, setBook] = useState();
    useEffect(() =>{
        fetchHandler().then((data) => {
            setBook(data.books);
            // console.log(data.books);
        });
    },[]);
    console.log(books);
  return (
    <div>
    <ul>
        {books && books.map((book, i) =>(
            <li key ={i}>
            <Book book={book} />
            </li>
        ))}
    </ul>
    </div>
  )
}

export default Books;
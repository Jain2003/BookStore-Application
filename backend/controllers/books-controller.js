// const { findByIdAndDelete } = require("../models/books.js");
const Book = require("../models/books.js");
const getAllBooks = async(req, res) =>{
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message: "No products found"});
    }
    return res.status(200).json({books});
}

const addNewBook = async(req,res) =>{
    const {name, author, description, price, available} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available
         });
         await book.save();
    }catch(err){
        console.log(err);
    } 

    if(!book){
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(201).json({book});
}

const getBookById = async(req,res) =>{
    const id = req.params.id;
    let book;
    try{
        book =await Book.findById(id);
    }catch (err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message: "no books of that id existed"})
    }
    return res.status(200).json({book});
}

const updateBook = async(req,res) =>{
    const id = req.params.id;
    const {name, author, description, price, available} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available
        })
        await book.save();
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message: "Book not found"});
    }
    return res.status(200).json({book});
}

const deleteBook = async(req,res) =>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message: "Book not found"})
    }
    return res.status(200).json(book);
}

exports.getAllBooks = getAllBooks;
exports.addNewBook = addNewBook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
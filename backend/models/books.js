// we define the schema of the particular model over here.

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    available:{
        type: Boolean,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;
const Book = require("../model/book");
const User = require("../model/user");
const mongoose = require("mongoose");

exports.Upload = async (req, res) => {
  try {
    const { title, author, description, category, image, bookUrl } = req.body;
    const _id = mongoose.mongo.ObjectId(req.params.uid);

    const user = await User.findById(_id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const book = await Book.create({
      title,
      author,
      description,
      category,
      image,
      bookUrl,
      user: { _id: user._id, name: user.name, isAdmin: user.isAdmin },
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.GetBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Update a book
exports.UpdateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Delete a book
exports.DeleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

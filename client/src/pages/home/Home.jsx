import React from "react";
import { useEffect } from "react";
import "./home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Home = () => {
  /* const books = [
    {
      _id: 1,
      username: "Safak Kocaoglu",
      uploader: "Admin",
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cover:
        "https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      _id: 2,
      username: "Safak Kocaoglu",
      uploader: "Admin",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cover:
        "https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      _id: 3,
      username: "Safak Kocaoglu",
      uploader: "Admin",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cover:
        "https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      _id: 4,
      username: "Safak Kocaoglu",
      uploader: "Admin",
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cover:
        "https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ]; */

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      await axios
        .get("/books/getBooks")
        .then((res) => {
          setBooks(res.data);

          // Fetch User Details
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            "Books fetching failed with status code: " + err.response.status
          );
        });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="book-container">
      <Toaster />
      {books?.map((book) => (
        <div className="book" key={book._id}>
          <div className="cover">
            <img src={book.image} alt="" className="bookCover" />
          </div>
          <div className="bookInfo">
            <div className="bookTitle">{book.title}</div>
            <div className="bookDesc">{book.description}</div>
            <div className="bookAuthor">
              Author: <span>{book.author}</span>
            </div>
            <div className="bookUploader">
              Uploader: <span>{book.user.name}</span>
            </div>
            <div className="bookButtons">
              <a className="bookLink" href={book.bookUrl}>
                Read
              </a>
              <a
                className="bookLink"
                href={book.bookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

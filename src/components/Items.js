import React from "react";
import "../styles/items.css";

const BookComponent = (props) => {
  const { books } = props;
  return (
    <div className="container">
      {books.map((book) => {
        return (
          <div key={book.id} className="card">
            <h1 className="card-title">{book.title}</h1>
            <div className="card-content">
              <p className="card-text">{book.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookComponent;

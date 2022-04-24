import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Book from "../Book/book"
import Category from "../Category/category";
import Author from "../Author/authors";
import LibraryService from "../service/LibraryService";
import Navbar from "../Navbar/navbar";
import AddBook from "../Book/addBook";
import EditBook from "../Book/editBook";

class App extends Component{

    constructor(props) {
      super(props);
      this.state = {
        books: [],
        categories: [],
        authors: [],
        selectedBook: {}
      }
    }

    render() {
      return (
          <div>
              <Navbar/>
              <Router>
                  <Routes>
                      <Route path={"/"} element={<Book books={this.state.books}
                                                            onDelete={this.deleteBook}
                                                            onMarkAsTaken={this.markBookAsTaken}
                                                            onEdit={this.getBook}/>}/>
                      <Route path={"/books"} element={<Book books={this.state.books}
                                                            onDelete={this.deleteBook}
                                                            onMarkAsTaken={this.markBookAsTaken}
                                                            onEdit={this.getBook}/>}/>
                      <Route path={"/books/add"} element={<AddBook categories={this.state.categories}
                                                                   authors={this.state.authors}
                                                                   onAddBook={this.addBook}/>}/>
                      <Route path={"/books/edit/:id"} element={<EditBook book={this.state.selectedBook}
                                                                         categories={this.state.categories}
                                                                         authors={this.state.authors}
                                                                         onEdit={this.editBook}/>}/>
                      <Route path={"/categories"} element={<Category categories={this.state.categories}/>}/>
                      <Route path={"/authors"} element={<Author authors={this.state.authors}/>}/>
                  </Routes>
              </Router>
          </div>
      );
    }

    getBooks = () => {
        LibraryService.getAllBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    addBook = (name, category, author, availableCopies) => {
        LibraryService.addNewBook(name, category, author, availableCopies)
            .then(() => {
                this.getBooks();
            })
    }

    deleteBook = (id) => {
        LibraryService.deleteBooks(id)
            .then(() => {
                this.getBooks();
            });
    }

    markBookAsTaken = (id) => {
        LibraryService.takeBook(id)
            .then(() => {
                this.getBooks();
            });
    }

    getAuthors = () => {
        LibraryService.getAllAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            })
    }

    getCategories = () => {
        LibraryService.getAllCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }

    getBook = (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name, category, author, availableCopies) => {
        LibraryService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.getBooks();
            });
    }

    componentDidMount() {
        this.getBooks();
        this.getAuthors();
        this.getCategories();
    }
}
export default App;
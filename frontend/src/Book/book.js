import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

export class Book extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);

        return (
            <div className={"container"}>
                <div className={"row text-center"}>
                    <div className={"col"}>
                        <h2 className={"mt-4"}>Books</h2>
                        <div className={"table-responsive"}>
                            <table className={"table table-striped mt-4"}>
                                <thead>
                                <tr>
                                    <th scope={"col"}>Name</th>
                                    <th scope={"col"}>Category</th>
                                    <th scope={"col"}>Author</th>
                                    <th scope={"col"}>Available copies</th>
                                    <th colSpan={"3"} scope={"col"}>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {books}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={"row mt-3"}>
                    <div className={"col"}>
                        <a href={"/books/add"} title={"Add new book"} className={"btn btn-primary text-center"}>Add new
                            book</a>
                    </div>
                </div>
                <ReactPaginate previousLabel={"Back"}
                               previousClassName={"btn btn-primary btn-sm"}
                               previousLinkClassName={"text-white text-decoration-none m-2"}
                               nextLabel={"Next"}
                               nextClassName={"btn btn-primary btn-sm"}
                               nextLinkClassName={"text-white text-decoration-none m-2"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"m-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-3 justify-content-center"}
                               activeClassName={"active"}/>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((term) => {
            return (
                <tr key={term.id}>
                    <td>{term.name}</td>
                    <td>{term.category}</td>
                    <td>{term.author.name}</td>
                    <td>{term.availableCopies}</td>
                    <td>
                        <a title={"Delete"} className={"btn btn-danger"}
                           onClick={() => this.props.onDelete(term.id)}>
                            Delete
                        </a>
                    </td>
                    <td>
                        <Link className={"btn btn-success"}
                              onClick={() => this.props.onEdit(term.id)}
                              to={`/books/edit/${term.id}`}>
                            Edit
                        </Link>
                    </td>
                    <td>
                        <a title={"Mark As Taken"} className={"btn btn-dark"}
                           onClick={() => this.props.onMarkAsTaken(term.id)}>
                            Mark As Taken
                        </a>
                    </td>
                </tr>
            );
        }).filter((books, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}
export default Book;
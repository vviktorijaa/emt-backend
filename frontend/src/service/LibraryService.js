import axios from "../custom-axios/axiosInstance";

const LibraryService = {
    getAllBooks: () => {
        return axios.get("/books");
    },
    addNewBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category": category,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    deleteBooks: (id) => {
        return axios.delete(`books/${id}/delete`);
    },
    takeBook: (id) => {
        return axios.put(`books/${id}/markAsTaken`);
    },
    getAllAuthors: () => {
        return axios.get("/authors");
    },
    getAllCategories: () => {
        return axios.get("/categories");
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    editBook: (id, name, category, author, availableCopies) => {
        console.log(name+" NAME");
        console.log(category+" category");
        console.log(author+" author");
        console.log(availableCopies+" availableCopies");
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        });
    }
}
export default LibraryService;
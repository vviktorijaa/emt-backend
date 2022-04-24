import React from "react";
import {useNavigate} from "react-router-dom";

const AddBook = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "BIOGRAPHY",
        author: 1,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name, category, author, availableCopies);
        navigate("/books");
    }

    return(
        <div className={"container w-25 mt-4"}>
            <h2 className={"text-center"}>Add book</h2>
            <form className={"mt-4"}
                  onSubmit={onFormSubmit}>
                <div className={"form-group mb-3"}>
                    <label className={"mb-2"}>Name</label>
                    <input type={"text"}
                           name={"name"}
                           className={"form-control"}
                           placeholder={"Enter book name"}
                           onChange={handleChange}
                           required/>
                </div>
                <div className={"form-group mb-3"}>
                    <label className={"mb-2"}>Category</label>
                    <select className={"form-control"}
                            name={"category"}
                            onChange={handleChange}>
                        {props.categories.map((term) =>
                            <option value={term} key={term}>{term}</option>
                        )}
                    </select>
                </div>
                <div className={"form-group mb-3"}>
                    <label className={"mb-2"}>Author</label>
                    <select className={"form-control"}
                            name={"author"}
                            onChange={handleChange}>
                        {props.authors.map((term) =>
                            <option value={term.id} key={term}>{term.name}</option>
                        )}>
                    </select>
                </div>
                <div className={"form-group mb-3"}>
                    <label className={"mb-2"}>Available copies</label>
                    <input type={"text"}
                           className={"form-control"}
                           placeholder={"Enter available copies"}
                           name={"availableCopies"}
                           onChange={handleChange}
                           required/>
                </div>
                <button type={"submit"} className={"btn btn-primary mt-2"}>Add book</button>
            </form>
        </div>
    )
}
export default AddBook;
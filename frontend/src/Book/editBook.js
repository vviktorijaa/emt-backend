import React from 'react';
import {useNavigate} from 'react-router-dom';

const EditBook = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "",
        author: 1,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== "" ? formData.category : props.book.category;
        const author = formData.author !== 1 ? formData.author : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEdit(props.book.id, name, category, author, availableCopies);
        navigate("/books");
    }

    return(
        <div className={"container w-25 mt-4"}>
            <h2 className={"text-center"}>Edit book</h2>
            <form className={"mt-4"}
                  onSubmit={onFormSubmit}>
                <div className={"form-group mb-3"}>
                    <label className={"mb-2"}>Name</label>
                    <input type={"text"}
                           name={"name"}
                           className={"form-control"}
                           placeholder={props.book.name}
                           onChange={handleChange}/>
                </div>
                <div className={"form-group mb-3"}>
                    <label className={"mb-2"}>Category</label>
                    <select name="category" className="form-control" onChange={handleChange}>
                        {props.categories.map((term) =>
                            <option value={term} key={term}>{term}</option>
                        )}
                    </select>
                </div>
                <div className={"form-group mb-3"}>
                    <label className={"mb-2"}>Author</label>
                    <select name="author" className="form-control" onChange={handleChange}>
                        {props.authors.map((term) =>
                            <option value={term.id} key={term.id}>{term.name}</option>
                        )}>
                    </select>
                </div>
                <div className={"form-group mb-3"}>
                    <label className={"mb-2"}>Available copies</label>
                    <input type="text"
                           className="form-control"
                           id="availableCopies"
                           name="availableCopies"
                           placeholder={props.book.availableCopies}
                           onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Edit book</button>
            </form>
        </div>
    )
}

export default EditBook;
import React from "react";

const author = (props) =>{

    return(
        <div className={"container"}>
            <div className={"row text-center"}>
                <div className={"col"}>
                    <h2 className={"mt-4"}>Authors</h2>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped mt-4"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Surname</th>
                                <th scope={"col"}>Country</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.authors.map((term) => {
                                return (
                                    <tr key={term.id}>
                                        <td>{term.name}</td>
                                        <td>{term.surname}</td>
                                        <td>{term.country.name}</td>
                                    </tr>
                                );
                            })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default author;
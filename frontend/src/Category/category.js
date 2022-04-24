import React from "react";

const category = (props) =>{

    return(
        <div className={"container w-25"}>
            <div className={"row text-center"}>
                <div className={"col"}>
                    <h2 className={"mt-4"}>Categories</h2>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped mt-4"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Category name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.categories.map((term) => {
                                return (
                                    <tr key={term}>
                                        <td>{term}</td>
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
export default category;
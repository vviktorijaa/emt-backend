const navbar = () => {
    return(
        <nav className={"navbar navbar-expand-lg navbar-light bg-light p-3"}>
            <a className={"navbar-brand"} href={"/"}>Online Library</a>
            <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"/books"}>Books</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"/categories"}>Categories</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"/authors"}>Authors</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default navbar;
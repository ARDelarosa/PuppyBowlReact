import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div id="navbar">
            <Link to='/'>Home</Link>
            <link to='new-player'></link>
        </div>
    )
}

export default NavBar;
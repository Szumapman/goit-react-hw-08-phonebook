import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/contacts"}>Contacts</NavLink>
            </nav>
            <div>
                <NavLink to={"/register"}>Register</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
            </div>
        </>
    );
};

export default Navigation;
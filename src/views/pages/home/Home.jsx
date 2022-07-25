import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/login" className="pe-5">Login</Link>
            <Link to="/verify-email">Verify Email</Link>
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Home;

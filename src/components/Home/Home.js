import "../index.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="intro">
            <p className="text-5xl font-bold m-3">TaskFlow Manager</p>
            <p className="m-3 p-3 text-3xl font-medium">A Collaborative Task Management Application</p>
            <Link to="/login">
                <button className='glowing-btn'><span className='glowing-txt'>GET <span className='faulty-letter'></span>STARTED</span></button>
            </Link>
        </div>
    )
}

export default Home;
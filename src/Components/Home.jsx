import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">
        <button className="p-4 ml-10  btn btn-success">Login</button>
      </Link>
    </div>
  );
};

export default Home;

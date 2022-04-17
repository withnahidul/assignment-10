import { Link } from "react-router-dom";
import "./Home.css";

const Header = () => {
  return (
    <section className="">
      <div className="home-container">
        <div className="header-title">
          <h3 className="text-6xl">Nis wedding photographer</h3>
          <p className="text-4xl">
            {" "}
            We’ll create the ultimate 5-star wedding experience for you and your
            beloved{" "}
          </p>
          <br />
          <p>
            700, Bindabon Road <br /> Dhaka - 1200 <br />
            Phone - 879-22200
          </p>
          <Link to="/checkout">
            <button>Get Appointment</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;

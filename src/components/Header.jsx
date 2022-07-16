import { Link, NavLink } from "react-router-dom";

const Header = ()  => {
    return(
      <Link to="/">
      <div className="header">
      <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" height="100px" />
      </div>
      </Link>
    );
}

export default Header;
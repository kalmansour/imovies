import logo from "../movie-logo.png";
// Styles
import { NavStyled, Logo, NavItem } from "../styles";

export const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/" href="#">
        <img src={logo} alt="logo" width="50" />
        <h3>MovieHunt</h3>
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ml-left">
          <li className="nav-item active">
            <NavItem className="nav-item" to="/home" style={{ padding: 10 }}>
              Home
            </NavItem>
          </li>
          <li className="nav-item ">
            <NavItem className="nav-item" to="about" style={{ padding: 10 }}>
              About
            </NavItem>
          </li>
          <li className="nav-item ">
            <NavItem className="nav-item" to="movies" style={{ padding: 10 }}>
              Movies
            </NavItem>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="navbar"> 
      <nav>
        <div>
          <h1 className="navbarH1">Language Shot</h1>
        </div> 
        <div className="welcome"><span>Hello {user && user.name}💗</span></div>
        <div className="navbar-button">
          <Link to="/">
            <button>Home</button>
          </Link>

          {isLoggedIn && (
            <> 
           
              <Link to="/LanguagesList">
              <button>Chose Language</button>
              </Link>
              <Link to="/profile">
              <button>Your Profile</button>
              </Link>
              <button onClick={logOutUser}>Log Out</button>            
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/LanguagesList">
              <button>Chose Language</button>
              </Link>
              <Link to="/signup"> <button>Sign Up</button> </Link>
              <Link to="/login"> <button>Log In</button> </Link>
            </>
          )}
        </div>    
      </nav>
    </div>
  );
}

export default Navbar;
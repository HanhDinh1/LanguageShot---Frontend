import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Link to="/">
      <div className="navbar"> 
        <nav 
          style={{
            backgroundColor: '#F0A500',
            // paddingTop: '10px',
          }}>
  
            <div className="logo">
              <div className="logo-img">
                <img src="/languageShot.png" alt="languageShot" height="105px"></img>
              </div>
              <div>
                <h1 className="navbarH1"> Language Shot</h1>
              </div>
            </div> 

            <div className="welcome"><span>Hello {user && user.name}🤍</span></div>
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
          <svg xmlns="http://www.w3.org/2000/svg" style={{
          height: '85px',
          color: 'white'
          }} viewBox="0 0 100 0" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>   
        </nav>
      </div>
    </Link>
  );
}

export default Navbar;
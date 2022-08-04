import { AuthContext} from "../context/auth.context";
import { useContext } from "react";
import NotePage from "./NotePage";

function UserProfile() {
    const{isLoggedIn, user } = useContext(AuthContext);
    console.log(user);

    return(
        <div>
            <NotePage/>
            {/* {isLoggedIn && (
                <>
                    <h1 className="user">Hello, {user && user.user.userName}</h1>
                    <div className="userProfile">

                    </div>
                </>
            )} */}
        </div>
    )
}

export default UserProfile;
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser} from "@clerk/clerk-react"
import "./authbutton.css";
function Auth() {
    return(
        <>
            <div className="sign-in-container">
                <SignedOut>
                    <SignUpButton className="signup" mode="modal"/>
                    <SignInButton className="signin"mode="modal">Login</SignInButton> 
                </SignedOut> 
                <SignedIn>
                    <UserButton className="userimg"/>
                </SignedIn>

            </div>

            </>  
    );
}

export default Auth
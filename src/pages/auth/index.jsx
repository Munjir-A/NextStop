import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser} from "@clerk/clerk-react"

import "./authbutton.css";
function Auth() {
    const {user} = useUser();
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
            <div className="WelcomeDisplay">
                <SignedIn>
                    <h1>
                        Welcome {user?.firstName}! Start Tracking Your Internships.
                    </h1>
                </SignedIn>
                <SignedOut>
                    <h1>
                        Welcome to NextStop! Start Tracking Your Internships.
                    </h1>
                </SignedOut>
            </div>
            </>  
    );
}

export default Auth
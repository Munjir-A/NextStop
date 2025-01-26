import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser} from "@clerk/clerk-react"
import Auth from "../auth";
import welcome from "./welcome";
function Home(){
    const {user} = useUser();

    return(
        <>
            <header>
                <a className="HeaderTitle" href="./">NextStop</a>
                <nav>
                    <ul className="HeaderNavigations">
                        <li><a className="nav" href="about.html">About</a></li>
                        <li><a className="nav" href="tracker.html">Tracker</a></li>
                        <li><a className="nav" href="contact.html">Contact</a></li>
                    </ul>
                </nav>
                <a className="Login"><Auth/></a>
            </header>
            <div className="WelcomeDisplay">
                <SignedIn>
                    <a>
                    <welcome/> {user?.firstName}! Start Tracking Your Internships.
                    </a>
                </SignedIn>
                <SignedOut>
                    <a>
                    <welcome/> to NextStop! Start Tracking Your Internships.
                    </a>
                </SignedOut>
            </div>
        </>
    );
}
export default Home


import Auth from "../auth";
function Home(){
    return(
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

    );
}
export default Home


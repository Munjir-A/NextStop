function Home(){
    return(
        <header>
            <a className="HeaderTitle" href="index.html">NextStop</a>
            <nav>
                <ul className="HeaderNavigations">
                    <li><a className="nav" href="about.html">About</a></li>
                    <li><a className="nav" href="tracker.html">Tracker</a></li>
                    <li><a className="nav" href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <a className="Login" href="login.html"><button>Login</button></a>
        </header>

    );
}
export default Home
function Header(){
    return(
        <header>
            <a className="HeaderTitle" href="index.html">NextStop</a>
            <nav>
                <ul className="HeaderNavigations">
                    <li><a className="nav" href="">About</a></li>
                    <li><a className="nav" href="#">Tracker</a></li>
                    <li><a className="nav" href="#">Contact</a></li>
                </ul>
            </nav>
            <a className="Login" href="#"><button>Login</button></a>
        </header>

    );
}
export default Header
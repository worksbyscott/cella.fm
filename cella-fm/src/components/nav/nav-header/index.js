import { Link } from 'react-router-dom'

//SVGS



const NavHeader = () => {

    return (
        <div className="nav-header">
            <div className="container nav-header-elements">
                <div className="nav-logo">
                    <Link to='/'>
                        <h1>Cella.</h1>
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to='/about'><a>About</a></Link>
                    <Link to='/shows'><a>Shows</a></Link>
                    <Link to='/schedule'><a>Schedule</a></Link>
                </div>
                <div className="nav-icon">
                    <Link>
                        <a className="icon-label">Schedule</a>
                    </Link>
                    <button className="nav-menu">

                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavHeader;
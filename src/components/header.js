import React, {useRef} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Header = () => {

  const headerRef = useRef(null);

  const toggleNav = e => {
    // headerRef.current.classList.toggle('active_nav');
  };


    
  return (
    <header className='fixed-menu' id='header'>
      <div className='menu-header'>
          <Link id='logo' to='/'>
            <StaticImage
              src="../images/nav/logo.png"
              alt="A Gatsby astronaut"
              width={100}
            />
          </Link>
        </div>

        <button id='nav-toggle' onClick={e => toggleNav(e)}>
          <span></span>
        </button>

        <div className='nav-wrapper'>
          <div className='navbar'>
            <ul className='navbar-nav'>

              <li className='nav-item'>
                <Link
                  className='nav-link'
                  activeClassName="active"
                  to='/'
                >
                  <StaticImage
                    src="../images/nav/nav-home.png"
                    alt="Icon"
                    className="img"
                    width={20}
                  />
                  home
                </Link>
              </li>
              
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  activeClassName="active"
                  to='/menu'
                >
                  <StaticImage
                    src="../images/nav/nav-menu.png"
                    alt="Icon"
                    className="img"
                    width={20}
                  />
                  Menu
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className='nav-link'
                  activeClassName="active"
                  to='/book'
                >
                  <StaticImage
                    src="../images/nav/nav-book.png"
                    alt="Icon"
                    className="img"
                    width={20}
                  />
                  Book A Table
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className='nav-link'
                  activeClassName="active"
                  to='/about'
                >
                  <StaticImage
                    src="../images/nav/nav-about.png"
                    alt="Icon"
                    className="img"
                    width={20}
                  />
                  About
                </Link>
              </li>

              
            </ul>
          </div>
          
        </div>

    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

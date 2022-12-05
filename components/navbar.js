import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar-navbar ${props.rootClassName} `}>
        <img
          alt="Planical7012"
          src={props.BrandingLogo}
          className="navbar-branding-logo"
        />
        <div id="mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-branding">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="navbar-image"
            />
            <div id="close-mobile-menu" className="navbar-container">
              <svg viewBox="0 0 1024 1024" className="navbar-icon">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="navbar-nav-links">
            <span className="nav-link">Features</span>
            <span className="nav-link">Why us</span>
            <span className="nav-link">Prices</span>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started">
            <span className="navbar-text">Get started</span>
          </div>
        </div>
        <div className="navbar-nav-content">
          <div className="navbar-nav-links1">
            <Link href="/">
              <a className="navbar-link05 nav-link">HOME</a>
            </Link>
            <Link href="/menu" id="MENU">
              <a className="navbar-link07 nav-link">MENU</a>
            </Link>
            <Link href="/contact">
              <a className="navbar-link09 nav-link">CONTACT</a>
            </Link>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
          ></DangerousHTML>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar-navbar {
            width: 1318px;
            height: 83px;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: 1400px;
            align-self: auto;
            align-items: center;
            flex-shrink: 1;
            background-color: white;
          }
          .navbar-branding-logo {
            width: 105px;
            height: 77px;
            box-sizing: content-box;
          }
          .navbar-mobile-menu {
            gap: var(--dl-space-space-twounits);
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image {
            width: 100px;
            filter: brightness(0) saturate(100%);
            object-fit: cover;
          }
          .navbar-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-icon {
            width: 24px;
            height: 24px;
          }
          .navbar-nav-links {
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-gray-black);
            display: flex;
            flex-direction: column;
          }
          .navbar-text {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-nav-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            margin-left: auto;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-nav-links1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 479px;
            border-color: transparent;
          }
          .navbar-link05 {
            color: black;
            text-decoration: none;
          }
          .navbar-link07 {
            color: black;
            text-decoration: none;
          }
          .navbar-link09 {
            color: black;
            text-decoration: none;
          }
          .navbar-root-class-name {
            width: 100%;
          }
          .navbar-root-class-name1 {
            width: 100%;
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .navbar-branding-logo {
              left: -1px;
              width: 102px;
              bottom: 7px;
              height: 65px;
              position: absolute;
            }
            .navbar-branding {
              width: 100%;
            }
            .navbar-nav-links {
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .navbar-nav-content {
              position: relative;
            }
            .navbar-nav-links1 {
              left: -344px;
              width: 187px;
              bottom: -45px;
              height: 24px;
              display: flex;
              position: absolute;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar {
              padding-bottom: 6px;
            }
            .navbar-branding-logo {
              top: 21px;
              left: 2px;
              width: 56px;
              height: 41px;
            }
            .navbar-nav-content {
              height: 55px;
            }
            .navbar-nav-links1 {
              left: -248px;
              width: 359px;
              bottom: -3px;
              height: 38px;
              margin-right: 0px;
            }
            .navbar-link05 {
              font-style: normal;
              font-weight: 300;
            }
            .navbar-link07 {
              font-style: normal;
              font-weight: 300;
            }
            .navbar-link09 {
              top: 2px;
              left: 168px;
              color: black;
              position: absolute;
              font-style: normal;
              font-weight: 300;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  image_src1: '/playground_assets/planical7012-ttpb.svg',
  image_alt1: 'image',
  rootClassName: '',
  BrandingLogo: '/playground_assets/catering-removebg-preview-2-200h.png',
}

Navbar.propTypes = {
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  BrandingLogo: PropTypes.string,
}

export default Navbar

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="top-header" id="Parent_Scroll_Div">
      <nav className="navbar navbar-expand-xl align-items-center gap-3 container px-4 px-lg-0">
        <div className="logo-header d-xl-flex align-items-center gap-2">
          <div className="logo-icon">
            <img src="/assets/images/logo.svg" className="logo-img"  alt="logo" />
          </div>          
        </div>
        <div className="btn-toggle d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
          <img src="/assets/images/menu.svg" width={28} className="me-2" />
        </div>

        <div className="offcanvas offcanvas-start w-260" tabIndex={-1} id="offcanvasNavbar">
          <div className="offcanvas-header border-bottom h-70">
            <div className="d-flex align-items-center gap-2">
              <div className="">
                <img src="/assets/images/logo.svg" className="logo-icon"  alt="logo icon" />
              </div>
              <div className="">
                <h4 className="logo-text">Maxton</h4>
              </div>
            </div>
            <a href="#" className="primaery-menu-close" data-bs-dismiss="offcanvas">
              <i className="material-icons-outlined">close</i>
            </a>
          </div>
          <div className="offcanvas-body p-0 primary-menu">
            <ul className="navbar-nav align-items-center mx-auto gap-0 gap-xl-1">
              <li className="nav-item">
                <a className="nav-link">
                  <div className="menu-title">About</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <div className="menu-title">Blog</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <div className="menu-title">Support</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-none d-xl-flex">
          <button className="btn btn-primary d-flex align-items-center rounded-5 gap-2 px-4">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";

function Header() {
  return (
    <div className="navbar-logo-left wf-section">
      <div className="navbar-logo-left-container shadow-three w-nav">
        <div className="container">
          <div className="navbar-wrapper">
            <a href="#" className="navbar-brand w-nav-brand">
              <img
                src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a1f4b90ec00ea847095eba_logo%20(3).png"
                loading="lazy"
                alt=""
              />
            </a>
            <div className="account">
              <div className="img">
                <img
                  src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a1f5cdbf54fb64bbb05c65_icon_Switcher_HiFi.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div>
                <div className="account-swit">Account Switcher</div>
                <div data-hover="false" data-delay="0" className="w-dropdown">
                  <div className="dropdown-toggle w-dropdown-toggle">
                    <div className="icon w-icon-dropdown-toggle"></div>
                    <div className="categ-name">Category 99</div>
                  </div>
                  <nav className="dropdown-list w-dropdown-list">
                    <a href="#" className="dropdown-link w-dropdown-link">
                      Link 1
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

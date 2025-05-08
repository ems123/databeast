import { useEffect } from "react";

import { Logo } from "../../data/data-layout/data-Header.js";

import { Addshrink, addActiveClass, OpenMenu, moveSmooth } from "../../utils/";

import "./header.css";

import Preloader from "../../components/Preloader";

const Header = () => {
  

  function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdownMenu = event.target.nextElementSibling; // Get the dropdown menu
    
    const parent = event.currentTarget.parentElement;
    parent.classList.toggle('open');
  
    // Close other open dropdowns
    document.querySelectorAll('.dropdown1').forEach(item => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });
  }
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown1')) {
      document.querySelectorAll('.dropdown1').forEach(item => item.classList.remove('open'));
    }
  });
  
  

  useEffect(() => {
    Addshrink();
  }, []);

  useEffect(() => {
    OpenMenu();
  }, []);

  useEffect(() => {
    moveSmooth();
  }, []);

  return (
    <>
      <Preloader />
      <header className="header-area wow fadeInDown" data-wow-delay="0.2s">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav
              className="classy-navbar justify-content-between"
              id="dreamNav"
            >
              <a className="nav-brand" href="https://databeast.ai">
                <img src={Logo} alt="logo" />
                <span className="text-white" style={{ fontSize: 15 }}>
                  DATABEAST.AI
                </span>
              </a>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler" onClick={addActiveClass}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap" onClick={addActiveClass}>
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                <div className="classynav">
                  <ul id="nav">
                    <li>
                      <a onClick={moveSmooth} href="https://databeast.ai">
                        Home
                      </a>
                    </li>
                    <li>
                      <a onClick={moveSmooth}  href="https://databeast.ai/#about"/* href={`${window.location.origin}#about`} */>
                        About
                      </a>
                    </li>
                    <li>
                      <a onClick={moveSmooth} href="#roadmap">
                        Roadmap
                      </a>
                    </li>
                    <li>
                      <a onClick={moveSmooth} href="#services">
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={moveSmooth}
                      
                        href="/Whitepaper.pdf" target="_blank" rel="noopener noreferrer"
                      >
                        WhitePaper
                      </a>
                    </li>
                    <li>
                      <a onClick={moveSmooth} href="#team">
                        Team
                      </a>
                    </li>
                    <li>
                      <a onClick={moveSmooth} href="#contact">
                        Contact
                      </a>
                    </li>
                    <li class="dropdown1">
  <a href="" onClick={(e) => toggleDropdown(e)}>Products</a>
  <ul class="dropdown-menu2">
    <li><a href="https://crypto.databeast.ai/">Crypto AI</a></li>
    <li><a href="https://databeast.ai/try-now">Whitepaper AI</a></li>
    <li style={{whiteSpace:"nowrap"}}><a href="https://crypto.databeast.ai/blockexplorer">Crypto Explorer</a></li>
  </ul>
</li>

                    {/* <li>
                      <a onClick={moveSmooth} href="https://crypt-databeast-ai.web.app/">
                        Crypto AI
                      </a>
                    </li> */}
                    
                  </ul>
                  <a href="/try-now" className="btn login-btn ml-50">
                  Whitepaper AI
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

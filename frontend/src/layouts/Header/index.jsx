import {useEffect} from 'react'

import {Logo} from '../../data/data-layout/data-Header.js';

import {Addshrink , addActiveClass , OpenMenu , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

const Header = () => {

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      OpenMenu()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

  return (
    <>
      <Preloader />
      <header className="header-area wow fadeInDown" data-wow-delay="0.2s">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav className="classy-navbar justify-content-between" id="dreamNav">
              <a className="nav-brand" href="#"><img src={Logo} alt="logo" /></a>
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
                    <li><a onClick={moveSmooth} href="#home">Home</a></li>
                    <li><a onClick={moveSmooth} href="#about">About</a></li>
                    <li><a onClick={moveSmooth} href="#services">Services</a></li>
                    <li><a onClick={moveSmooth} href="#roadmap">Roadmap</a></li>
                    <li><a onClick={moveSmooth} href="#team">Team</a></li>
                    <li><a onClick={moveSmooth} href="#contact">Contact</a></li>
                  </ul>
                  <a href="#" className="btn login-btn ml-50">Log in</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
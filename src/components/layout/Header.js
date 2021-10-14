import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import "./Header.css";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const list = useRef();
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  return (
    <header
      ref={(nav) => {
        if (nav) {
          nav.style.setProperty("position", "fixed", "important");
        }
      }}
      {...props}
      className={classes}
      style={{ position: "fixed important", backgroundColor: "#09091ef0" }}
    >
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <div
            style={{
              position: "relative",
              width: "6%",
              marginTop: "-1.5rem",
            }}
          >
            <img
              src={require("../../assets/images/ipec.png")}
              alt="Ipec"
              style={{
                position: "absolute",
                zIndex: "10000",
                top: "-1rem",
                left: "-1rem",
                margin: "0px",
                width: "100%",
              }}
            />
          </div>
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    ref={list}
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li>
                      <Link
                        to="/"
                        onClick={closeMenu}
                        style={{
                          fontSize: ".82rem",
                          letterSpacing: "2.5px",
                          color: "white",
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/events"
                        onClick={closeMenu}
                        style={{
                          fontSize: ".82rem",
                          letterSpacing: "2.5px",
                          color: "white",
                        }}
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/advisoryCommittee"
                        onClick={closeMenu}
                        style={{
                          fontSize: ".82rem",
                          letterSpacing: "2.5px",
                          color: "white",
                        }}
                      >
                        Advisory committee
                      </Link>
                    </li>

                    {/* <li>
                      <Link
                        to="/sponsors"
                        onClick={closeMenu}
                        style={{
                          fontSize: ".82rem",
                          letterSpacing: "2.5px",
                          color: "white",
                        }}
                      >
                        Sponsors
                      </Link>
                    </li> */}

                    <li>
                      <Link
                        to="/esports"
                        onClick={closeMenu}
                        style={{
                          fontSize: ".82rem",
                          letterSpacing: "2.5px",
                          color: "white",
                        }}
                      >
                        E-sports
                      </Link>
                    </li>
                  </ul>
                  {!hideSignin && (
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Link
                          to="/registration"
                          className="button button-primary button-wide-mobile button-sm register"
                          onClick={closeMenu}
                          style={{
                            fontSize: "1.0rem",
                            letterSpacing: "2.5px",
                            color: "white",
                            backgroundColor: "#8d0a0a",
                          }}
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

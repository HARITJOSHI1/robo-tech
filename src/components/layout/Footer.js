import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer
      {...props}
      className={classes}
      styles={{ backgroundColor: props.bg }}
    >
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
          </div>
        </div>
        {/* <div className="site-content" style={{marginTop: '-2rem'}}>
          <p style={{margin: '0', fontWeight: 'bold'}}>Contact us </p>
          <div style={{fontSize: '.75rem'}}>
            You guys can contact either of the coordinators for any sorts of
            issues or queries regarding the event.
            <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
              Nishant: <span style={{ color: "white" }}>9910814601</span>
              <br />
              Piyush: <span style={{ color: "white" }}>9999290571</span>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;

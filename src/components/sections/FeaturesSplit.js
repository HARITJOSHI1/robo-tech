import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Events Description",
    paragraph:
      "There will be 4 broad events and each event test your intelligence, you creativity, team work and your interest.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Event - #1
                </div>
                <h3 className="mt-0 mb-12">Fastline Followers</h3>
                <p className="m-0" style={{ textAlign: "justify" }}>
                  Build your own autonomous robot within the specified
                  dimensions to achieve the maximum speed to beat other robots
                  on the given track and reach the destination in minimum time.
                </p>
                  <Link
                    to="/fastLineFollowers"
                    className="button button-primary button-wide-mobile button-sm register"
                    style={{
                      fontSize: "1.0rem",
                      color: "white",
                      marginTop: "2rem",
                      backgroundColor: "#6163FF",
                    }}
                  >
                    Know more
                  </Link>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/fastline-followers.png")}
                  alt="Features split 01"
                  width={628}
                  height={496}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Event - #2
                </div>
                <h3 className="mt-0 mb-12">Hackathon</h3>
                <p className="m-0" style={{ textAlign: "justify" }}>
                  Hackathons tend to have a specific focus, which can include
                  the programming language used, the operating system, an
                  application, an API, or the subject and the demographic group
                  of the programmers.
                </p>
                  <Link
                    to="/hackathon"
                    className="button button-primary button-wide-mobile button-sm register"
                    style={{
                      fontSize: "1.0rem",
                      color: "white",
                      marginTop: "2rem",
                      backgroundColor: "#6163FF",
                    }}
                  >
                    Know more
                  </Link>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/code.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Event - #3
                </div>
                <h3 className="mt-0 mb-12">Water Rocket</h3>
                <p className="m-0" style={{ textAlign: "justify" }}>
                  Design and build a water rocket within the specified
                  dimensions robust enough to with stand the pressure and when
                  launched from the launch pad achieves the maximum altitude
                  above ground level.
                </p>
                  <Link
                    to="/waterRocket"
                    className="button button-primary button-wide-mobile button-sm register"
                    style={{
                      fontSize: "1.0rem",
                      color: "white",
                      marginTop: "2rem",
                      backgroundColor: "#6163FF",
                    }}
                  >
                    Know more
                  </Link>
              </div>

              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/rocket.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Event - #4
                </div>
                <h3 className="mt-0 mb-12">E-sports</h3>
                <p className="m-0" style={{ textAlign: "justify" }}>
                  An e-Sport Valorant Tournament, "EXPOSITION TOURNAMENT", in
                  which twelve teams will battle it out in single-elimination
                  format matches.
                </p>
                <Link
                  to="/esports"
                  className="button button-primary button-wide-mobile button-sm register"
                  style={{
                    fontSize: "1.0rem",
                    color: "white",
                    marginTop: "2rem",
                    backgroundColor: "#6163FF",
                  }}
                >
                  Know more
                </Link>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/esports.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;

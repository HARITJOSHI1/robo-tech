import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: props.title,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses} style={{ marginTop: "2rem" }}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <img src={props.img1} alt="default" />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span
                    className="testimonial-item-name text-color-high"
                    style={{ fontSize: "1.3rem" }}
                  >
                    {props.name1}
                  </span>
                  {/* <span className="text-color-low"> / </span> */}
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <img src={props.img2} alt="default" />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span
                    className="testimonial-item-name text-color-high"
                    style={{ fontSize: "1.3rem" }}
                  >
                    {props.name2}
                  </span>
                  {/* <span className="text-color-low"> / </span> */}
                  <span className="testimonial-item-link">
                    {/* <a href="#0">AppName</a> */}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <img src={props.img3} alt="default" />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span
                    className="testimonial-item-name text-color-high"
                    style={{ fontSize: "1.3rem" }}
                  >
                    {props.name3}
                  </span>
                  {/* <span className="text-color-low"> / </span> */}
                  <span className="testimonial-item-link">
                    {/* <a href="#0">AppName</a> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;

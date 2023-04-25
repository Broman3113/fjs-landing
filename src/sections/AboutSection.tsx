import React from 'react';
import classes from "@/App.module.scss";
import AboutFeatures from "@/components/Home/AboutFeatures/AboutFeatures";

const AboutSection = () => {
  return (
    <section className={classes.About}>
      <div className="container">
        <div className={classes.AboutWrapper}>
          <h2 className={classes.SectionHeading}>
            Inside Look: Understanding <span className={classes.PrimaryColor}>Jobs Search Detective</span>
          </h2>
          {/*<p className={classes.SectionDescription}>Get a glimpse into the inner workings of our project and gain a*/}
          {/*    better understanding of how it operates.</p>*/}
          <div className={classes.AboutFeaturesWrapper}>
            <AboutFeatures className={classes.AboutFeatures}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

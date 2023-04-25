import React from 'react';
import classes from "@/App.module.scss";
import Survey from "@/assets/survey/survey.png";
import Button from "@/components/Button/Button";

const SurveySection = () => {
  return (
    <section className={classes.Survey}>
      <div className="container">
        <h2 className={[classes.SectionHeading, classes.SurveyHeading].join(" ")}>Take the survey and get a <p
          className={classes.PrimaryColor}>50% Discount for the First Month!</p>
        </h2>
        <p className={[classes.SectionDescription, classes.SurveyDescription].join(" ")}>Complete our survey and enjoy
          a generous discount on our services
          for the first month of use</p>
        <div className={classes.SurveyCard}>
          <img src={Survey} alt="survey"/>
          <Button className={classes.SurveyDiscountBtn} theme={"dark"}>Get discount!</Button>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;

import React from 'react';
import classes from "@/App.module.scss";
import Accordion from "@/components/Accordion/Accordion";

const FaqSection = () => {
  return (
    <section className={classes.Faq} id="faq">
      <div className="container">
        <h2 className={classes.SectionHeading}>
          Frequently asked questions
        </h2>
        <div className={classes.FaqDescriptionWrapper}>
          {/*<p className={[classes.SectionDescription, classes.FaqDescription].join(" ")}>See what our clients have to*/}
          {/*  say*/}
          {/*  about their experience working with us and why they recommend our services</p>*/}
        </div>
        <div className={classes.FaqListsWrapper}>
          <ul className={classes.FaqList}>
            <li className={classes.FaqItem}>
              <Accordion title={"What is Coin?"}>
                <p>The coin is an internal currency used to pay for your subscription plans and additional features.
                  You can acquire coins in your account.</p>
              </Accordion>
            </li>
            <li className={classes.FaqItem}>
              <Accordion title={"What is Filter?"}>
                <p>Filter - a system of presets you can tune. JSD use these filters to search for relevant jobs,
                  analyze them and find relevancy.</p>
              </Accordion>
            </li>
            <li className={classes.FaqItem}>
              <Accordion title={"How does the job search process work?"}>
                <div>
                  <p>JSD uses 4 step approach</p>
                  <br/>
                  <p>1 Step - concentrate on tuning the filter system, and choosing an analysis approach</p><br/>
                  <p>2 Step - a search performed by JSD 24/7 based on your filter preferences.</p><br/>
                  <p>3 Step - an analysis of gathered jobs where JSD considers how big of a priority every job is</p><br/>
                  <p>4 Step - Notification of the user</p>
                </div>
              </Accordion>
            </li>
            <li className={classes.FaqItem}>
              <Accordion title={"What's the cost of your service?"}>
                <p>Freelance Platform Jobs Search Detective is a job search service that specializes in helping
                  individuals find work on freelance platforms. Our team of experts has extensive experience in the
                  gig
                  economy and can provide valuable insights and guidance to job seekers.</p>
              </Accordion>
            </li>
            <li className={classes.FaqItem}>
              <Accordion
                title={"How long does it take to find a job through Freelance Platform Jobs Search Detective?"}>
                <p>Freelance Platform Jobs Search Detective is a job search service that specializes in helping
                  individuals find work on freelance platforms. Our team of experts has extensive experience in the
                  gig
                  economy and can provide valuable insights and guidance to job seekers.</p>
              </Accordion>
            </li>
            <li className={classes.FaqItem}>
              <Accordion title={"What types of freelance platform jobs do you specialize in?"}>
                <p>Freelance Platform Jobs Search Detective is a job search service that specializes in helping
                  individuals find work on freelance platforms. Our team of experts has extensive experience in the
                  gig
                  economy and can provide valuable insights and guidance to job seekers.</p>
              </Accordion>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

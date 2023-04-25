import React from 'react';
import classes from "@/App.module.scss";
import Laptop from "@/assets/features/laptop.png";
import HandleWithCare from "@/assets/features/handleWithCare.png";
import Website from "@/assets/features/website.png";
import TestPassed from "@/assets/features/testPassed.png";

const FeaturesSection = () => {
  return (
    <section className={classes.Features}>
      <div className="container">
        <h2 className={classes.SectionHeading}>Why Job Search Detective is <br/> an <span
          className={classes.PrimaryColor}>optimal solution </span>for Upwork?
        </h2>
        {/*<p className={[classes.SectionDescription, classes.FeaturesHeading].join(" ")}>Discover what makes us stand*/}
        {/*    out from the rest and why we are the perfect fit for your needs</p>*/}
        <ul className={classes.FeaturesList}>
          <li className={classes.FeaturesItem}>
            <img src={Laptop} alt="laptop"/>
            <h3>Speed of <br/>response</h3>
            <p>Positioning yourself ahead of your competition is critical, especially for job types with relatively
              small average check per project
              Job Search Detective was developed with this aspect in mind
              JSD will provide you with mobile notification about the desired job ASAP.
            </p>
          </li>
          <li className={classes.FeaturesItem}>
            <img src={HandleWithCare} alt="handle with care"/>
            <h3>Advanced <br/>Job Analytics</h3>
            <p>JSD Analysis system gives a totally agile approach tuning what job you looking for, significantly
              reducing the time you need to assess the opportunity. Helping not only find the right jobs but minimize
              receiving undesirable ones (Spam, Scam, Paid reviews clients, etc.)</p>
          </li>
          <li className={classes.FeaturesItem}>
            <img src={Website} alt="website"/>
            <h3>Productivity <br/> Boost</h3>
            <p>Become able to do more
              Our research shows a majority of freelancers spend 50 - 90% of their working week hours looking for jobs
              manually. A colossal amount of time saved using JSD gives you the ability to concentrate on executing
              more projects, studying, or whatever your desire</p>
          </li>
          <li className={classes.FeaturesItem}>
            <img src={TestPassed} alt="test passed"/>
            <h3>Agile <br/>price-to-feature system</h3>
            <p>You buy JSD monthly or quarterly, subscription-based using tokens.
              Depending on your need you can increase and decrease the number of filters, tuning your abilities and
              payment as you like</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;

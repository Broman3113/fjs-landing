import React from 'react';
import classes from "@/App.module.scss";
import Button from "@/components/Button/Button";

const HeroSection = () => {
  return (
    <section className={classes.Hero}>
      <div className="container">
        <div className={classes.HeroWrapper}>
          <h1 className={classes.HeroHeader}><span className={classes.PrimaryColor}>Enhance</span> your Upwork
            experience</h1>
          <p className={classes.HeroDescription}>Automate your job search/analysis</p>
          <div className={classes.HeroBtns}>
            <Button theme="dark" className={classes.HeroBtn}>Trial plan</Button>
            <Button theme="dark" className={classes.HeroBtn}>watch video tutorial</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

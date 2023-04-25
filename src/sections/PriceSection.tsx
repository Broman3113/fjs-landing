import React from 'react';
import classes from "@/App.module.scss";
import Switch from "@/components/Switch/Switch";
import Button from "@/components/Button/Button";

const cardsData = [
  {
    title: "Personal",
    priceMonthly: "$14",
    priceQuarterly: "$48",
    duration: "per user, per month",
    advantages: [
      "5 Social Profiles",
      "5 Scheduled Posts Per Profile",
      "400+ Templates",
      "Calendar View",
      "24/7 Support"
    ]
  },
  {
    title: "Startup",
    priceMonthly: "$29",
    priceQuarterly: "$99",
    duration: "per user, per month",
    advantages: [
      "10 Social Profiles",
      "25 Scheduled Posts Per Profile",
      "400+ Templates",
      "Calendar View",
      "24/7 Support"
    ]
  },
  {
    title: "Business",
    priceMonthly: "$139",
    priceQuarterly: "$499",
    duration: "per user, per month",
    advantages: [
      "100 Social Profiles",
      "100 Scheduled Posts Per Profile",
      "400+ Templates",
      "Calendar View",
      "24/7 Support"
    ]
  },
]

const PriceSection = () => {
  const [paymentPeriod, setPaymentPeriod] = React.useState<"monthly" | "quarterly">("monthly")
  const onChecked = (e: any) => {
    if (e.target.checked) {
      setPaymentPeriod("quarterly")
    } else {
      setPaymentPeriod("monthly")
    }
  }
  return (
    <section className={classes.Price} id="pricing">
      <div className="container">
        <h2 className={classes.SectionHeading}>
          <span className={classes.PrimaryColor}>Pricing Options</span><br/>
          to suit your requirements
        </h2>
        <p className={[classes.SectionDescription, classes.PriceDescription].join(" ")}>
          {/*Discover what makes us stand out from the rest and why we are the perfect fit for your needs*/}
        </p>
        <div className={classes.SubscriptionSwitcher}>
          <span className={classes.SwitchText}>Monthly </span>
          <Switch onChecked={onChecked}/>
          <span className={classes.SwitchText}>Quarterly</span>
        </div>
        <ul className={classes.SubscriptionsList}>
          {cardsData.map((card, index) => <li key={index}>
            <div className={classes.SubscriptionCard}>
              <h3 className={classes.SubscriptionTitle}>{card.title}</h3>
              <p className={classes.SubscriptionPrice}>{
                paymentPeriod === "monthly" ? card.priceMonthly : card.priceQuarterly
              }</p>
              <p className={classes.SubscriptionDuration}>{card.duration}</p>
              <Button theme="dark" className={classes.SubscriptionStart}>Start My 15-day Trial</Button>
              <hr className={classes.SubscriptionCardSeparator}/>
              <ul className={classes.SubscriptionAdvantagesList}>
                {card.advantages.map((advantage, index) => <li key={index} className={classes.SubscriptionAdvantage}>{advantage}</li>)}
              </ul>
            </div>
          </li>)}
          {/*<li>*/}
          {/*  <div className={[classes.SubscriptionCard].join(" ")}>*/}
          {/*    <h3 className={classes.SubscriptionTitle}>Startup</h3>*/}
          {/*    <p className={classes.SubscriptionPrice}>$29</p>*/}
          {/*    <p className={classes.SubscriptionDuration}>per user, per month</p>*/}
          {/*    <Button theme="dark" className={classes.SubscriptionStart}>Start My 15-day Trial</Button>*/}
          {/*    <hr className={classes.SubscriptionCardSeparator}/>*/}
          {/*    <ul className={classes.SubscriptionAdvantagesList}>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>10 Social Profiles</li>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>25 Scheduled Posts Per Profile</li>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>400+ Templates</li>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>Calendar View</li>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>24/7 VIP Support</li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <div className={classes.SubscriptionCard}>*/}
          {/*    <h3 className={classes.SubscriptionTitle}>Business</h3>*/}
          {/*    <p className={classes.SubscriptionPrice}>$139</p>*/}
          {/*    <p className={classes.SubscriptionDuration}>per user, per month</p>*/}
          {/*    <Button theme="dark" className={classes.SubscriptionStart}>Start My 15-day*/}
          {/*      Trial</Button>*/}
          {/*    <hr className={classes.SubscriptionCardSeparator}/>*/}
          {/*    <ul className={classes.SubscriptionAdvantagesList}>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>100 Social Profiles</li>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>100 Scheduled Posts Per Profile</li>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>400+ Templates</li>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>Calendar View</li>*/}
          {/*      <li className={classes.SubscriptionAdvantage}>24/7 VIP Support</li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</li>*/}
        </ul>
      </div>
    </section>
  );
};

export default PriceSection;

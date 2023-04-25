import React from 'react';
import classes from './Footer.module.scss';

import {ReactComponent as JobDetective} from '@/assets/JobDetective.svg';

import {ReactComponent as Facebook} from '@/assets/social/facebook.svg';
import {ReactComponent as Youtube} from '@/assets/social/youtube.svg';
import {ReactComponent as Instagram} from '@/assets/social/instagram.svg';
import {ReactComponent as LinkedIn} from '@/assets/social/linkedIn.svg';

import {ReactComponent as UkraineLogo} from "@/assets/ukraineLogo.svg";
import Button from "@/components/Button/Button";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <div className={classes.UpperFooter}>
          <ul className={classes.LinksList}>
            <li><a href="#"><JobDetective className={classes.Logo}/></a></li>
            <li><a href="#">About</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#termsOfUse">Terms of Use</a></li>
            <li><a href="#footer">Contacts</a></li>
          </ul>
          <div className={classes.Contacts}>
            <ul className={classes.SocialLinksList}>
              <li><a href="#"><Facebook className={classes.SocialIcon}/></a></li>
              <li><a href="#"><Youtube className={classes.SocialIcon}/></a></li>
              <li><a href="#"><Instagram className={classes.SocialIcon}/></a></li>
              <li><a href="#"><LinkedIn className={classes.SocialIcon}/></a></li>
            </ul>
            <ul className={classes.Address}>
              <li><a href="mailto:support@jobs.search.detective.com">support@jobs.search.detective.com</a></li>
              <li><a href="tel:+380984003921">+ 380 98 400 39 21</a></li>
            </ul>
          </div>
        </div>
        <div className={classes.UkraineSupportSection}>
          <UkraineLogo width={157}/>
          <p>Support the Ukrainian Armed Forces during the Russian invasion</p>
          <Button theme={"light"}>Donate now!</Button>
        </div>
        <div className={classes.LowerFooter}>
          <p>© Jobs Search Detective, 2023 <span className={classes.Offset}>All rights Reserved</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

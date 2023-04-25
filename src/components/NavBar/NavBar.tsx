import React from 'react';
import {ReactComponent as JobDetective} from '@/assets/JobDetective.svg';
import {ReactComponent as LanguageIcon} from './assets/languageIcon.svg';
import {ReactComponent as ArrowIcon} from './assets/arrowIcon.svg';
import {ReactComponent as BurgerMenuIcon} from './assets/burger-menu.svg';
import {ReactComponent as CloseIcon} from './assets/close-icon.svg';
import classes from './NavBar.module.scss';
import Button from "@/components/Button/Button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const onToggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  }
  return (
    <>
      <nav className={classes.NavBar}>
        <div className="container">
          <div className={classes.NavBarInner}>
            <div className={classes.LogoWrapper}>
              <a href="#">
                <JobDetective className={classes.Logo}/>
              </a>
            </div>
            <div className={classes.NavLinksWrapper}>
              <ul className={classes.NavLinksList}>
                <li><a href="#">About</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#termsOfUse">Terms of Use</a></li>
                <li><a href="#footer">Contacts</a></li>
              </ul>
            </div>
            <div className={classes.ControlsWrapper}>
              <div className={classes.LanguageSelection}>
                <button className={classes.LanguageSelectionBtn}>
                  <LanguageIcon/>
                  <ArrowIcon/>
                </button>
              </div>
              <div>
                <Button theme="light">Start free trial</Button>
              </div>
            </div>
          </div>
          <div className={classes.NavBarInnerMobile}>
            <div className={classes.LogoWrapper}>
              <a href="#">
                <JobDetective className={classes.Logo}/>
              </a>
            </div>
            <button className={classes.BurgerMenuBtn} onClick={onToggleMenu}>
              {isMenuOpen ?
                <CloseIcon className={classes.CloseIcon}/> :
                <BurgerMenuIcon className={classes.BurgerMenuIcon}/>
              }
            </button>
          </div>
          <div className={
            [
              classes.MobileMenu,
              isMenuOpen ? classes.Open : '',
            ].join(" ")
          }>
              <ul className={classes.MobileNavLinksList}>
                <li><a href="#" onClick={onToggleMenu}>About</a></li>
                <li><a href="#pricing" onClick={onToggleMenu}>Pricing</a></li>
                <li><a href="#faq" onClick={onToggleMenu}>FAQ</a></li>
                <li><a href="#reviews" onClick={onToggleMenu}>Reviews</a></li>
                <li><a href="#termsOfUse" onClick={onToggleMenu}>Terms of Use</a></li>
                <li><a href="#footer" onClick={onToggleMenu}>Contacts</a></li>
              </ul>
          </div>
        </div>
      </nav>

      <div style={{height: '73px'}}></div>
    </>
  );
};

export default NavBar;

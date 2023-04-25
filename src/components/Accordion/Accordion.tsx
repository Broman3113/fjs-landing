import React from 'react';
import classes from './Accordion.module.scss';
interface AccordionProps {
  children: React.ReactNode;
  title: string;
}
const Accordion = ({children, title}: AccordionProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = () => {
    setIsOpen(isOpen => !isOpen);
  }
  return (
    <div className={[classes.Accordion, isOpen ? classes.Open : ""].join(" ")}>
      <div className={classes.AccordionHeader}>
        <button className={classes.AccordionHeaderButton} onClick={onToggle}>
          <p className={classes.Title}>{title}</p>
          <span className={classes.AccordionHeaderButtonIndicator}></span>
        </button>
      </div>
      <div className={[
        classes.Content,
        isOpen ? classes.ContentOpen : ""
      ].join(" ")}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;

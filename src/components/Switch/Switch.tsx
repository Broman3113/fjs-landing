import React from 'react';
import classes from './Switch.module.scss'

interface SwitchProps {
  onChecked?: (e: any) => void;
}
const Switch = ({onChecked}: SwitchProps) => {

  return (
    <label className={classes.Switch}>
      <input type="checkbox"
              onChange={onChecked}
      />
        <span className={[classes.Slider, classes.Round].join(" ")}></span>
    </label>
  );
};

export default Switch;

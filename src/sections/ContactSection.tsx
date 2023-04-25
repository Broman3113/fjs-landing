import React from 'react';
import classes from "@/App.module.scss";
import Box from "@mui/material/Box";
import Button from "@/components/Button/Button";
import {styled, TextField} from "@mui/material";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#323232',
  },

  '& .MuiInputBase-input': {
    backgroundColor: 'white',
    borderRadius: '4px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#323232',
      borderWidth: '2px'
    },
    '&:hover fieldset': {
      borderColor: '#323232',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#323232',
    },
  },
});

const ContactSection = () => {
  return (
    <section className={classes.Contact}>
      <div className="container">
        <div className={classes.ContactWrapper}>
          <div className={classes.ContactForm}>
            <h2 className={classes.SectionHeading}>
              Let us help you: <br/> <span className={classes.PrimaryColor}>Contact us Now</span>
            </h2>
            <p className={[classes.SectionDescription, classes.ContactDescription].join(" ")}>Reach out to our team
              for expert assistance and let us guide you towards the solutions you need</p>
            <Box component="form" noValidate>
              <CssTextField
                fullWidth
                label="Full name"
                sx={{mb: '20px'}}
              />
              <CssTextField
                fullWidth
                label="Email"
                sx={{mb: '27px'}}
              />
              <Button theme="dark" className={classes.SubmitContactForm}>Contact us</Button>
            </Box>
          </div>
          <div className={classes.AppPreview}>
            {/*<img src={Img3} alt="app preview"/>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

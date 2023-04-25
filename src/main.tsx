import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createTheme, ThemeProvider} from "@mui/material";
import NavBar from "@/components/NavBar/NavBar";
import HeroSection from "@/sections/HeroSection";
import DemoSection from "@/sections/DemoSection";
import AboutSection from "@/sections/AboutSection";
import FeaturesSection from "@/sections/FeaturesSection";
import PriceSection from "@/sections/PriceSection";
import SurveySection from "@/sections/SurveySection";
import FaqSection from "@/sections/FaqSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer/Footer";
import CssBaseline from "@mui/material/CssBaseline";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    text: {
      primary: '#212121',
    },
    secondary: {
      main: '#f50057',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 14,
  },
})



// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// if (root) {
//   root.render(
//     <ThemeProvider theme={theme}>
//       <App/>
//     </ThemeProvider>
//   )
// }

const cssBaseline = document.getElementById('css-baseline') as HTMLElement;
if (cssBaseline) {
  ReactDOM.createRoot(cssBaseline).render(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    </ThemeProvider>
  )
}

const header = document.getElementById('header-nav') as HTMLElement;
if (header) {
  ReactDOM.createRoot(header).render(
    <ThemeProvider theme={theme}>
        <NavBar/>
    </ThemeProvider>
  )
}

const sectionHero = document.getElementById('section-hero') as HTMLElement;
if (sectionHero) {
  ReactDOM.createRoot(sectionHero).render(
    <ThemeProvider theme={theme}>
      <HeroSection/>
    </ThemeProvider>
  )
}

const sectionDemo = document.getElementById('section-demo') as HTMLElement
if (sectionDemo) {
  ReactDOM.createRoot(sectionDemo).render(
    <ThemeProvider theme={theme}>
      <DemoSection/>
    </ThemeProvider>
  )
}

const sectionAbout = document.getElementById('section-about') as HTMLElement;
if (sectionAbout) {
  ReactDOM.createRoot(sectionAbout).render(
    <ThemeProvider theme={theme}>
      <AboutSection/>
    </ThemeProvider>
  )
}

const sectionFeatures = document.getElementById('section-features') as HTMLElement;
if (sectionFeatures) {
  ReactDOM.createRoot(sectionFeatures).render(
    <ThemeProvider theme={theme}>
      <FeaturesSection/>
    </ThemeProvider>
  )
}

const sectionPrice = document.getElementById('section-price') as HTMLElement;
if (sectionPrice) {
  ReactDOM.createRoot(sectionPrice).render(
    <ThemeProvider theme={theme}>
      <PriceSection/>
    </ThemeProvider>
  )
}

const sectionSurvey = document.getElementById('section-survey') as HTMLElement;
if (sectionSurvey) {
  ReactDOM.createRoot(sectionSurvey).render(
    <ThemeProvider theme={theme}>
      <SurveySection/>
    </ThemeProvider>
  )
}

const sectionFaq = document.getElementById('section-faq') as HTMLElement;
if (sectionFaq) {
  ReactDOM.createRoot(sectionFaq).render(
    <ThemeProvider theme={theme}>
      <FaqSection/>
    </ThemeProvider>
  )
}

const sectionContact = document.getElementById('section-contact') as HTMLElement;
if (sectionContact) {
  ReactDOM.createRoot(sectionContact).render(
    <ThemeProvider theme={theme}>
      <ContactSection/>
    </ThemeProvider>
  )
}

const footer = document.getElementById('footer') as HTMLElement;
if (footer) {
  ReactDOM.createRoot(footer).render(
    <ThemeProvider theme={theme}>
      <Footer/>
    </ThemeProvider>
  )
}

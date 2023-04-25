import {styled, TextField} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import classes from './App.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';


import AboutFeatures from "@/components/Home/AboutFeatures/AboutFeatures";
import Button from "@/components/Button/Button";
import Switch from "@/components/Switch/Switch";

import Img1 from './assets/image14.jpg';
import Img2 from './assets/image12.jpg';
import Img3 from './assets/image13.png';
import Img4 from './assets/image9.jpg';
import Img5 from './assets/image15.jpg';

import Laptop from './assets/features/laptop.png';
import HandleWithCare from './assets/features/handleWithCare.png';
import Website from './assets/features/website.png';
import TestPassed from './assets/features/testPassed.png';

import Survey from './assets/survey/survey.png';
import Accordion from "@/components/Accordion/Accordion";
import Box from "@mui/material/Box";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/sections/HeroSection";



function App() {
  return (
    <div className="App">
      <CssBaseline/>
    </div>
  )
}

export default App

import React, {useState} from 'react';
import classes from './AboutFeatures.module.scss';
import Button from "@/components/Button/Button";
import {ReactComponent as ArrowLeftIcon} from "@/assets/about/arrowLeftIcon.svg";
import {ReactComponent as ArrowRightIcon} from "@/assets/about/arrowRightIcon.svg";

interface AboutFeaturesProps {
  className?: string;
}
const AboutFeatures = ({className}: AboutFeaturesProps) => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const onNextFeature = () => {
    if (currentFeature < featuresList.length - 1) {
      setCurrentFeature(currentFeature + 1);
    } else {
      setCurrentFeature(0);
    }
  }

  const onPrevFeature = () => {
    if (currentFeature > 0) {
      setCurrentFeature(currentFeature - 1);
    } else {
      setCurrentFeature(featuresList.length - 1);
    }
  }

  const featuresList = [
    {
      title: "Personalized Job Recommendations",
      description: "JSD analysis process provides smart job recommendations based on preferences. This feature saves freelancers time and effort by showing them job opportunities that are most relevant to every filter preset."
    },
    {
      title: "Enhanced job search filters",
      description: "Filters allow freelancers to configure search results by specifying the type of job they are looking for, the location of the job, and the skills required for the job. This feature helps JSD find jobs that are most relevant to analyze them."
    },
    {
      title: "Job Search Alerts",
      description: "JSD alerts allow freelancers to receive notifications when new jobs that are analyzed by Job Search Detective to be the best match are posted on Upwork. This feature ensures you quickly react to job opportunities."
    }
  ]

  return (
    <div className={[classes.AboutFeatures, className].join(" ")}>
      <h3>{featuresList[currentFeature].title}</h3>
      <p>{featuresList[currentFeature].description}</p>
      <div className={classes.ButtonsGroup}>
        <Button theme={"dark"} onClick={onPrevFeature}>
          <ArrowLeftIcon/>
          prev
        </Button>
        <Button theme={"dark"} onClick={onNextFeature}>
          next
          <ArrowRightIcon/>
        </Button>
      </div>
    </div>
  );
};

export default AboutFeatures;

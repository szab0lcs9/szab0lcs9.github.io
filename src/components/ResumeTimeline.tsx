import React from "react";
import { TimelineSection } from "./TimelineSection";
import { workExperience } from "../resume/WorkExperience";
import { education } from "../resume/Education";


const ResumeTimeline = () => {
  return (
    <div className="space-y-24">
      <TimelineSection title="Work Experience" items={workExperience} isWork />
      <TimelineSection title="Education" items={education} />
    </div>
  );
};


export default ResumeTimeline;

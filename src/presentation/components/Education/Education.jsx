import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div className="education">
      {educationData.map((edu, index) => (
        <div className="education-card" key={index}>
          <h4>{edu.degree}</h4>
          <p className="institution">{edu.institution}</p>
          <div className="edu-meta">
            <span>{edu.year}</span>
            <span>{edu.result}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const educationData = [
  {
    degree: "BSS",
    institution: "Jagannath University",
    year: "2018",
    result: "CGPA: 3.25 / 4.00",
  },
  {
    degree: "MSS",
    institution: "Jagannath University",
    year: "2016",
    result: "CGPA: 3.25 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Board of Intermediate & Secondary Education",
    year: "2011",
    result: "GPA: 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Board of Secondary Education",
    year: "2009",
    result: "GPA: 5.00 / 5.00",
  },
];

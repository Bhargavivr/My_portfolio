import React from "react";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-heading">Education</h2>

      <div className="education-card">
        <div className="education-item">
          <p className="edu-degree">
            <strong>Bachelor of Engineering</strong> — Artificial Intelligence &
            Data Science
          </p>
          <p className="edu-detail">REVA University (2022 – 2026)</p>
        </div>

        <div className="education-item">
          <p className="edu-degree">
            <strong>High School</strong> — Class 10th & 12th
          </p>
          <p className="edu-detail"> SVP Public School (2019 – 2021)</p>
        </div>
      </div>
    </section>
  );
};

export default Education;

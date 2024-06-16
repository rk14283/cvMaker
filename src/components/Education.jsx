import React from "react";
import { useState } from "react";

function Education({
  schoolStateFn,
  majorStateFn,
  degreeTitleStateFn,
  studyStartDateStateFn,
  studyEndDateStateFn,
  submitSetter,
}) {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [degreeTitle, setDegreeTitle] = useState("");
  const [studyStartDate, setStudyStartDate] = useState("");
  const [studyEndDate, setStudyEndDate] = useState("");
  const [isOngoing, setIsOngoing] = useState(false);

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleMajorChange = (e) => {
    setMajor(e.target.value);
  };
  const handleDegreeTitleChange = (e) => {
    setDegreeTitle(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStudyStartDate(e.target.value);
  };
  const handleEndDateChange = (e) => {
    setStudyEndDate(e.target.value);
  };
  const handleOngoingChange = (event) => {
    setIsOngoing(event.target.checked);
    if (event.target.checked) {
      setStudyEndDate("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    schoolStateFn(school);
    majorStateFn(major);
    degreeTitleStateFn(degreeTitle);
    studyStartDateStateFn(studyStartDate);
    if (isOngoing) {
      studyEndDateStateFn("Ongoing");
    } else {
      studyEndDateStateFn(studyEndDate);
    }

    submitSetter();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <legend>Education</legend>
        <label>School Name:</label>
        <input
          key="school"
          type="text"
          value={school}
          required
          onChange={handleSchoolChange}
        />
        <label>Major</label>
        <input
          key="major"
          type="text"
          value={major}
          required
          onChange={handleMajorChange}
        />

        <label>Degree Title</label>
        <select
          key="degreeTitle"
          value={degreeTitle}
          required
          onChange={handleDegreeTitleChange}
        >
          <option value="">Select a degree</option>
          <option value="Bachelors">Bachelor's</option>
          <option value="Masters">Master's</option>
          <option value="Doctorate">Doctorate</option>
          <option value="Professional">
            Professional Degree (ex-MD., PharmD,JD.)
          </option>
        </select>

        <label>Date of study:</label>
        <label>Start Date</label>

        <input
          key="startDate"
          type="date"
          value={studyStartDate}
          required
          onChange={handleStartDateChange}
        />
        <label>End Date</label>
        <input
          type="date"
          value={studyEndDate}
          onChange={handleEndDateChange}
          disabled={isOngoing}
          required={!isOngoing}
        />
        <label>
          <input
            type="checkbox"
            checked={isOngoing}
            onChange={handleOngoingChange}
          />
          Ongoing
        </label>
        <div>
          <button>Submit</button>
        </div>

        <div>
          <button>Edit</button>
        </div>
      </form>
    </>
  );
}

export default Education;

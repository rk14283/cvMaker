import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import GeneralInfo from "./GeneralInfo";
import "../styles/App.css";
import Education from "./Education";

function App() {
  const [fullname, setFullName] = useState("FullName");
  const [email, setEmail] = useState("Email");
  const [phone, setPhone] = useState("Phone");
  const [address, setAddress] = useState("Address");
  const [school, setSchool] = useState("School Name");
  const [major, setMajor] = useState("Major");
  const [degreeTitle, setDegreeTitle] = useState("");
  const [studyStartDate, setStudyStartDate] = useState("");
  const [studyEndDate, setStudyEndDate] = useState("");
  const [isOngoing, setIsOngoing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEducation, setSubmittedEducation] = useState(false);

  //General Information
  const setFullNameChange = (value) => {
    setFullName(value);
  };

  const setEmailChange = (value) => {
    setEmail(value);
  };
  const setPhoneChange = (value) => {
    setPhone(value);
  };
  const setAddressChange = (value) => {
    setAddress(value);
  };

  const submitSetter = () => {
    setSubmitted(true);
  };
  //Education

  const setSchoolChange = (value) => {
    setSchool(value);
  };

  const setMajorChange = (value) => {
    setMajor(value);
  };
  const setDegreeTitleChange = (value) => {
    setDegreeTitle(value);
  };
  const setStudyStartDateChange = (value) => {
    setStudyStartDate(value);
  };
  const setStudyEndDateChange = (value) => {
    setStudyEndDate(value);
  };
  const setIsOngoingChange = (value) => {
    setIsOngoing(value);
  };
  const submitEducationSetter = () => {
    setSubmittedEducation(true);
  };
  return (
    <div className="container">
      <div className="main-content">
        <GeneralInfo
          fullNameStateFn={setFullNameChange}
          emailStateFn={setEmailChange}
          phoneStateFn={setPhoneChange}
          addressStateFn={setAddressChange}
          submitSetter={submitSetter}
        />
      </div>
      <div className="info-section">
        {submitted ? <p>Form Submitted!</p> : null}
        <p>Full Name: {fullname}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </div>
      <Education
        schoolStateFn={setSchoolChange}
        majorStateFn={setMajorChange}
        degreeTitleStateFn={setDegreeTitleChange}
        studyStartDateStateFn={setStudyStartDateChange}
        studyEndDateStateFn={setStudyEndDateChange}
        isOngoingStateFn={setIsOngoingChange}
        submitSetter={submitEducationSetter}
      />

      <div>
        {submittedEducation ? <p>Education Information Submitted!</p> : null}
        <p>School Name: {school}</p>
        <p>Major: {major}</p>
        <p>Degree Title: {degreeTitle}</p>
        <p>Study Start Date: {studyStartDate}</p>
        <p>Study End Date: {isOngoing ? "Ongoing" : studyEndDate}</p>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import GeneralInfo from "./GeneralInfo";
import "../styles/App.css";
function App() {
  const [fullname, setFullName] = useState("FullName");
  const [email, setEmail] = useState("Email");
  const [phone, setPhone] = useState("Phone");
  const [address, setAddress] = useState("Address");
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

  // contact

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
    // Update state to indicate form submission
    setSubmitted(true);
  };
  return (
    <>
      <GeneralInfo
        fullNameStateFn={setFullNameChange}
        emailStateFn={setEmailChange}
        phoneStateFn={setPhoneChange}
        addressStateFn={setAddressChange}
        submitSetter={submitSetter}
      />
      {/* Render the information as it is typed */}
      <div>
        {submitted ? <p>Form Submitted!</p> : null}
        <p>Full Name: {fullname}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { useState } from "react";

import "/src/styles/GeneralInfo.css"; // Import the CSS file

function GeneralInfo({
  fullNameStateFn,
  emailStateFn,
  phoneStateFn,
  addressStateFn,
  submitSetter,
}) {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fullNameStateFn(fullname);
    emailStateFn(email);
    phoneStateFn(phone);
    addressStateFn(address);
    submitSetter();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <legend>Contact Info</legend>
        <>
          <label>Full Name</label>
          <input
            key="fullName"
            type="text"
            value={fullname}
            required
            onChange={handleFullNameChange}
          />

          <label>Email</label>
          <input
            key="email"
            type="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
          <label>Phone Number</label>
          <input
            key="phone"
            type="phone"
            value={phone}
            required
            onChange={handlePhoneChange}
          />
          <label>Address</label>
          <input
            key="address"
            type="address"
            value={address}
            required
            onChange={handleAddressChange}
          />
          <div>
            <button>Submit</button>
          </div>
        </>
        <div>
          <button>Edit</button>
        </div>
      </form>
      <hr />
    </>
  );
}

export default GeneralInfo;

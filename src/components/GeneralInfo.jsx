import React from "react";

function GeneralInfo({ fullNameStatefn }) {
  return (
    <>
      <label htmlFor="fullName">Full Name</label>
      <input type="text" id="fullName" name="fullName" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" />

      <hr />
    </>
  );
}

export default GeneralInfo;

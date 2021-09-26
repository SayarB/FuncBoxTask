import { getDefaultMiddleware } from "@reduxjs/toolkit";
import React, { useState } from "react";
import InputField from "./InputField";
function ShippingInput({ getData }) {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [apartment, setApartment] = useState("");
  const [pnum, setPNum] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pkid, setPKid] = useState("");
  const [phone, setPhone] = useState("");

  const sendData = () => {
    var data = {
      firstname: fname,
      lastname: lname,
      apartment: apartment,
      phonenum1: pnum,
      street: street,
      city: city,
      state: state,
      postalkid: pkid,
      phonenum2: phone,
    };
    getData(data);
  };
  return (
    <div>
      <h1>Shipping Address</h1>
      <p style={{ color: "#FF5254", margin: "20px 0px" }}>Saved Address</p>
      <p>
        Sherlock Holmes <br /> 211B, <br /> Baker Street, London,
        <br /> United Kingdom <br /> 929290304
      </p>
      <br />
      <div style={{ display: "flex" }}>
        <InputField
          value={fname}
          label="First Name"
          onChange={(e) => {
            setFName(e.target.value);
          }}
        />
        <InputField
          value={lname}
          label="Last Name"
          onChange={(e) => {
            setLName(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <InputField
          value={apartment}
          label="Apartment/House number"
          onChange={(e) => {
            setApartment(e.target.value);
          }}
        />
        <InputField
          value={pnum}
          label="Phone Number"
          onChange={(e) => {
            setPNum(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <InputField
          value={street}
          label="Street/Locality"
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <InputField
          value={city}
          label="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <InputField
          value={state}
          label="State"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <InputField
          value={pkid}
          label="Postal Kids"
          onChange={(e) => {
            setPKid(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <InputField
          value={phone}
          label="Phone Number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default ShippingInput;

import React from "react";

function InputField({ label, value, onChange }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginRight: "20px",
        marginBottom: "20px",
      }}
    >
      <p style={{ fontSize: "15px" }}>{label}</p>
      <input
        type="text"
        style={{ width: "100%" }}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

export default InputField;

import React from "react";

export default function StudentForm() {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="name">Name : </label>
        <input id="name" />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="nic">NIC : </label>
        <input id="nic" />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="email">Email : </label>
        <input id="email" />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="phone">Phone : </label>
        <input id="phone" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

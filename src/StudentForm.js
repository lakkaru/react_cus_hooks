import React, {useState} from "react";

export default function StudentForm() {

    const [name, setName]=useState();
    const [nic, setNIC]=useState();
    const [email, setEmail]=useState();
    const [phone, setPhone]=useState();

    const handleChanges=()=>{
        console.log(name);
        console.log(nic);
        console.log(email);
        console.log(phone);
        
    }

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="name">Name : </label>
        <input id="name" onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="nic">NIC : </label>
        <input id="nic" onChange={(e)=>setNIC(e.target.value)}/>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="email">Email : </label>
        <input id="email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="phone">Phone : </label>
        <input id="phone" onChange={(e)=>setPhone(e.target.value)}/>
      </div>
      <div>
        <button onClick={handleChanges}>Submit</button>
      </div>
    </div>
  );
}

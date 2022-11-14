import React, { useState } from "react";
import InputDisplay from "./component/inputDisplay";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name:name, email:email,phone: phone,id:Date.now()};
    if (name && email && phone) {
      setList((ls) => [...ls, data]);
      setEmail("");
      setName("");
      setPhone("");
    }
  };
  return (
    <div>
      <h1>Contact form</h1>
      <form onClick={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Phone
          </label>
          <input
            type="text"
            class="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <InputDisplay list={list} setList={setList} />
    </div>
  );
}

export default App;

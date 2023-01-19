import React from "react";
import { useState } from "react";
import "./LoginDetails.css";

const LoginDetails = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    location: "",
  });
  const [newRecord, setNewRecord] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const latestUser = { ...user, id: new Date().getTime().toString() };
    setNewRecord([...newRecord, latestUser]);
    setUser({ username: "", email: "", phone: "", password: "", location: "" });
  };

  return (
    <div className="form__box">
      {/*Logo */}
      <div className="logo__div">
        <img
          src="https://www.punekarnews.in/wp-content/uploads/2020/03/swiggy.jpg"
          alt="logo"
        />
      </div>

      {/*Form */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          required
          value={user.username}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          required
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter PhoneNumber"
          required
          pattern="[0-9]{10}"
          value={user.phone}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          pattern=".+@gmail.com"
          required
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter Location"
          required
          value={user.location}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register New User</button>
      </form>
      {/* Show Data */}
      {newRecord.map((currElem) => {
        return (
          <div className="show__data">
            <p>
              <b>Username :</b> <br /> {currElem.username}
            </p>
            <p>
              <b>Password :</b>
              <br /> {currElem.password}
            </p>
            <p>
              {" "}
              <b>Email :</b> <br /> {currElem.email}
            </p>
            <p>
              <b>Location :</b>
              <br /> {currElem.location}
            </p>
            <p>
              {" "}
              <b>Phone Number :</b>
              <br /> {currElem.phone}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default LoginDetails;

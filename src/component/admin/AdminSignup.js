import { useState } from "react";

import axios from "axios";

import './AdminSignup.css';

const AdminSignup = () => {


  const [input, setInput] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (input.password.length >= 5) {
      axios
        .post(
          "https://employee-management-system-backend-chi.vercel.app/admin/signup",
          input
        )
        .then((response) => setAlert(response.data));
        
    } else {
      setAlert("Password length must be 8 characters");
    }
  };
  return (
    <>
      <div>
        <h2>Admin Signup</h2>
        <form onSubmit={submitHandler}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={inputHandler}
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={inputHandler}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={inputHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={inputHandler}
          />
          <button>Admin SignUp</button>
          {alert && (
            <div className="alert-message">
              <p>{alert}</p>
              <p>
                <span
                  onClick={() => setAlert("")}
                  style={{ cursor: "pointer" }}
                >
                  &#10005;
                </span>
              </p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default AdminSignup;
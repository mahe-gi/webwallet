import { useState } from "react";
import {
  BottomWarning,
  Button,
  Heading,
  InputBox,
  SubHeading,
} from "../components/export";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username,
          password,
          firstname,
          lastname,
        }
      );
      if (response.status === 200) {
        alert("Signup successful");
        navigate("/signin");
      } else if (response.status === 201) {
        alert("Email already taken");
        navigate("/signin");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Signup" />
          <SubHeading label="enter your information to create an account" />
          <InputBox
            onchange={(e) => {
              setFirstname(e.target.value);
            }}
            label="firstName"
            placeholder="mahesh"
          />
          <InputBox
            onchange={(e) => {
              setLastname(e.target.value);
            }}
            label="lastName"
            placeholder="yadav "
          />
          <InputBox
            onchange={(e) => {
              setUsername(e.target.value);
            }}
            label="email"
            placeholder="example@gmail.com"
          />
          <InputBox
            onchange={(e) => {
              setPassword(e.target.value);
            }}
            label="password"
            placeholder="12345"
          />
          <div className=" pt-4">
            <Button onClick={handleSignup} label="Signup" />
          </div>
          <BottomWarning
            label="Already have an account "
            buttontext="signin"
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

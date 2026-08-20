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
import { Bounce, toast, ToastContainer } from "react-toastify";

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
        toast.success("Account created !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
       
      setTimeout(()=>{
        navigate("/signin");
      },1000)

      } else if (response.status === 201) {

        toast.warn('Email already taken !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setTimeout(()=>{
          navigate("/signin");
        },1000)
      }
    } catch (error) {


      toast.error('Err while signin!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    }
  };

  return (
    <div className="min-h-screen bg-slate-100/70 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-6 sm:p-8 text-center">
          <div className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">
            WebWallet
          </div>
          <Heading label="Signup" />
          <SubHeading label="Enter your information to create an account" />
          <InputBox
            onchange={(e) => {
              setFirstname(e.target.value);
            }}
            label="First Name"
            placeholder="mahesh"
          />
          <InputBox
            onchange={(e) => {
              setLastname(e.target.value);
            }}
            label="Last Name"
            placeholder="yadav"
          />
          <InputBox
            onchange={(e) => {
              setUsername(e.target.value);
            }}
            label="Email"
            placeholder="example@gmail.com"
          />
          <InputBox
            onchange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            placeholder="••••••••"
          />
          <div className="pt-3">
            <Button onClick={handleSignup} label="Sign Up" />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
            />
          </div>
          <BottomWarning
            label="Already have an account?"
            buttontext="Sign In"
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}


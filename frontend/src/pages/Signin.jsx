import { useState } from "react";
import {
  Heading,
  SubHeading,
  InputBox,
  BottomWarning,
  Button,
} from "../components/export";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    axios.post(
      "http://localhost:3000/api/v1/user/signin",
      {
        username,
        password,
      }
    ).then((res) => {
      toast.success('success !', {
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
      localStorage.setItem("token", "Bearer " + res.data.token);
      setTimeout(()=>{
        navigate("/dashboard");
      },1000)
    }).catch(() => {
      toast.error("error while login!", {
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
    })

   
   
   
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onchange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="example@gmail.com"
            label={"Email"}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            onchange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleClick} />
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
            label={"Don't have an account?"}
            buttontext={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;

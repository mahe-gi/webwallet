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
    <div className="min-h-screen bg-slate-100/70 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-6 sm:p-8 text-center">
          <div className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">
            WebWallet
          </div>
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
            placeholder="••••••••"
            label={"Password"}
            onchange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-3">
            <Button label={"Sign In"} onClick={handleClick} />
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
            buttontext={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;


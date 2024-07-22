import {
  BottomWarning,
  Button,
  Heading,
  InputBox,
  SubHeading,
} from "../components/export";

export default function Signup() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Signup" />
          <SubHeading label="enter your information to create an account" />
          <InputBox label="firstName" placeholder="mahesh" />
          <InputBox label="lastName" placeholder="yadav " />
          <InputBox label="email" placeholder="example@gmail.com" />
          <InputBox label="password" placeholder="12345" />
          <div className=" pt-4">
            <Button label="Signup" />
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

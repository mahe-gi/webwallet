import { Link } from "react-router-dom";

export default function BottomWarning({ label, buttontext, to }) {
  return (
    <div className=" py-2 text-sm flex justify-center">
      <div>{label}</div>
      <span className=" cursor-pointer underline pl-1">
        <Link to={to}>{buttontext}</Link>
      </span>
    </div>
  );
}

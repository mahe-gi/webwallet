import { Link } from "react-router-dom";

export default function BottomWarning({ label, buttontext, to }) {
  return (
    <div className="pt-3 pb-1 text-sm flex justify-center items-center gap-1 text-slate-500">
      <span>{label}</span>
      <Link
        to={to}
        className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors capitalize"
      >
        {buttontext}
      </Link>
    </div>
  );
}


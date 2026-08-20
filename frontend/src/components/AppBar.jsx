import { useNavigate } from "react-router-dom";

export default function AppBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-extrabold text-xl text-slate-900 tracking-tight">WebWallet</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 hover:bg-rose-50 border border-rose-100/60 px-3 py-1.5 rounded-lg transition-all cursor-pointer capitalize"
            onClick={handleLogout}
          >
            Logout
          </button>
          <div className="h-9 w-9 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center ring-2 ring-slate-100 shadow-xs cursor-pointer">
            <span>U</span>
          </div>
        </div>
      </div>
    </header>
  );
}


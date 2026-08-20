export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-slate-900/15 font-semibold rounded-xl text-sm px-5 py-2.5 shadow-sm hover:shadow transition-all duration-150 cursor-pointer"
    >
      {label}
    </button>
  );
}


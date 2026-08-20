export default function InputBox({ label, placeholder, onchange }) {
  return (
    <div className="text-left mb-3.5">
      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        onChange={onchange}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-slate-900/10 focus:border-slate-800 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
      />
    </div>
  );
}


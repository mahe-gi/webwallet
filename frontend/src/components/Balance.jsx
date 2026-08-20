export default function Balance({ value }) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-md border border-slate-800 mb-8 relative overflow-hidden">
      <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Your balance
          </div>
          <div className="mt-1.5 text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center">
            <span>Rs {typeof value === "number" ? value.toLocaleString() : value}</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available</span>
        </div>
      </div>
    </div>
  );
}


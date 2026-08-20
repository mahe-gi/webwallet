export default function SendMoney() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100/70 p-4">
      <div className="max-w-md w-full p-6 sm:p-8 bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl">
        <div className="text-center pb-6 border-b border-slate-100">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Send Money</h2>
        </div>
        <div className="pt-6">
          <div className="flex items-center gap-4 pb-6">
            <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-500/20 text-white font-bold text-xl uppercase">
              <span>A</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 capitalize">Friend&apos;s Name</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                htmlFor="amount"
              >
                Amount (in Rs)
              </label>
              <input
                type="number"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                id="amount"
                placeholder="Enter amount"
              />
            </div>
            <button
              type="button"
              className="w-full text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-500/20 font-semibold rounded-xl text-sm px-5 py-2.5 shadow-sm hover:shadow transition-all duration-150 cursor-pointer"
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


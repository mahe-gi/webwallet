import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

  const navigate = useNavigate();

  function handleTransfer() {
    axios
      .post(
        "http://localhost:3000/api/v1/account/transfer",
        {
          amount: amount,
          to: id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        toast.success('Transaction succesfull !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
       setTimeout(()=>{
        navigate("/dashboard");
       },1000)
      })
      .catch(() => {
        toast.error("Transaction cancelled !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(()=>{
          navigate("/dashboard");
         },1000)
      });
  }

  return (
    <div className="min-h-screen bg-slate-100/70 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-6 sm:p-8">
          <div className="text-center pb-6 border-b border-slate-100">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Send Money</h2>
          </div>
          <div className="pt-6">
            <div className="flex items-center gap-4 pb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-xl flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0 uppercase">
                <span>{name ? name[0] : "U"}</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Recipient</span>
                <h3 className="text-xl font-bold text-slate-900 capitalize">{name}</h3>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">₹</span>
                  <input
                    type="number"
                    className="w-full pl-8 pr-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white transition-all text-slate-900 font-semibold placeholder:text-slate-400"
                    id="amount"
                    placeholder="Enter amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                onClick={handleTransfer}
                type="button"
                className="w-full text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-500/20 font-semibold rounded-xl text-sm px-5 py-3 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/25 transition-all duration-150 cursor-pointer"
              >
                Initiate Transfer
              </button>
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
                theme="light"
                transition={Bounce}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;


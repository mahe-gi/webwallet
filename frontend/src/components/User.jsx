import { useEffect, useState } from "react";
import { Button } from "./export";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setfilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(async (res) => {
        const response = res.data;
        setUsers(response.user || []);
      });
  }, [filter]);

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="font-bold text-lg text-slate-900 tracking-tight">Users</div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
          {users.length} {users.length === 1 ? "contact" : "contacts"}
        </span>
      </div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search users by name..."
          onChange={(e) => {
            setfilter(e.target.value);
          }}
          className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-slate-900/10 focus:border-slate-800 focus:bg-white transition-all text-sm text-slate-900 placeholder:text-slate-400"
        />
      </div>
      <div className="divide-y divide-slate-100">
        {users.map((user) => (
          <User user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
}

function User({ user }) {
  const navigate = useNavigate();
  function handleclick() {
    navigate("/send?id=" + user._id + "&name=" + user.firstName);
  }

  return (
    <div className="flex items-center justify-between py-3 px-2 sm:px-3 rounded-xl hover:bg-slate-50/80 transition-all duration-150 gap-4">
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-sm sm:text-base flex items-center justify-center shrink-0 uppercase shadow-2xs">
          <span>{user.firstName ? user.firstName[0] : "U"}</span>
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-slate-800 text-sm sm:text-base truncate capitalize">
            {user.firstName} {user.lastName}
          </div>
          {user.username && (
            <div className="text-xs text-slate-400 truncate">
              {user.username}
            </div>
          )}
        </div>
      </div>

      <div className="shrink-0">
        <Button label={"Send Money"} onClick={handleclick} />
      </div>
    </div>
  );
}

export { User, Users };


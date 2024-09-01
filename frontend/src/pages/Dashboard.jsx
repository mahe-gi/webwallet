import React, { useEffect, useState } from "react";
import { Balance, AppBar, Users } from "../components/export";
import axios from "axios";
function Dashboard() {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(async (res) => {
        const response = res.data;
        setBalance(parseInt(response.balance));
      });
  });
  return (
    <div>
      {/* app bar to be implemented */}
      <AppBar />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
}

export default Dashboard;

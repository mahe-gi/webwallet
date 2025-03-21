import  { useEffect, useState } from "react";
import { Balance, AppBar, Users } from "../components/export";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Dashboard() {

  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();
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
      }).catch(() => {
        navigate("/signin");
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

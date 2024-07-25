import React from "react";
import { Balance, AppBar, Users } from "../components/export";
function Dashboard() {
  return (
    <div>
      <AppBar />
      <div className="m-8">
        <Balance value={"10,000"} />
        <Users />
      </div>
    </div>
  );
}

export default Dashboard;

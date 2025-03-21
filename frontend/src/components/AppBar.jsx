import { useNavigate } from "react-router-dom";
export default function AppBar() {
const navigate = useNavigate();

 const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  }


  return (
    <div className="shadow h-14 flex justify-between px-8">
      <div className="flex flex-col justify-center h-full ml-4">Wallet</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4 cursor-pointer text-red-400" onClick={handleLogout}>logout </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 cursor-pointer ">
          <div className="flex flex-col justify-center h-full text-xl" >U</div>
        </div>
      </div>
    </div>
  );
}

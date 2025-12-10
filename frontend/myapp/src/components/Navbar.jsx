import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/UserSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(s => s.user.username);

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="w-full bg-black text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl" >Quick Notes</div>
        <div className="flex items-center gap-4">
          <div className="text-xl font-medium">{username || "User"}</div>
          <button onClick={onLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        </div>
      </div>
    </nav>
  );
}

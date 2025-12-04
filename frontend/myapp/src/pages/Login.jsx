// src/pages/Login.jsx
import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/UserSlice";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("token/", form); // using /api/token/ (SimpleJWT)
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      // Optionally fetch user profile from backend, but we can store username as well:
      dispatch(setUser({ username: form.username, access: res.data.access, refresh: res.data.refresh }));
      navigate("/home");
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.detail || err.message));
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input className="w-full p-2 my-2 border rounded" placeholder="Username" value={form.username}
               onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input className="w-full p-2 my-2 border rounded" placeholder="Password" type="password" value={form.password}
               onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button className="w-full bg-black text-white p-2 rounded mt-3">Login</button>

        <p className="text-center mt-3 text-sm">Don't have an account? <Link className="text-blue-600" to="/signup">Signup</Link></p>
      </form>
    </div>
  );
};

export default Login;



// import { useState } from "react";
// import api from "../api/axios";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
// const [form, setForm] = useState({ username: "", password: "" });
// const navigate = useNavigate();

// const handleSubmit = async (e) => {
// e.preventDefault();

// const res = await api.post("login/", form);
// // after login response
// localStorage.setItem("access", res.data.access);
// localStorage.setItem("refresh", res.data.refresh);
// dispatch(setUser({ username: form.username, access: res.data.access, refresh: res.data.refresh }));


// navigate("/");
// };

// return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
// <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96">
// <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

// <input className="w-full p-2 my-2 border rounded" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
// <input className="w-full p-2 my-2 border rounded" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

// <button className="w-full bg-black text-white p-2 rounded mt-3">Login</button>

// <p className="text-center mt-3 text-sm">Don't have an account? <Link className="text-blue-600" to="/signup">Signup</Link></p>
// </form>
// </div>
// );
// };

// export default Login;
import { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
if (form.password !== form.confirm) return alert("Passwords do not match");
    try {
      await api.post("signup/", {
        username: form.username,
        email: form.email,
        password: form.password,
      });
      alert("Account created — please log in");
      navigate("/");
    } catch (err) {
      alert("Signup failed: " + JSON.stringify(err.response?.data || err.message));
    }
  };

return (
<div className="h-screen flex items-center justify-center bg-gray-100">
<form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96">
<h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

<input  required className="w-full p-2 my-2 border rounded" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
<input  required className="w-full p-2 my-2 border rounded" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
<input  required className="w-full p-2 my-2 border rounded" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
<input required  className="w-full p-2 my-2 border rounded" type="password" placeholder="Confirm Password" onChange={(e) => setForm({ ...form, confirm: e.target.value })} />

<button className="w-full bg-black text-white p-2 rounded mt-3">Create Account</button>

<p className="text-center mt-3 text-sm">Already have an account? <Link className="text-blue-600" to="/">Login</Link></p>
</form>
</div>
);
};

export default Signup;
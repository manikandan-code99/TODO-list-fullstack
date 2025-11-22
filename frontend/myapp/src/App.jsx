import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";

import "./index.css";

const App = () => {
return (
<BrowserRouter>
<Routes>
{/* <Route path="/" element={<Home />} /> */}

<Route path="/signup" element={<Signup />} />
<Route path="/" element={<Login />} />
{/* <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
<Route path="/home" element={<Home/>}/>
</Routes>
</BrowserRouter>
);
};

export default App;

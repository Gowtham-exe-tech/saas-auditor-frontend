import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddSubscription from "./pages/AddSubscription";
import Subscriptions from "./pages/Subscriptions";
import PrivateRoute from "./routes/privateRoute";
import ProtectedLayout from "./layouts/ProtectedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route element={<PrivateRoute />}>
          <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-subscription" element={<AddSubscription />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
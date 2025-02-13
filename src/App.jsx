import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root ("/") to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Registration route */}
        <Route path="/register" element={<RegistrationForm />} />

        {/* Login route */}
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Events from "./routes/events";
import LoginContainer from "./routes/loginContainer";
import RegistrationContainer from "./routes/registrationContainer";

import "./Styles/index.css"

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="events" element={<Events />} />
            <Route path="login" element={<LoginContainer />} />
            <Route path="register" element={<RegistrationContainer />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

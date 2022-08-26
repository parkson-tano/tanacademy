import './App.css';
import CourseDetails from './pages/CourseDetails';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Navbar from './components/common/Navbar';
import EnrollmentPage from './pages/EnrollmentPage';

function App() {
  const params = useParams();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="" element={<HomePage />} />
        <Route path="/course/:id/:slug" element={<CourseDetails />} />
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="auth/signup" element={<SignUpPage />} />
        <Route path="mycourse/" element={<EnrollmentPage/>} />
      </Routes>
    </Router>
  );
}
export default App;

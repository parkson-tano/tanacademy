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
        <Route exact path="" element={<HomePage />} />
        <Route exact path="/course/:id/:slug" element={<CourseDetails />} />
        <Route exact path="auth/login" element={<LoginPage />} />
        <Route exact path="auth/signup" element={<SignUpPage />} />
        <Route exact path="mycourse/" element={<EnrollmentPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
export default App;

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

function App() {
  const params = useParams();
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="" element={<HomePage />} />
        <Route path="/course/:id/:slug" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

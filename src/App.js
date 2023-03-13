import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHomePage from "./Pages/Admin/AdminHomePage";
import CreateQuiz from "./Pages/CreateQuiz/CreateQuiz";
import Layout from "./Pages/Layout/Layout";
import "./sass/main.scss";
function App() {
  return (
    <Router>
        <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<AdminHomePage />} />
            <Route path="/CreateQuiz" element={<CreateQuiz />} />
          </Routes>
        </div>
    </Layout>
      </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AdminHomePage from "./Pages/Admin/AdminHomePage";
import CreateQuiz from "./Pages/CreateQuiz/CreateQuiz";
import Layout from "./Pages/Layout/Layout";
import "./sass/main.scss";
import { useDispatch,useSelector } from "react-redux";
import { fetchQuizes } from "./redux/Actions/actionCreators";
function App() {
  const state = useSelector(state => state);
  console.log(state.reducer.data);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(fetchQuizes())
  },[])
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

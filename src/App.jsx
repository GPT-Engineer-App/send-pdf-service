import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ViewLog from "./pages/ViewLog.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/view-log" element={<ViewLog />} />
      </Routes>
    </Router>
  );
}

export default App;

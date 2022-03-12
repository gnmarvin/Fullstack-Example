import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListStockComponent from "./components/ListStockComponent";
import AddStock from "./components/AddStock";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<ListStockComponent/>}></Route>
            <Route path="/stocks" element={<ListStockComponent/>}></Route>
            <Route path="/add-stock" element={<AddStock/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

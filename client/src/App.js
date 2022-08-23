import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPageView from "./components/Views/IndexPageView"
import BinView from './components/Views/BinView';

const tester = '{"request_id":5,"method":"post","path":"/ooo","data":{"headers":"testing","query_params":"","body":"body content"}}'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPageView/>} />
        <Route path="/bin/view/:binId" element={<BinView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

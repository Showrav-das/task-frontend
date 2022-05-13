import './App.css';
import CustomerForm from './pages/CustomerForm';
import { Routes, Route} from "react-router-dom";
import CustomerDetails from './pages/CustomerDetails';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<CustomerForm />} />
      <Route path="/CustomerDetails" element={<CustomerDetails />} />
    </Routes>
    </div>
  );
}

export default App;

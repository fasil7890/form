import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddEdit from './pages/AddEdit/AddEdit';
import View from './pages/View/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';

function App() {
  const [data, setData] = useState(); // State to hold the data
console.log(data,"########");
  return (
    <BrowserRouter>
      <div className="app-container">
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          <Route path="/add" element={<AddEdit setData={setData}/>} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

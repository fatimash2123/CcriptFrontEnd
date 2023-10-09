import Login from './pages/Login';
import Appointments from './pages/Appointments';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login></Login>}></Route>
          <Route exact path="/appointments" element={<Appointments></Appointments>}></Route>
          <Route exact path="/success" element={<Success></Success>}></Route>
          <Route exact path="/cancel" element={<Cancel></Cancel>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

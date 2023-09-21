import Login from './pages/Login';
import Appointments from './pages/Appointments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login></Login>}></Route>
          <Route exact path="/appointments" element={<Appointments></Appointments>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

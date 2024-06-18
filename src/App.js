import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    

    <BrowserRouter>
    
        <div className="pages">
          
          <Routes>
            <Route
              path="/"
              element= {<Dashboard/>}
            />
            <Route
              path="/login"
              element={<Login />}
            />
          


          </Routes>

        </div>


      </BrowserRouter>
    </>
  );
}

export default App;

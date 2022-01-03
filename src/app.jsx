import Header from './components/header';
import {Routes, Route} from 'react-router-dom';
import Login from './routes/login';
import RequireAuth from './routes/require-auth';
import Add from './routes/add';
import Home from './routes/home';

function App() {
  return <>
    <Header/>
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route
        path="add"
        element={
          <RequireAuth>
            <Add/>
          </RequireAuth>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }
      />
    </Routes>
  </>;
}

export default App;
